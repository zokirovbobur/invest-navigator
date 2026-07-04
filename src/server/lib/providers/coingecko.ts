export interface PricePoint {
  date: string; // YYYY-MM-DD
  price: number;
}

const BASE = "https://api.coingecko.com/api/v3";

/** CoinGecko's free Demo/Public plan caps historical data at 365 days;
 * requesting more (e.g. the 730 this used to ask for) returns a 401. */
export const COINGECKO_MAX_DAYS = 365;

/**
 * CoinGecko's free tier now requires a (still free, no-card) Demo API key
 * on api.coingecko.com — anonymous requests get a 401. Sign up at
 * https://www.coingecko.com/en/api/pricing and set COINGECKO_API_KEY.
 * Falls back to no header if unset (will 401 until one is configured).
 */
function authHeaders(): Record<string, string> {
  const key = process.env.COINGECKO_API_KEY;
  const headers: Record<string, string> = { accept: "application/json" };
  if (key) headers["x-cg-demo-api-key"] = key;
  return headers;
}

export async function fetchCoingeckoSeries(
  coinId: string,
  days = COINGECKO_MAX_DAYS
): Promise<PricePoint[]> {
  const url = `${BASE}/coins/${encodeURIComponent(coinId)}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
  const res = await fetch(url, { headers: authHeaders() });
  if (!res.ok) {
    throw new Error(`CoinGecko series error ${res.status} for ${coinId}`);
  }
  const json = (await res.json()) as { prices?: [number, number][] };
  if (!Array.isArray(json.prices)) {
    throw new Error(`CoinGecko: unexpected response shape for ${coinId}`);
  }
  // Collapse to one point per day (CoinGecko sometimes returns a trailing
  // intraday point for "today").
  const byDate = new Map<string, number>();
  for (const [ts, price] of json.prices) {
    const date = new Date(ts).toISOString().slice(0, 10);
    byDate.set(date, price);
  }
  return [...byDate.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, price]) => ({ date, price }));
}

export async function fetchCoingeckoLatest(coinId: string): Promise<number> {
  const url = `${BASE}/simple/price?ids=${encodeURIComponent(coinId)}&vs_currencies=usd`;
  const res = await fetch(url, { headers: authHeaders() });
  if (!res.ok) {
    throw new Error(`CoinGecko latest error ${res.status} for ${coinId}`);
  }
  const json = (await res.json()) as Record<string, { usd?: number }>;
  const price = json[coinId]?.usd;
  if (typeof price !== "number") {
    throw new Error(`CoinGecko: no USD price for ${coinId}`);
  }
  return price;
}
