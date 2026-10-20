"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/dictionaries";

export default function LocaleSwitcher({
  lang,
  light = false,
}: {
  lang: Locale;
  light?: boolean;
}) {
  const pathname = usePathname();
  const other: Locale = lang === "en" ? "ar" : "en";
  const label = lang === "en" ? "العربية" : "English";

  // Swap the locale segment in the current path
  const segments = pathname.split("/");
  segments[1] = other;
  const target = segments.join("/") || `/${other}`;

  return (
    <a
      href={target}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
        light
          ? "border-white/25 text-white hover:bg-white/10"
          : "border-line text-foreground hover:bg-brand-50 hover:border-brand-200"
      }`}
      aria-label={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
      {label}
    </a>
  );
}
