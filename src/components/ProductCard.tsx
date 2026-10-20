import Link from "next/link";
import type { Locale } from "@/dictionaries";
import type { Product } from "@/data/products";
import ProductImage from "./ProductImage";
import { ArrowIcon } from "./icons";

export default function ProductCard({
  lang,
  sectorId,
  product,
  viewLabel,
}: {
  lang: Locale;
  sectorId: string;
  product: Product;
  viewLabel: string;
}) {
  return (
    <Link
      href={`/${lang}/catalogue/${sectorId}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <div
        data-product-media
        className="relative aspect-[4/3] w-full overflow-hidden"
      >
        <ProductImage
          product={product}
          sector={sectorId}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-semibold leading-snug text-foreground">
          {product.name[lang]}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">
          {product.short[lang]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600">
          {viewLabel}
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
