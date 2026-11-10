const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const buckets = new Map<string, number[]>();

/**
 * In-memory window per server instance.
 * A public enquiry form does not need a shared store.
 * Cold starts reset the window, which only makes the limit more forgiving.
 */
export function rateLimit(key: string, now = Date.now()): boolean {
  const recent = (buckets.get(key) ?? []).filter((stamp) => now - stamp < WINDOW_MS);

  if (recent.length >= MAX_HITS) {
    buckets.set(key, recent);
    return false;
  }

  recent.push(now);
  buckets.set(key, recent);

  if (buckets.size > 5000) {
    buckets.forEach((stamps, ip) => {
      if (stamps.every((stamp) => now - stamp >= WINDOW_MS)) {
        buckets.delete(ip);
      }
    });
  }

  return true;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 80);
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 80);

  return "unknown";
}
