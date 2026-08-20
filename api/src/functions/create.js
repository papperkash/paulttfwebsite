"use strict";

/**
 * POST /api/booking/create
 *
 * When BOOKING_CONFIRM_MODE=instant and Graph is configured: re-validates the
 * chosen slot server-side, then creates the Microsoft Bookings appointment
 * (201 "confirmed"). Otherwise (the honest default) it captures the request as
 * a lead by email with a tentative calendar invite and returns 202 "lead":
 * never a false confirmation. Only if Graph AND email both fail does it
 * surface a 503 with the phone number. Every booking parameter (service,
 * staff, duration, timezone) is recomputed from server env; the client is
 * trusted only for its own contact details and the chosen start instant.
 */

const { app } = require("@azure/functions");
const {
  readEnv,
  isConfigured,
  graphToken,
  resolveServiceAndStaff,
  isSlotStillAvailable,
  createAppointment,
} = require("../lib/booking-graph");
const { formatUkDateTime } = require("../lib/booking-time");
const { sendBookingLead } = require("../lib/booking-email");
const { takeToken, reserve, resolve, release, clientIp, ipHash, clean, EMAIL_RE } = require("../lib/util");

const CONTACT_PHONE = "0117 456 5486";

function json(status, body, extraHeaders) {
  return { status, headers: { "Cache-Control": "no-store", ...(extraHeaders || {}) }, jsonBody: body };
}

async function tryGraphBooking(env, start, fields) {
  let token;
  try {
    token = await graphToken(env);
  } catch {
    return { kind: "infra" };
  }

  let serviceId;
  let staffId;
  let durationMin;
  try {
    const r = await resolveServiceAndStaff(env, token);
    serviceId = env.serviceId || r.serviceId;
    staffId = env.staffId || r.staffId;
    durationMin = r.durationMin;
  } catch {
    return { kind: "infra" };
  }
  if (!serviceId) return { kind: "infra" };

  const end = new Date(start.getTime() + durationMin * 60000);

  try {
    const available = await isSlotStillAvailable(env, token, staffId, start, end);
    if (!available) return { kind: "slot_unavailable" };
  } catch {
    return { kind: "infra" };
  }

  const brief = [fields.company && `Company: ${fields.company}`, fields.note && `Notes: ${fields.note}`]
    .filter(Boolean)
    .join("\n");

  try {
    const appointmentId = await createAppointment(token, env.businessId, {
      serviceId,
      staffId,
      start,
      end,
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      brief,
      timeZone: env.timeZone,
    });
    if (!appointmentId) return { kind: "infra" };
    return { kind: "confirmed", appointmentId };
  } catch (err) {
    const status = err && err.graphStatus;
    if (status === 409 || status === 400) return { kind: "slot_taken" };
    return { kind: "infra" };
  }
}

app.http("bookingCreate", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "booking/create",
  handler: async (request, context) => {
    const raw = await request.text();
    if (raw.length > 16384) return json(413, { ok: false, code: "TOO_LARGE", error: "Request too large." });

    let payload;
    try {
      payload = JSON.parse(raw || "{}");
    } catch {
      return json(400, { ok: false, code: "BAD_JSON", error: "Invalid request." });
    }

    // Honeypot: silently accept and drop.
    if (clean(payload.website, 200)) return json(200, { ok: true, status: "received" });

    // Timing trap. Too-fast / missing = bot (silent accept); very old = stale form.
    const ts = Number(payload.ts);
    const elapsed = Number.isFinite(ts) ? Date.now() - ts : NaN;
    if (!Number.isFinite(elapsed) || elapsed < 3000) return json(200, { ok: true, status: "received" });
    if (elapsed > 2 * 60 * 60000)
      return json(400, { ok: false, code: "STALE_FORM", error: "This form expired. Please refresh and try again." });

    const ip = clientIp(request);
    const rl = takeToken(`book:${ip}`, 5, 12000);
    if (!rl.ok) {
      return json(
        429,
        { ok: false, code: "RATE_LIMITED", error: "You're going a bit fast. Please wait a moment and try again." },
        { "Retry-After": String(rl.retryAfterSec) }
      );
    }

    const name = clean(payload.name, 100);
    const email = clean(payload.email, 254);
    const phoneRaw = clean(payload.phone, 40).replace(/[\s()-]/g, "");
    const company = clean(payload.company, 120);
    const note = clean(payload.note, 1000);
    const consent = payload.consent === true;
    const submissionId = clean(payload.submissionId, 64) || `ip:${ipHash(ip)}:${ts}`;

    if (!name || /https?:\/\//i.test(name)) return json(400, { ok: false, code: "BAD_NAME", error: "Please enter your name." });
    if (!EMAIL_RE.test(email))
      return json(400, { ok: false, code: "BAD_EMAIL", error: "That email address doesn't look right." });
    const phone = phoneRaw && /^\+?[0-9]{7,15}$/.test(phoneRaw) ? phoneRaw : "";
    if (!consent)
      return json(400, { ok: false, code: "NO_CONSENT", error: "Please accept the privacy note to continue." });

    // Lenient floor: past/immediate and absurdly-far times only. The real
    // gates are Graph re-validation (instant mode) or manual confirmation.
    const start = new Date(clean(payload.startUtc, 40));
    const nowMs = Date.now();
    if (Number.isNaN(start.getTime()) || start.getTime() < nowMs + 60000 || start.getTime() > nowMs + 90 * 864e5)
      return json(400, { ok: false, code: "BAD_TIME", error: "Please pick a valid time slot." });

    const prior = reserve(submissionId);
    if (prior) {
      if (prior.state === "done") return json(prior.status, prior.body);
      return json(409, { ok: false, code: "DUPLICATE_SUBMIT", error: "That request is already going through." });
    }

    const env = readEnv();
    const fields = { name, email, phone, company, note };
    const whenUk = formatUkDateTime(start);

    try {
      if (env.confirmMode === "instant" && isConfigured(env)) {
        const outcome = await tryGraphBooking(env, start, fields);
        if (outcome.kind === "confirmed") {
          const body = {
            ok: true,
            status: "confirmed",
            appointmentId: outcome.appointmentId || null,
            startUtc: start.toISOString(),
            whenUk,
            email,
          };
          context.log(JSON.stringify({ event: "booking_confirmed", slotStartUtc: start.toISOString(), ipHash: ipHash(ip) }));
          resolve(submissionId, 201, body);
          return json(201, body);
        }
        if (outcome.kind === "slot_taken") {
          release(submissionId);
          return json(409, {
            ok: false,
            status: "slot_taken",
            code: "SLOT_JUST_TAKEN",
            error: "That time was just taken. Pick another and it'll book instantly.",
          });
        }
        if (outcome.kind === "slot_unavailable") {
          release(submissionId);
          return json(409, {
            ok: false,
            status: "slot_unavailable",
            code: "SLOT_UNAVAILABLE",
            error: "That time isn't available. Please choose another.",
          });
        }
        // infra: fall through to lead capture below.
      }

      const emailed = await sendBookingLead({ start, durationMin: env.defaultDuration, whenUk, fields });
      if (emailed) {
        const body = { ok: true, status: "lead", startUtc: start.toISOString(), whenUk, email };
        context.log(JSON.stringify({ event: "booking_requested", slotStartUtc: start.toISOString(), ipHash: ipHash(ip) }));
        resolve(submissionId, 202, body);
        return json(202, body);
      }

      release(submissionId);
      return json(503, {
        ok: false,
        status: "error",
        code: "ALL_CHANNELS_DOWN",
        error: `Something went wrong on our side. Please call ${CONTACT_PHONE} and we'll book you straight in.`,
      });
    } catch (err) {
      release(submissionId);
      context.error("Booking create error", (err && err.name) || "err");
      return json(503, {
        ok: false,
        status: "error",
        code: "UNEXPECTED",
        error: `Something went wrong on our side. Please call ${CONTACT_PHONE}.`,
      });
    }
  },
});
