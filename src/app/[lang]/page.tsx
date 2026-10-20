import Link from "next/link";
import { getDictionary, type Locale } from "@/dictionaries";
import { catalogue } from "@/data/products";
import CtaBanner from "@/components/CtaBanner";
import BrandPattern from "@/components/BrandPattern";
import { sectorIconMap } from "@/components/sectorIcons";
import {
  ShieldIcon,
  CheckIcon,
  ShipIcon,
  HeadsetIcon,
  ArrowIcon,
  GlobeIcon,
} from "@/components/icons";

const whyIcons = [ShieldIcon, CheckIcon, ShipIcon, HeadsetIcon];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const h = dict.home;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-background to-background"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 end-[-8%] -z-10 h-96 w-96 rounded-full bg-leaf-100/70 blur-3xl"
        />
        <BrandPattern
          className="pointer-events-none absolute -top-10 end-0 -z-10 h-[28rem] w-[28rem] text-brand-200/60"
          stroke="currentColor"
        />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-[13px] font-medium text-brand-700">
              <GlobeIcon className="h-4 w-4 text-leaf-600" />
              {h.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              {h.hero.titleA}
              <br />
              <span className="text-brand-600">{h.hero.titleB}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
              {h.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {h.hero.ctaPrimary}
                <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link
                href={`/${locale}/catalogue`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                {h.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {h.stats.map((stat, i) => {
              const tones = [
                "text-brand-600",
                "text-leaf-600",
                "text-navy-600",
                "text-brand-600",
              ];
              return (
                <div key={stat.label} className="bg-white px-6 py-8 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className={`text-4xl font-bold ${tones[i % tones.length]}`}>
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-[14px] text-muted">{stat.label}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-leaf-600">{h.sectors.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {h.sectors.title}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {h.sectors.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogue.map((sector) => {
            const Icon = sectorIconMap[sector.id];
            return (
              <Link
                key={sector.id}
                href={`/${locale}/catalogue/${sector.id}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-[19px] font-semibold text-foreground">
                  {sector.name[locale]}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  {sector.tagline[locale]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
                  {dict.catalogue.viewProducts}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-leaf-50/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-leaf-700">{h.why.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {h.why.title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              {h.why.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {h.why.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={item.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-leaf-600 ring-1 ring-leaf-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand-600">{h.process.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {h.process.title}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {h.process.subtitle}
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.process.steps.map((step) => (
            <li
              key={step.num}
              className="relative rounded-2xl border border-line bg-white p-7"
            >
              <span className="text-5xl font-bold text-brand-100">{step.num}</span>
              <h3 className="mt-4 text-[17px] font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ================= CTA ================= */}
      <CtaBanner
        lang={locale}
        title={h.cta.title}
        subtitle={h.cta.subtitle}
        button={h.cta.button}
      />
    </>
  );
}
