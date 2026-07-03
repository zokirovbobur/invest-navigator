import { eq } from "drizzle-orm";
import { getDb } from "../../db/client.js";
import { priceCache } from "../../db/schema.js";

export interface CacheResult<T> {
  data: T;
  stale: boolean;
}

/**
 * Read-through cache backed by the `price_cache` table. On a fetch
 * failure, serves stale cached data if any exists instead of failing the
 * whole request — market-data flakiness should degrade gracefully, not
 * break the app.
 */
export async function withCache<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<CacheResult<T>> {
  const db = getDb();
  const rows = await db.select().from(priceCache).where(eq(priceCache.key, key)).limit(1);
  const row = rows[0];

  if (row) {
    const age = Date.now() - new Date(row.fetchedAt).getTime();
    if (age < ttlMs) {
      return { data: row.payload as T, stale: false };
    }
  }

  try {
    const fresh = await fetcher();
    await db
      .insert(priceCache)
      .values({ key, payload: fresh as unknown, fetchedAt: new Date() })
      .onConflictDoUpdate({
        target: priceCache.key,
        set: { payload: fresh as unknown, fetchedAt: new Date() },
      });
    return { data: fresh, stale: false };
  } catch (err) {
    if (row) {
      console.error(`withCache(${key}): fetch failed, serving stale cache`, err);
      return { data: row.payload as T, stale: true };
    }
    throw err;
  }
}
