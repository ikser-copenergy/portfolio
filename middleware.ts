import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  parseAcceptLanguage,
  resolveLocaleFromLanguageTags,
} from "@/lib/locale-resolver";

/** Must match `STORAGE_KEY` in `lib/messages.ts` */
const LOCALE_COOKIE = "ikser.locale";

/**
 * Persist negotiated locale when the user has not chosen one yet.
 * Aligns with RFC 7231 Accept-Language negotiation (first supported match).
 */
export function middleware(request: NextRequest) {
  const current = request.cookies.get(LOCALE_COOKIE)?.value;
  if (current === "en" || current === "es") {
    return NextResponse.next();
  }

  const tags = parseAcceptLanguage(request.headers.get("accept-language"));
  const negotiated = resolveLocaleFromLanguageTags(tags);

  const res = NextResponse.next();
  res.cookies.set(LOCALE_COOKIE, negotiated, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
