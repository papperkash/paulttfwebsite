"use strict";

/**
 * GET /api/booking/availability?from=YYYY-MM-DD&days=14
 *
 * Discrete bookable slots grouped by UK-time day. With Graph credentials
 * provisioned it pulls LIVE free/busy from Microsoft Bookings (mode:"live");
 * otherwise it returns standard weekday hours (mode:"fallback"), clearly
 * flagged so the UI never presents them as live. Discloses only free slots:
 * no busy reasons, customer data, or internal ids.
 */

const { app } = require("@azure/functions");
const {
  BUSINESS_TZ,
  readEnv,
  isConfigured,
  graphToken,
  listAvailableSlots,
  generateSyntheticSlots,
  londonDayKey,
  addDaysToDayKey,
} = require("../lib/booking-graph");
const { takeToken, clientIp } = require("../lib/util");

const cache = new Map();

app.http("bookingAvailability", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "booking/availability",
  handler: async (request, context) => {
    const rl = takeToken(`avail:${clientIp(request)}`, 20, 3000);
    if (!rl.ok) {
      return {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
        jsonBody: { ok: false, code: "RATE_LIMITED", error: "You're going a bit fast. Please wait a moment." },
      };
    }

    const env = readEnv();
    const today = londonDayKey(new Date());

    let from = request.query.get("from") || today;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || from < today) from = today;
    const maxFrom = addDaysToDayKey(today, 60);
    if (from > maxFrom) from = maxFrom;
    const days = Math.min(Math.max(Number(request.query.get("days")) || 14, 1), 21);

    const configured = isConfigured(env);
    const cacheKey = `${configured ? "live" : "fb"}:${from}:${days}`;
    const hit = cache.get(cacheKey);
    if (hit && hit.expires > Date.now()) {
      return { status: 200, headers: { "Cache-Control": "private, max-age=30" }, jsonBody: hit.body };
    }

    let mode;
    let dayList;
    let durationMin;

    if (configured) {
      try {
        const token = await graphToken(env);
        const result = await listAvailableSlots(env, token, from, days);
        mode = "live";
        dayList = result.days;
        durationMin = result.durationMin;
      } catch (err) {
        context.error("availability: live lookup failed, using fallback", (err && err.graphStatus) || "err");
        const result = generateSyntheticSlots(from, days, env.defaultDuration, env.minLeadMinutes);
        mode = "fallback";
        dayList = result.days;
        durationMin = result.durationMin;
      }
    } else {
      const result = generateSyntheticSlots(from, days, env.defaultDuration, env.minLeadMinutes);
      mode = "fallback";
      dayList = result.days;
      durationMin = result.durationMin;
    }

    const body = {
      ok: true,
      mode,
      confirm: env.confirmMode,
      timeZone: BUSINESS_TZ,
      durationMin,
      leadMinutes: env.minLeadMinutes,
      from,
      days: dayList,
      ...(mode === "fallback" ? { notice: "Indicative weekday times. We confirm your exact slot by email." } : {}),
    };

    cache.set(cacheKey, { body, expires: Date.now() + 60000 });
    return { status: 200, headers: { "Cache-Control": "private, max-age=30" }, jsonBody: body };
  },
});
