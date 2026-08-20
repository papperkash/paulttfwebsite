"use strict";

/**
 * Server-only Microsoft Bookings / Graph integration for The Technology
 * Framework booking flow. A faithful JavaScript port of the proven DeskCrew
 * implementation (lib/booking-graph.ts): token management, service/staff
 * discovery, live availability via getStaffAvailability with a real-calendar
 * cross-check, the synthetic fallback, the appointment builder, and the
 * DST-correct Europe/London <-> UTC helpers.
 */

const { formatUkShortDay, formatUkTime } = require("./booking-time");

const GRAPH = "https://graph.microsoft.com/v1.0";
const BUSINESS_TZ = "Europe/London";

function readEnv() {
  return {
    tenant: process.env.MS_TENANT_ID || "",
    clientId: process.env.MS_GRAPH_CLIENT_ID || "",
    clientSecret: process.env.MS_GRAPH_CLIENT_SECRET || "",
    businessId: process.env.BOOKINGS_BUSINESS_ID || "",
    serviceId: process.env.BOOKINGS_SERVICE_ID || "",
    serviceNameMatch: process.env.BOOKINGS_SERVICE_NAME_MATCH || "",
    staffId: process.env.BOOKINGS_STAFF_ID || "",
    staffNameMatch: process.env.BOOKINGS_STAFF_NAME_MATCH || "",
    timeZone: process.env.BOOKING_TIMEZONE || BUSINESS_TZ,
    defaultDuration: Number(process.env.BOOKING_DEFAULT_DURATION_MIN || "30") || 30,
    minLeadMinutes: Number(process.env.BOOKING_MIN_LEAD_MIN || "120") || 120,
    // "instant" attempts an immediate Graph appointment write; "email"
    // (default) shows live availability but captures the booking as a request
    // confirmed by email. App-only appointment writes have returned 500 for
    // this tenant's Bookings businesses, so email is the honest default.
    confirmMode: process.env.BOOKING_CONFIRM_MODE === "instant" ? "instant" : "email",
    // Mailbox whose real Outlook calendar blocks overlapping slots (any event,
    // busy or free). Empty = cross-check disabled.
    calendarUpn: process.env.BOOKING_CALENDAR_UPN || "",
  };
}

function isConfigured(env) {
  const e = env || readEnv();
  return Boolean(e.tenant && e.clientId && e.clientSecret && e.businessId);
}

// --- Timezone: native-only, DST-correct -----------------------------------

function tzParts(date, tz) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const m = {};
  for (const p of dtf.formatToParts(date)) if (p.type !== "literal") m[p.type] = p.value;
  return { wd: m.weekday, y: +m.year, mo: +m.month, d: +m.day, h: +m.hour % 24, mi: +m.minute, s: +m.second };
}

function tzOffsetMs(date, tz) {
  const p = tzParts(date, tz);
  const asUTC = Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi, p.s);
  const instant = Math.floor(date.getTime() / 1000) * 1000;
  return asUTC - instant;
}

function zonedWallToUtc(y, mo, d, h, mi, tz) {
  const zone = tz || BUSINESS_TZ;
  const guess = Date.UTC(y, mo - 1, d, h, mi, 0);
  const off1 = tzOffsetMs(new Date(guess), zone);
  let utc = guess - off1;
  const off2 = tzOffsetMs(new Date(utc), zone);
  if (off2 !== off1) utc = guess - off2;
  return new Date(utc);
}

function londonDayKey(date, tz) {
  const p = tzParts(date, tz || BUSINESS_TZ);
  return `${p.y}-${String(p.mo).padStart(2, "0")}-${String(p.d).padStart(2, "0")}`;
}

function addDaysToDayKey(key, n) {
  const [y, mo, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, mo - 1, d + n));
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}-${String(dt.getUTCDate()).padStart(2, "0")}`;
}

function dayKeyWeekday(key) {
  const [y, mo, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
}

/** Parse Graph's naive datetime strings; "(UTC)"-labelled zones are UTC. */
function parseGraphDateTime(dateTime, timeZone) {
  const m = dateTime.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!m) return new Date(NaN);
  const [y, mo, d, h, mi] = m.slice(1).map(Number);
  const tz = timeZone || "";
  if (tz === "UTC" || tz === "Etc/UTC" || tz.startsWith("(UTC)")) return new Date(Date.UTC(y, mo - 1, d, h, mi, 0));
  return zonedWallToUtc(y, mo, d, h, mi, tz);
}

function graphUtcNaive(d) {
  return d.toISOString().slice(0, 19);
}

function toGraphUtc(d) {
  return d.toISOString().replace("Z", "0000+00:00");
}

// --- Auth + fetch ----------------------------------------------------------

let tokenCache = null;

async function graphToken(env) {
  const now = Date.now();
  if (tokenCache && tokenCache.expEpoch - 60000 > now) return tokenCache.token;

  const body = new URLSearchParams({
    client_id: env.clientId,
    client_secret: env.clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });
  const res = await fetch(`https://login.microsoftonline.com/${env.tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Graph token request failed (${res.status})`);
  const json = await res.json();
  if (!json.access_token) throw new Error("Graph token response had no access_token");
  tokenCache = { token: json.access_token, expEpoch: now + (json.expires_in || 3600) * 1000 };
  return json.access_token;
}

async function graphFetch(token, path, init) {
  return fetch(`${GRAPH}${path}`, {
    ...(init || {}),
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      ...((init && init.headers) || {}),
    },
  });
}

// --- Service / staff discovery (env first, discovery fallback; cached) -----

let resolveCache = null;

function parseIsoDurationMin(iso) {
  if (!iso) return null;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!m) return null;
  const mins = Number(m[1] || 0) * 60 + Number(m[2] || 0);
  return mins > 0 ? mins : null;
}

async function resolveServiceAndStaff(env, token) {
  if (resolveCache && resolveCache.expEpoch > Date.now()) return resolveCache.value;

  const base = `/solutions/bookingBusinesses/${encodeURIComponent(env.businessId)}`;
  let serviceId = env.serviceId;
  let staffId = env.staffId;
  let durationMin = env.defaultDuration;

  if (!serviceId) {
    const res = await graphFetch(token, `${base}/services`);
    if (res.ok) {
      const data = await res.json();
      const list = data.value || [];
      const pick =
        (env.serviceNameMatch
          ? list.find((s) => (s.displayName || "").toLowerCase().includes(env.serviceNameMatch.toLowerCase()))
          : undefined) || list[0];
      if (pick) {
        serviceId = pick.id;
        durationMin = parseIsoDurationMin(pick.defaultDuration) || durationMin;
      }
    }
  }

  if (!staffId) {
    const res = await graphFetch(token, `${base}/staffMembers`);
    if (res.ok) {
      const data = await res.json();
      const list = data.value || [];
      const pick =
        (env.staffNameMatch
          ? list.find((s) => (s.displayName || "").toLowerCase().includes(env.staffNameMatch.toLowerCase()))
          : undefined) || list[0];
      if (pick) staffId = pick.id;
    }
  }

  const value = { serviceId, staffId, durationMin };
  resolveCache = { value, expEpoch: Date.now() + 10 * 60000 };
  return value;
}

// --- Slots -----------------------------------------------------------------

function groupByDay(slots) {
  const byDay = new Map();
  for (const s of slots) {
    const key = londonDayKey(new Date(s.startUtc));
    const arr = byDay.get(key);
    if (arr) arr.push(s);
    else byDay.set(key, [s]);
  }
  return Array.from(byDay.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, daySlots]) => ({
      date,
      label: formatUkShortDay(new Date(daySlots[0].startUtc)),
      slots: daySlots.sort((x, y) => x.startUtc.localeCompare(y.startUtc)),
    }));
}

function mkSlot(startUtc, durationMin) {
  const endUtc = new Date(startUtc.getTime() + durationMin * 60000);
  return { startUtc: startUtc.toISOString(), endUtc: endUtc.toISOString(), label: formatUkTime(startUtc) };
}

/** Busy intervals from the real Outlook calendar of env.calendarUpn (any
 * non-cancelled event blocks). Best-effort: [] on any failure. */
async function listCalendarBusyIntervals(env, token, startUtc, endUtc) {
  if (!env.calendarUpn) return [];
  const url =
    `/users/${encodeURIComponent(env.calendarUpn)}/calendarView` +
    `?startDateTime=${startUtc.toISOString()}&endDateTime=${endUtc.toISOString()}` +
    `&$select=start,end,isCancelled&$top=250&$orderby=start/dateTime`;
  try {
    const res = await graphFetch(token, url, { headers: { Prefer: 'outlook.timezone="UTC"' } });
    if (!res.ok) return [];
    const data = await res.json();
    const out = [];
    for (const ev of data.value || []) {
      if (ev.isCancelled || !ev.start || !ev.start.dateTime || !ev.end || !ev.end.dateTime) continue;
      const s = parseGraphDateTime(ev.start.dateTime, ev.start.timeZone).getTime();
      const e = parseGraphDateTime(ev.end.dateTime, ev.end.timeZone).getTime();
      if (Number.isFinite(s) && Number.isFinite(e) && e > s) out.push([s, e]);
    }
    return out;
  } catch {
    return [];
  }
}

/** Live availability from Microsoft Bookings, cross-checked against the real
 * calendar, sliced into duration-length starts behind a lead-time gate. */
async function listAvailableSlots(env, token, fromDayKey, days) {
  const { serviceId, staffId, durationMin } = await resolveServiceAndStaff(env, token);
  if (!serviceId || !staffId) throw new Error("Bookings service or staff not resolvable");

  const toDayKey = addDaysToDayKey(fromDayKey, days);
  const [fy, fmo, fd] = fromDayKey.split("-").map(Number);
  const [ty, tmo, td] = toDayKey.split("-").map(Number);
  const fromUtc = zonedWallToUtc(fy, fmo, fd, 0, 0);
  const toUtc = zonedWallToUtc(ty, tmo, td, 0, 0);
  const base = `/solutions/bookingBusinesses/${encodeURIComponent(env.businessId)}`;
  const res = await graphFetch(token, `${base}/getStaffAvailability`, {
    method: "POST",
    body: JSON.stringify({
      staffIds: [staffId],
      startDateTime: { dateTime: graphUtcNaive(fromUtc), timeZone: "UTC" },
      endDateTime: { dateTime: graphUtcNaive(toUtc), timeZone: "UTC" },
    }),
  });
  if (!res.ok) {
    const err = new Error(`getStaffAvailability failed (${res.status})`);
    err.graphStatus = res.status;
    throw err;
  }

  const data = await res.json();
  const items = (data.value && data.value[0] && data.value[0].availabilityItems) || [];
  const stepMs = durationMin * 60000;
  const earliest = Date.now() + env.minLeadMinutes * 60000;
  const seen = new Set();
  const slots = [];

  for (const item of items) {
    const status = (item.status || "").toLowerCase();
    if (status !== "available" && status !== "slotsavailable") continue;
    if (!item.startDateTime || !item.endDateTime) continue;
    const segStart = parseGraphDateTime(item.startDateTime.dateTime, item.startDateTime.timeZone);
    const segEnd = parseGraphDateTime(item.endDateTime.dateTime, item.endDateTime.timeZone);
    if (Number.isNaN(segStart.getTime()) || Number.isNaN(segEnd.getTime())) continue;
    for (let t = segStart.getTime(); t + stepMs <= segEnd.getTime(); t += stepMs) {
      if (t < earliest || seen.has(t)) continue;
      seen.add(t);
      slots.push(mkSlot(new Date(t), durationMin));
    }
  }

  const busy = await listCalendarBusyIntervals(env, token, fromUtc, toUtc);
  const kept = busy.length
    ? slots.filter((s) => {
        const st = new Date(s.startUtc).getTime();
        const en = st + stepMs;
        return !busy.some(([bs, be]) => st < be && en > bs);
      })
    : slots;

  kept.sort((a, b) => a.startUtc.localeCompare(b.startUtc));
  return { days: groupByDay(kept), durationMin };
}

/** Honest fallback before Graph is configured: Mon-Fri 09:00-16:30 stepped by
 * duration, behind the same lead gate, flagged so the UI never claims live. */
function generateSyntheticSlots(fromDayKey, days, durationMin, minLeadMinutes) {
  const earliest = Date.now() + minLeadMinutes * 60000;
  const startMin = 9 * 60;
  const latestStartMin = 17 * 60 - durationMin;
  const slots = [];

  for (let i = 0; i < days; i++) {
    const key = addDaysToDayKey(fromDayKey, i);
    const wd = dayKeyWeekday(key);
    if (wd === 0 || wd === 6) continue;
    const [y, mo, d] = key.split("-").map(Number);
    for (let m = startMin; m <= latestStartMin; m += durationMin) {
      const startUtc = zonedWallToUtc(y, mo, d, Math.floor(m / 60), m % 60);
      if (startUtc.getTime() < earliest) continue;
      slots.push(mkSlot(startUtc, durationMin));
    }
  }

  slots.sort((a, b) => a.startUtc.localeCompare(b.startUtc));
  return { days: groupByDay(slots), durationMin };
}

// --- Appointment creation --------------------------------------------------

async function createAppointment(token, businessId, input) {
  const appointment = {
    "@odata.type": "#microsoft.graph.bookingAppointment",
    serviceId: input.serviceId,
    customerName: input.name,
    customerEmailAddress: input.email || undefined,
    customerPhone: input.phone || undefined,
    customerNotes: input.brief || undefined,
    isLocationOnline: true,
    optOutOfCustomerEmail: false,
    smsNotificationsEnabled: Boolean(input.phone),
    start: { "@odata.type": "#microsoft.graph.dateTimeTimeZone", dateTime: toGraphUtc(input.start), timeZone: "UTC" },
    end: { "@odata.type": "#microsoft.graph.dateTimeTimeZone", dateTime: toGraphUtc(input.end), timeZone: "UTC" },
    customers: [
      {
        "@odata.type": "#microsoft.graph.bookingCustomerInformation",
        name: input.name,
        emailAddress: input.email || undefined,
        phone: input.phone || undefined,
        notes: input.brief || undefined,
        timeZone: input.timeZone,
      },
    ],
    ...(input.staffId ? { staffMemberIds: [input.staffId] } : {}),
  };

  const res = await graphFetch(token, `/solutions/bookingBusinesses/${encodeURIComponent(businessId)}/appointments`, {
    method: "POST",
    body: JSON.stringify(appointment),
  });

  if (!res.ok) {
    const text = await res.text();
    const safe = text
      .replace(/[\w.+-]+@[\w.-]+\.[\w.-]+/g, "[email]")
      .replace(/\+?\d[\d ()-]{6,}\d/g, "[phone]")
      .slice(0, 200);
    console.error("Bookings create failed", res.status, safe);
    const err = new Error(`Bookings create failed (${res.status})`);
    err.graphStatus = res.status;
    throw err;
  }

  const created = await res.json();
  return created.id || "";
}

/** Re-validate a chosen instant is still available before creating. */
async function isSlotStillAvailable(env, token, staffId, start, end) {
  const base = `/solutions/bookingBusinesses/${encodeURIComponent(env.businessId)}`;
  const res = await graphFetch(token, `${base}/getStaffAvailability`, {
    method: "POST",
    body: JSON.stringify({
      staffIds: [staffId],
      startDateTime: { dateTime: graphUtcNaive(start), timeZone: "UTC" },
      endDateTime: { dateTime: graphUtcNaive(end), timeZone: "UTC" },
    }),
  });
  if (!res.ok) {
    const err = new Error(`re-validate getStaffAvailability failed (${res.status})`);
    err.graphStatus = res.status;
    throw err;
  }
  const data = await res.json();
  const items = (data.value && data.value[0] && data.value[0].availabilityItems) || [];
  return items.some((item) => {
    const status = (item.status || "").toLowerCase();
    if (status !== "available" && status !== "slotsavailable") return false;
    if (!item.startDateTime || !item.endDateTime) return false;
    const segStart = parseGraphDateTime(item.startDateTime.dateTime, item.startDateTime.timeZone);
    const segEnd = parseGraphDateTime(item.endDateTime.dateTime, item.endDateTime.timeZone);
    return segStart.getTime() <= start.getTime() && segEnd.getTime() >= end.getTime();
  });
}

module.exports = {
  BUSINESS_TZ,
  readEnv,
  isConfigured,
  graphToken,
  resolveServiceAndStaff,
  listAvailableSlots,
  generateSyntheticSlots,
  createAppointment,
  isSlotStillAvailable,
  londonDayKey,
  addDaysToDayKey,
};
