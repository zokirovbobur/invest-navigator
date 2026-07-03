import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { desc, eq } from "drizzle-orm";
import { getDb } from "../../db/client.js";
import { fxRates } from "../../db/schema.js";
import { fetchCbuLatestRate } from "../lib/providers/cbu.js";

const fx = new Hono();

fx.get("/uzs", async (c) => {
  const db = getDb();
  const today = new Date().toISOString().slice(0, 10);

  const todays = await db.select().from(fxRates).where(eq(fxRates.date, today)).limit(1);
  if (todays.length === 0) {
    try {
      const { date, rate } = await fetchCbuLatestRate();
      await db
        .insert(fxRates)
        .values({ date, usdUzs: String(rate) })
        .onConflictDoUpdate({ target: fxRates.date, set: { usdUzs: String(rate) } });
    } catch (err) {
      console.error("GET /api/fx/uzs: CBU fetch failed, falling back to cached history", err);
    }
  }

  const rows = await db.select().from(fxRates).orderBy(desc(fxRates.date)).limit(90);
  const history = [...rows].reverse().map((r) => ({ date: r.date, rate: Number(r.usdUzs) }));
  const last = history[history.length - 1];
  if (!last) {
    throw new HTTPException(502, { message: "No USD/UZS rate available yet" });
  }
  return c.json({ date: last.date, rate: last.rate, history });
});

export default fx;
