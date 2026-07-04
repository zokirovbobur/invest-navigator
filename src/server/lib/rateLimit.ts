import { HTTPException } from "hono/http-exception";
import type { Context, Next } from "hono";
import { eq } from "drizzle-orm";
import { getDb } from "../../db/client.js";
import { rateLimits } from "../../db/schema.js";

const WINDOW_MS = 60_000;

function clientIp(c: Context): string {
  const forwarded = c.req.header("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return c.req.header("x-real-ip") || "unknown";
}

/**
 * Simple fixed-window per-IP rate limiter backed by the `rate_limits`
 * table. Soft limit, not a hard security boundary — there's a small race
 * window between the read and the write under concurrent requests from
 * the same IP, which is an acceptable tradeoff for MVP abuse protection
 * (protects our own CoinGecko/Yahoo Finance/CBU quota and discourages
 * credential stuffing) rather than a strict guarantee.
 */
export function rateLimit(bucket: string, limit: number) {
  return async (c: Context, next: Next) => {
    const key = `${bucket}:${clientIp(c)}`;
    const db = getDb();
    const now = Date.now();

    const rows = await db.select().from(rateLimits).where(eq(rateLimits.key, key)).limit(1);
    const row = rows[0];

    if (!row || now - new Date(row.windowStart).getTime() > WINDOW_MS) {
      await db
        .insert(rateLimits)
        .values({ key, count: "1", windowStart: new Date() })
        .onConflictDoUpdate({ target: rateLimits.key, set: { count: "1", windowStart: new Date() } });
      await next();
      return;
    }

    const count = Number(row.count);
    if (count >= limit) {
      throw new HTTPException(429, { message: "Too many requests, please try again shortly" });
    }
    await db.update(rateLimits).set({ count: String(count + 1) }).where(eq(rateLimits.key, key));
    await next();
  };
}
