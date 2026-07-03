import type { Context, Next } from "hono";
import { HTTPException } from "hono/http-exception";
import { getCookie } from "hono/cookie";
import { AUTH_COOKIE, verifyAuthToken } from "./auth.js";

export type AppEnv = {
  Variables: {
    userId: string;
    userEmail: string;
  };
};

export async function requireAuth(c: Context<AppEnv>, next: Next) {
  const token = getCookie(c, AUTH_COOKIE);
  const payload = token ? await verifyAuthToken(token) : null;
  if (!payload) {
    throw new HTTPException(401, { message: "Not authenticated" });
  }
  c.set("userId", payload.sub);
  c.set("userEmail", payload.email);
  await next();
}
