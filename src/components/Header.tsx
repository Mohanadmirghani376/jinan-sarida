"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/dictionaries";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { MenuIcon, CloseIcon } from "./icons";

const navKeys = ["home", "about", "catalogue", "contact"] as const;

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = navKeys.map((key) => ({
    key,
    label: dict.nav[key],
    href: key === "home" ? `/${lang}` : `/${lang}/${key}`,
  }));

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === `/${lang}` : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo lang={lang} fullName={dict.brand.fullName} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-muted hover:bg-brand-50/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher lang={lang} />
          <Link
            href={`/${lang}/contact`}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {dict.nav.requestQuote}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.nav.close : dict.nav.menu}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line text-foreground"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-background px-5 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-[16px] font-medium ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-foreground hover:bg-brand-50/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/contact`}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand-600 px-5 py-3 text-center font-semibold text-white"
            >
              {dict.nav.requestQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
