"use strict";

/**
 * Booking lead capture by email, with a tentative iCalendar (.ics) meeting
 * request attached. Ported from the DeskCrew implementation and rebranded for
 * The Technology Framework. Used when an instant Microsoft Bookings write is
 * not enabled: the request is emailed to CONTACT_TO for manual confirmation.
 */

const { createHash } = require("crypto");

const escHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const escIcs = (s) => s.replace(/([\\;,])/g, "\\$1").replace(/\r?\n/g, "\\n");
const icsStamp = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

function buildInviteIcs(start, durationMin, organiser, fields) {
  const end = new Date(start.getTime() + durationMin * 60000);
  const uid = `${icsStamp(start)}-${createHash("sha1").update(fields.email + start.toISOString()).digest("hex").slice(0, 12)}@thetechnologyframework.com`;
  const summary = escIcs(`TTF meeting: ${fields.name}${fields.company ? ` (${fields.company})` : ""}`);
  const desc = escIcs(
    `Booking request via thetechnologyframework.com. Tentative hold. Please confirm with the customer.\n` +
      `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone || "-"}\n` +
      `Company: ${fields.company || "-"}\nNote: ${fields.note || "-"}`
  );
  return [
    "BEGIN:VCALENDAR",
    "PRODID:-//The Technology Framework//Booking//EN",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${desc}`,
    "LOCATION:Phone / online",
    `ORGANIZER;CN=${escIcs(fields.name)}:mailto:${fields.email || organiser}`,
    `ATTENDEE;CN=The Technology Framework;RSVP=TRUE;PARTSTAT=NEEDS-ACTION;ROLE=REQ-PARTICIPANT:mailto:${organiser}`,
    "STATUS:TENTATIVE",
    "TRANSP:OPAQUE",
    "X-MICROSOFT-CDO-BUSYSTATUS:TENTATIVE",
    "SEQUENCE:0",
    "PRIORITY:5",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Email the booking request to CONTACT_TO with the tentative invite attached.
 * Returns true on send, false if email transport is not configured or fails. */
async function sendBookingLead(args) {
  const { start, durationMin, whenUk, fields } = args;
  const { CONTACT_TO, ACS_CONNECTION_STRING, ACS_SENDER } = process.env;
  if (!ACS_CONNECTION_STRING || !ACS_SENDER || !CONTACT_TO) return false;
  try {
    const { EmailClient } = require("@azure/communication-email");
    const client = new EmailClient(ACS_CONNECTION_STRING);

    const rows = [
      ["When", `${whenUk} (UK time)`],
      ["Name", fields.name],
      ["Email", fields.email || "-"],
      ["Phone", fields.phone || "-"],
      ["Company", fields.company || "-"],
      ["Note", fields.note || "-"],
    ];
    const plainText =
      `New booking request via thetechnologyframework.com.\n\n` +
      rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
      `\n\nA tentative calendar invite is attached. Open it to add the hold to your diary, then confirm the slot with the customer.`;
    const html =
      `<div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#261C40">` +
      `<p><strong>New booking request via thetechnologyframework.com.</strong></p>` +
      `<table cellpadding="4" style="border-collapse:collapse">` +
      rows.map(([k, v]) => `<tr><td style="color:#6b6386">${k}</td><td><strong>${escHtml(v)}</strong></td></tr>`).join("") +
      `</table>` +
      `<p>A tentative calendar invite is attached. Open it to add the hold to your diary, then confirm the slot with the customer.</p>` +
      `</div>`;

    const ics = buildInviteIcs(start, durationMin, CONTACT_TO, fields);

    const poller = await client.beginSend({
      senderAddress: ACS_SENDER,
      content: { subject: `Booking request from ${fields.name} for ${whenUk}`, plainText, html },
      recipients: { to: [{ address: CONTACT_TO }] },
      replyTo: fields.email ? [{ address: fields.email, displayName: fields.name }] : undefined,
      attachments: [
        {
          name: "invite.ics",
          contentType: "text/calendar; method=REQUEST; charset=utf-8",
          contentInBase64: Buffer.from(ics, "utf-8").toString("base64"),
        },
      ],
    });
    await poller.pollUntilDone();
    return true;
  } catch (err) {
    console.error("Booking lead email failed", (err && err.name) || "err");
    return false;
  }
}

module.exports = { sendBookingLead };
