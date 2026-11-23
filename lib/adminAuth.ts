import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";
const SESSION_DURATION = 60 * 60 * 4; // 4 hours

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "";

function createSignature(value: string) {
  if (!SESSION_SECRET) {
    throw new Error("ADMIN_SESSION_SECRET is missing.");
  }

  return crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(value)
    .digest("hex");
}

function createToken(username: string, email: string) {
  const payload = {
    username,
    email,
    expiresAt: Date.now() + SESSION_DURATION * 1000,
  };

  const encodedPayload = Buffer.from(
    JSON.stringify(payload)
  ).toString("base64url");

  const signature = createSignature(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

function verifyToken(token: string | undefined) {
  if (!token) return null;

  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = createSignature(payload);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const decoded = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    if (!decoded.username || !decoded.email || !decoded.expiresAt) {
      return null;
    }

    if (decoded.expiresAt < Date.now()) {
      return null;
    }

    return {
      username: decoded.username,
      email: decoded.email,
    };
  } catch {
    return null;
  }
}

export function validateAdminCredentials(
  username: string,
  email: string,
  password: string
) {
  return (
    username === ADMIN_USERNAME &&
    email === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  );
}

export function createAdminSessionResponse() {
  const token = createToken(ADMIN_USERNAME, ADMIN_EMAIL);

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_DURATION,
  });

  return response;
}

export async function getAdminSession() {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_NAME)?.value;

  return verifyToken(token);
}

export function clearAdminSessionResponse() {
  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return response;
}