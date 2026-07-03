export interface PricePoint {
  date: string; // YYYY-MM-DD
  price: number;
}

const BASE = "https://api.coingecko.com/api/v3";

export async function fetchCoingeckoSeries(
  coinId: string,
  days = 730
): Promise<PricePoint[]> {
  const url = `${BASE}/coins/${encodeURIComponent(coinId)}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
  const res = await fetch(url, { headers: { accept: "application/json" } });
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
  const res = await fetch(url, { headers: { accept: "application/json" } });
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
