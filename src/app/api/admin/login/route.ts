import { NextResponse } from "next/server";
import { adminCookieName, createAdminToken, verifyAdminPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = await request.json();
  if (!verifyAdminPassword(String(body.password ?? ""))) {
    return NextResponse.json({ ok: false, error: "Invalid password." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName(), await createAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
