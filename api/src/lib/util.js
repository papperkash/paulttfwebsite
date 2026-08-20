"use strict";

/**
 * In-memory helpers for the booking endpoints: a per-key token bucket
 * (courtesy throttle, not a security boundary) and best-effort idempotency
 * keyed on a per-form-render submissionId. Both per-instance and wiped on
 * cold start; Graph rejecting overlapping appointments remains the real
 * anti-double-book guard. Ported from the DeskCrew implementation.
 */

const { createHash } = require("crypto");

// --- Rate limit ------------------------------------------------------------

const buckets = new Map();

function takeToken(key, capacity, refillMs) {
  const now = Date.now();
  if (buckets.size > 500) {
    buckets.forEach((b, k) => {
      if (now - b.updated > 10 * 60000) buckets.delete(k);
    });
  }
  const b = buckets.get(key) || { tokens: capacity, updated: now };
  const refill = Math.floor((now - b.updated) / refillMs);
  if (refill > 0) {
    b.tokens = Math.min(capacity, b.tokens + refill);
    b.updated = now;
  }
  if (b.tokens <= 0) {
    buckets.set(key, b);
    return { ok: false, retryAfterSec: Math.ceil(refillMs / 1000) };
  }
  b.tokens -= 1;
  buckets.set(key, b);
  return { ok: true, retryAfterSec: 0 };
}

// --- Idempotency -----------------------------------------------------------

const store = new Map();
const TTL = 10 * 60000;

function sweep(now) {
  if (store.size <= 500) return;
  store.forEach((e, k) => {
    if (e.expires < now) store.delete(k);
  });
}

function reserve(id) {
  const now = Date.now();
  sweep(now);
  const existing = store.get(id);
  if (existing && existing.expires > now) return existing;
  store.set(id, { state: "in_flight", expires: now + TTL });
  return null;
}

function resolve(id, status, body) {
  store.set(id, { state: "done", status, body, expires: Date.now() + TTL });
}

function release(id) {
  const e = store.get(id);
  if (e && e.state === "in_flight") store.delete(id);
}

// --- Small shared helpers --------------------------------------------------

function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd && fwd.split(",")[0].trim()) || "unknown";
}

function ipHash(ip) {
  return createHash("sha256").update("ttf:" + ip).digest("hex").slice(0, 12);
}

// Strip control characters (incl. CR/LF) to prevent header/log injection.
function clean(v, max) {
  return String(v == null ? "" : v)
    .normalize("NFC")
    .replace(/[\x00-\x1F\x7F]/g, " ")
    .trim()
    .slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = { takeToken, reserve, resolve, release, clientIp, ipHash, clean, EMAIL_RE };
