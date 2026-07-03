import { SignJWT, jwtVerify } from "jose";
import { requireEnv } from "./env.js";
import type { CookieOptions } from "hono/utils/cookie";

const encoder = new TextEncoder();

function secretKey() {
  return encoder.encode(requireEnv("JWT_SECRET"));
}

export interface JwtPayload {
  sub: string; // user id
  email: string;
}

export async function signAuthToken(payload: JwtPayload): Promise<string> {
  return new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secretKey());
}

export async function verifyAuthToken(token: string): Promise<JwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    if (typeof payload.sub !== "string" || typeof payload.email !== "string") return null;
    return { sub: payload.sub, email: payload.email };
  } catch {
    return null;
  }
}

export const AUTH_COOKIE = "fp_session";

/**
 * `secure` is conditional on running on Vercel (always HTTPS there, in
 * both Preview and Production) so `vercel dev`/plain local HTTP still
 * works without the cookie silently failing to be set.
 */
export const authCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.VERCEL === "1",
  sameSite: "Lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 30, // 30 days
};
