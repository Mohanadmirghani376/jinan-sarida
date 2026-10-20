import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/dictionaries";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already contains a supported locale
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  // Detect preferred language from the browser
  const cookieLocale = request.cookies.get("locale")?.value;
  const acceptLang = request.headers.get("accept-language") || "";
  const preferred = acceptLang
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((lang) => isLocale(lang));

  const locale =
    (cookieLocale && isLocale(cookieLocale) && cookieLocale) ||
    preferred ||
    defaultLocale;

  // Redirect to the same path under the detected locale
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on all paths except API routes, static files and internal Next paths
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
