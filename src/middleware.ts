import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, isValidAdminToken } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLogin =
    pathname === "/admin/login" || pathname === "/api/admin/login";

  if (isLogin) return NextResponse.next();

  const token = request.cookies.get(adminCookieName())?.value;
  if (await isValidAdminToken(token)) return NextResponse.next();

  if (pathname.startsWith("/api/admin")) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const url = request.nextUrl.clone();
  url.pathname = "/admin/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};
