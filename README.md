# Finport.uz — Invest Navigator

Investment instrument navigator/catalog for Uzbekistan, plus a personal
portfolio tracker with real market-data-driven trajectories.

The app is a vanilla JS SPA (`index.html`, `app.js`, `offers.js`) backed by a
single serverless API (`api/[[...route]].ts`, built with [Hono](https://hono.dev))
and a [Neon](https://neon.tech) Postgres database, deployed entirely on the
**Vercel Hobby (free) plan**. See `docs/PROGRESS.md` for the full build
roadmap and status log.

## Status

All 6 build phases are implemented and typecheck clean:

- Real market data (CoinGecko for crypto, Stooq for ETF/dividend
  stocks/REIT/precious metals, CBU for USD/UZS) with a daily refresh cron,
  DB-backed caching, and a graceful synthetic fallback when a category has
  no public market (deposits, bonds, sukuk, mudaraba, p2p, and a handful
  of local-only categories) — surfaced in the UI as a LIVE / RATE-BASED /
  MODEL badge on each category's chart.
- Email+password accounts (bcrypt + JWT cookie) with a login/register
  modal and a topbar account chip.
- Portfolio positions persisted per-account in Postgres, with a one-time
  migration of any existing anonymous (localStorage) portfolio on first
  login, and a value-trajectory endpoint (`GET /api/portfolio/series`)
  for tracking a position's growth over time.
- A simple per-IP rate limiter on auth and portfolio-write endpoints.

**Not yet verified against a real deployment**: everything above has been
tested locally (typecheck, in-process request smoke tests, and full
browser flows via Playwright with mocked API responses), but this
codebase has never been run against a real Neon database or made live
outbound calls to CoinGecko/Stooq/CBU — the sandbox this was built in
blocks that network access. See `docs/PROGRESS.md`'s "Known gaps"
entries for exactly what to double-check after the first real deploy.

## Local development

```bash
npm install
npm run typecheck   # TypeScript check of api/ and src/
vercel dev          # runs the static site + the Hono API locally
```

`vercel dev` reads env vars from `.env.local` (gitignored). Copy
`.env.example` to `.env.local` and fill in real values to run the API
locally.

## One-time cloud setup (required before the API works in Preview/Production)

1. In the Vercel dashboard, open the `invest-navigator` project →
   **Storage** → **Marketplace** → add **Neon** (free tier). This creates a
   Postgres DB and automatically sets `DATABASE_URL` in the project's
   environment variables.
2. In **Settings → Environment Variables**, add:
   - `JWT_SECRET` — any long random string (`openssl rand -hex 32`).
   - `CRON_SECRET` — any long random string. Vercel Cron automatically sends
     it as `Authorization: Bearer $CRON_SECRET` to `/api/cron/*` routes.
3. Push the DB schema (run once, and again after any schema change):
   ```bash
   DATABASE_URL="<paste from Vercel>" npm run db:push
   ```
4. Redeploy. The daily cron at `/api/cron/snapshot` (see `vercel.json`)
   refreshes market data automatically after that.

## Project layout

```
index.html, app.js, offers.js   static SPA (frontend, unchanged in spirit)
api.js                          frontend fetch client (window.API)
pitch.html                      investor pitch deck
api/[[...route]].ts             Vercel serverless entry (Hono catch-all)
src/server/app.ts                Hono app + route mounting
src/server/routes/               API route handlers (market, fx, auth, portfolio, cron)
src/server/lib/                  auth, rate limiting, market-data providers, position valuation
src/server/lib/providers/        CoinGecko / Stooq / CBU fetchers
src/server/lib/schemas/          zod request validation
src/db/schema.ts                 Drizzle ORM schema
src/db/client.ts                 Neon/Drizzle client
drizzle.config.ts, drizzle/      migration config + generated SQL migrations
docs/PROGRESS.md                 full-stack MVP roadmap + status log
```

## Data disclaimer

Market data is sourced from free public APIs (CoinGecko, Stooq, CBU) and
cached daily/periodically. Rate-based instruments (deposits, bonds, sukuk,
mudaraba, p2p) use a modeled accrual curve since no public market exists for
them. Nothing in this app is investment advice.
