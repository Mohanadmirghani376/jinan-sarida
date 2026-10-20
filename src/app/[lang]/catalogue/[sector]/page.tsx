import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/dictionaries";
import { catalogue, getSector } from "@/data/products";
import CtaBanner from "@/components/CtaBanner";
import ProductCard from "@/components/ProductCard";
import BrandPattern from "@/components/BrandPattern";
import { sectorIconMap } from "@/components/sectorIcons";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return catalogue.flatMap((sector) =>
    ["en", "ar"].map((lang) => ({ sector: sector.id, lang }))
  );
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ lang: string; sector: string }>;
}) {
  const { lang, sector: sectorId } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const c = dict.catalogue;

  const sector = getSector(sectorId);
  if (!sector) notFound();

  const Icon = sectorIconMap[sector.id];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/60">
        <BrandPattern
          className="pointer-events-none absolute -top-8 end-0 h-80 w-96 text-brand-200/60"
          stroke="currentColor"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13.5px] text-muted">
            <Link href={`/${locale}/catalogue`} className="hover:text-brand-600">
              {c.title}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-foreground">{sector.name[locale]}</span>
          </nav>

          <div className="mt-8 flex items-start gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 ring-1 ring-brand-100">
              <Icon className="h-8 w-8" />
            </span>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {sector.name[locale]}
              </h1>
              <p className="mt-2 text-[16px] font-medium text-leaf-600">
                {sector.tagline[locale]}
              </p>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
                {sector.description[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sector.products.map((product) => (
            <ProductCard
              key={product.slug}
              lang={locale}
              sectorId={sector.id}
              product={product}
              viewLabel={c.viewDetails}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={`/${locale}/catalogue`}
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-600 hover:underline"
          >
            <ArrowIcon className="h-4 w-4 rotate-180 rtl:rotate-0" />
            {c.backTo} {c.title}
          </Link>
        </div>
      </section>

      <CtaBanner
        lang={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </>
  );
}
