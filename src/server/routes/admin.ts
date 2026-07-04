import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { neon } from "@neondatabase/serverless";

const admin = new Hono();

/**
 * One-time (but safe to re-run — every statement is idempotent)
 * schema bootstrap for environments where `drizzle-kit push` can't be
 * run against DATABASE_URL directly (e.g. no local Node/terminal
 * access). Mirrors src/db/schema.ts exactly. Prefer `npm run db:push`
 * when you *can* run it locally — this route is a fallback, not a
 * replacement for real migrations going forward.
 *
 * Auth: accepts the shared CRON_SECRET either as a Bearer header
 * (for curl/automation) or a `?secret=` query param (so it can be
 * triggered with a single click from a browser already authenticated
 * past Vercel's Preview deployment protection).
 */
admin.get("/migrate", async (c) => {
  const secret = process.env.CRON_SECRET;
  const auth = c.req.header("authorization");
  const querySecret = c.req.query("secret");
  const authorized = !!secret && (auth === `Bearer ${secret}` || querySecret === secret);
  if (!authorized) {
    throw new HTTPException(401, { message: "Unauthorized" });
  }

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new HTTPException(500, { message: "DATABASE_URL is not set" });
  }
  const sql = neon(url);

  const steps: { name: string; status: "ok" | "error"; detail?: string }[] = [];

  async function run(name: string, exec: () => Promise<unknown>) {
    try {
      await exec();
      steps.push({ name, status: "ok" });
    } catch (err) {
      steps.push({ name, status: "error", detail: err instanceof Error ? err.message : String(err) });
    }
  }

  await run("users", () => sql`
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      email text NOT NULL UNIQUE,
      password_hash text NOT NULL,
      name text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  await run("positions", () => sql`
    CREATE TABLE IF NOT EXISTS positions (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      category_id text NOT NULL,
      offer_id text,
      symbol text,
      amount_usd numeric(18,2) NOT NULL,
      entry_date date NOT NULL,
      entry_price numeric(18,8),
      custom_rate_pct numeric(6,3),
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  await run("price_history", () => sql`
    CREATE TABLE IF NOT EXISTS price_history (
      symbol text NOT NULL,
      date date NOT NULL,
      price numeric(18,8) NOT NULL,
      PRIMARY KEY (symbol, date)
    )
  `);

  await run("price_cache", () => sql`
    CREATE TABLE IF NOT EXISTS price_cache (
      key text PRIMARY KEY,
      payload jsonb NOT NULL,
      fetched_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  await run("fx_rates", () => sql`
    CREATE TABLE IF NOT EXISTS fx_rates (
      date date PRIMARY KEY,
      usd_uzs numeric(18,4) NOT NULL
    )
  `);

  await run("rate_limits", () => sql`
    CREATE TABLE IF NOT EXISTS rate_limits (
      key text PRIMARY KEY,
      count numeric(10,0) NOT NULL DEFAULT 0,
      window_start timestamptz NOT NULL DEFAULT now()
    )
  `);

  return c.json({ ranAt: new Date().toISOString(), steps });
});

export default admin;
