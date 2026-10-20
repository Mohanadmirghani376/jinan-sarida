import Link from "next/link";
import type { Locale } from "@/dictionaries";
import { ArrowIcon } from "./icons";
import BrandPattern from "./BrandPattern";

export default function CtaBanner({
  lang,
  title,
  subtitle,
  button,
}: {
  lang: Locale;
  title: string;
  subtitle: string;
  button: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-16 text-center sm:px-16">
        {/* leaf pattern overlay */}
        <BrandPattern
          className="pointer-events-none absolute inset-0 h-full w-full text-white/15"
          stroke="currentColor"
        />
        {/* soft green glow accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-10 h-72 w-72 rounded-full bg-leaf-600/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/90">
            {subtitle}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
          >
            {button}
            <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
