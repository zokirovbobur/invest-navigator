export interface PricePoint {
  date: string; // YYYY-MM-DD
  price: number;
}

/**
 * Yahoo Finance's unofficial (but widely used, keyless) public chart API.
 * Used in place of Stooq's CSV export, which now blocks non-browser
 * requests behind a JS bot-check challenge (confirmed on the live
 * deployment — see docs/PROGRESS.md).
 */
export async function fetchYahooSeries(symbol: string, range = "1y"): Promise<PricePoint[]> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=1d`;
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Yahoo Finance error ${res.status} for ${symbol}`);
  }
  const json = (await res.json()) as {
    chart?: {
      result?: [
        {
          timestamp?: number[];
          indicators?: { quote?: [{ close?: (number | null)[] }] };
        },
      ];
    };
  };
  const result = json.chart?.result?.[0];
  const timestamps = result?.timestamp;
  const closes = result?.indicators?.quote?.[0]?.close;
  if (!timestamps || !closes) {
    throw new Error(`Yahoo Finance: unexpected response shape for ${symbol}`);
  }

  const points: PricePoint[] = [];
  for (let i = 0; i < timestamps.length; i++) {
    const close = closes[i];
    if (close == null) continue;
    const date = new Date(timestamps[i]! * 1000).toISOString().slice(0, 10);
    points.push({ date, price: close });
  }
  if (points.length === 0) {
    throw new Error(`Yahoo Finance: parsed zero rows for ${symbol}`);
  }
  return points;
}
