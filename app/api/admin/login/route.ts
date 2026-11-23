import { NextRequest, NextResponse } from "next/server";
import {
  validateAdminCredentials,
  createAdminSessionResponse,
} from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const username = String(body.username || "").trim();
    const email = String(body.email || "").trim();
    const password = String(body.password || "");

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          error: "Username, email and password are required.",
        },
        { status: 400 }
      );
    }

    const valid = validateAdminCredentials(
      username,
      email,
      password
    );

    if (!valid) {
      return NextResponse.json(
        {
          error: "Invalid admin credentials.",
        },
        { status: 401 }
      );
    }

    return createAdminSessionResponse();
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}