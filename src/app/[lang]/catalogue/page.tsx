import Link from "next/link";
import { getDictionary, type Locale } from "@/dictionaries";
import { catalogue } from "@/data/products";
import BrandPattern from "@/components/BrandPattern";
import ProductImage from "@/components/ProductImage";
import { ArrowIcon } from "@/components/icons";

export default async function CataloguePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const c = dict.catalogue;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/60">
        <BrandPattern
          className="pointer-events-none absolute -top-8 end-0 h-80 w-96 text-brand-200/60"
          stroke="currentColor"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brand-600">{c.eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            {c.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="eyebrow text-leaf-600">{c.sectorsTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {catalogue.map((sector) => {
            const first = sector.products[0];
            return (
              <Link
                key={sector.id}
                href={`/${locale}/catalogue/${sector.id}`}
                className="group grid overflow-hidden rounded-3xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:grid-cols-2"
              >
                <div
                  data-product-media
                  className="relative aspect-[4/3] h-full w-full overflow-hidden sm:aspect-auto"
                >
                  <ProductImage
                    product={first}
                    sector={sector.id}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {sector.name[locale]}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-leaf-600">
                    {sector.tagline[locale]}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {sector.description[locale]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600">
                    {c.viewProducts} · {sector.products.length} {c.products}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
