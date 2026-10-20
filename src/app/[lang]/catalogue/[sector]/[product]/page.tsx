import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/dictionaries";
import { catalogue, getProduct } from "@/data/products";
import CtaBanner from "@/components/CtaBanner";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import BrandPattern from "@/components/BrandPattern";
import { CheckIcon, ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return catalogue.flatMap((sector) =>
    ["en", "ar"].flatMap((lang) =>
      sector.products.map((product) => ({
        lang,
        sector: sector.id,
        product: product.slug,
      }))
    )
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: string; sector: string; product: string }>;
}) {
  const { lang, sector: sectorId, product: slug } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const c = dict.catalogue;

  const found = getProduct(sectorId, slug);
  if (!found) notFound();
  const { sector, product, prev, next } = found;

  const related = sector.products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/60">
        <BrandPattern
          className="pointer-events-none absolute -top-8 end-0 h-80 w-96 text-brand-200/60"
          stroke="currentColor"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-[13.5px] text-muted">
            <Link href={`/${locale}/catalogue`} className="hover:text-brand-600">
              {c.title}
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/${locale}/catalogue/${sector.id}`}
              className="hover:text-brand-600"
            >
              {sector.name[locale]}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-foreground">
              {product.name[locale]}
            </span>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Photo */}
          <div
            data-product-media
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line"
          >
            <ProductImage
              product={product}
              sector={sector.id}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div>
            <p className="eyebrow text-leaf-600">{sector.name[locale]}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {product.name[locale]}
            </h1>
            <p className="mt-3 text-[17px] font-medium text-brand-600">
              {product.short[locale]}
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              {product.description[locale]}
            </p>

            {/* Specs */}
            <div className="mt-8">
              <h2 className="eyebrow text-foreground">{c.specifications}</h2>
              <dl className="mt-4 overflow-hidden rounded-2xl border border-line">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 gap-4 px-5 py-3.5 text-[14.5px] ${
                      i % 2 === 0 ? "bg-white" : "bg-silver-50"
                    }`}
                  >
                    <dt className="font-medium text-muted">
                      {spec.label[locale]}
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {spec.value[locale]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/contact`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
            >
              {c.requestQuote}
              <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-14 flex items-center justify-between gap-4 border-t border-line pt-6">
          {prev ? (
            <Link
              href={`/${locale}/catalogue/${sector.id}/${prev.slug}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-600 hover:underline"
            >
              <ArrowIcon className="h-4 w-4 rotate-180 rtl:rotate-0" />
              {prev.name[locale]}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/${locale}/catalogue/${sector.id}/${next.slug}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-600 hover:underline"
            >
              {next.name[locale]}
              <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
          <h2 className="eyebrow text-leaf-600">{c.related}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard
                key={p.slug}
                lang={locale}
                sectorId={sector.id}
                product={p}
                viewLabel={c.viewDetails}
              />
            ))}
          </div>
        </section>
      )}

      <CtaBanner
        lang={locale}
        title={c.inquire.title}
        subtitle={c.inquire.text}
        button={c.inquire.button}
      />
    </>
  );
}
