import {
  pgTable,
  uuid,
  text,
  numeric,
  date,
  timestamp,
  jsonb,
  primaryKey,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const positions = pgTable("positions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  categoryId: text("category_id").notNull(),
  offerId: text("offer_id"),
  symbol: text("symbol"),
  amountUsd: numeric("amount_usd", { precision: 18, scale: 2 }).notNull(),
  entryDate: date("entry_date").notNull(),
  entryPrice: numeric("entry_price", { precision: 18, scale: 8 }),
  /** Overrides the category's blended accrual rate with the specific
   * offer's actual rate (e.g. a specific bank's deposit %), when known.
   * Ignored for price-based categories. Null = use the category default. */
  customRatePct: numeric("custom_rate_pct", { precision: 6, scale: 3 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const priceHistory = pgTable(
  "price_history",
  {
    symbol: text("symbol").notNull(),
    date: date("date").notNull(),
    price: numeric("price", { precision: 18, scale: 8 }).notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.symbol, t.date] }),
  })
);

export const priceCache = pgTable("price_cache", {
  key: text("key").primaryKey(),
  payload: jsonb("payload").notNull(),
  fetchedAt: timestamp("fetched_at", { withTimezone: true }).notNull().defaultNow(),
});

export const fxRates = pgTable("fx_rates", {
  date: date("date").primaryKey(),
  usdUzs: numeric("usd_uzs", { precision: 18, scale: 4 }).notNull(),
});

export const rateLimits = pgTable("rate_limits", {
  key: text("key").primaryKey(),
  count: numeric("count", { precision: 10, scale: 0 }).notNull().default("0"),
  windowStart: timestamp("window_start", { withTimezone: true }).notNull().defaultNow(),
});
