"use strict";

/**
 * UK-time display helpers for the booking flow. Ported from the DeskCrew
 * implementation (lib/booking-time.ts). Everything renders in Europe/London
 * via native Intl, which is DST-correct automatically.
 */

const TZ = "Europe/London";

function toDate(value) {
  return value instanceof Date ? value : new Date(value);
}

function ukParts(value, opts) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, ...opts }).formatToParts(toDate(value));
  const out = {};
  for (const p of parts) if (p.type !== "literal") out[p.type] = p.value;
  return out;
}

/** "09:30" (24-hour, UK time). */
function formatUkTime(value) {
  const p = ukParts(value, { hour: "2-digit", minute: "2-digit", hour12: false });
  return `${p.hour}:${p.minute}`;
}

/** "Tue 14 Jul" - compact day label. */
function formatUkShortDay(value) {
  const p = ukParts(value, { weekday: "short", day: "numeric", month: "short" });
  return `${p.weekday} ${p.day} ${p.month}`;
}

/** "Tuesday 14 July" - full day heading. */
function formatUkDate(value) {
  const p = ukParts(value, { weekday: "long", day: "numeric", month: "long" });
  return `${p.weekday} ${p.day} ${p.month}`;
}

/** "Tuesday 14 July at 09:30" - confirmation / email phrasing. */
function formatUkDateTime(value) {
  return `${formatUkDate(value)} at ${formatUkTime(value)}`;
}

module.exports = { TZ, formatUkTime, formatUkShortDay, formatUkDate, formatUkDateTime };
