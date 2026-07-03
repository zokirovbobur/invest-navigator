import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";

let cached: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (cached) return cached;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Provision a free Neon Postgres DB via the " +
        "Vercel Marketplace and connect it to this project (see docs/PROGRESS.md)."
    );
  }
  const sql = neon(url);
  cached = drizzle(sql, { schema });
  return cached;
}
