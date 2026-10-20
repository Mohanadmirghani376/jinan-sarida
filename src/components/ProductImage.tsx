import ProductIllustration from "./ProductIllustration";
import type { Product } from "@/data/products";

/**
 * Renders the product photo. If the product has a real `image` URL it is used;
 * otherwise the branded illustration is shown. The illustration is also wired
 * as the onError fallback so a broken photo URL never leaves an empty box.
 */
export default function ProductImage({
  product,
  sector,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  product: Product;
  sector: string;
  className?: string;
  sizes?: string;
}) {
  if (product.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={product.image}
        alt={product.name.en}
        sizes={sizes}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
        onError={(e) => {
          // Swap to the branded illustration if the photo fails to load
          const el = e.currentTarget;
          el.style.display = "none";
          const fallback = el
            .closest("[data-product-media]")
            ?.querySelector("[data-product-fallback]") as HTMLElement | null;
          if (fallback) fallback.style.display = "block";
        }}
      />
    );
  }

  return (
    <ProductIllustration
      art={product.art}
      sector={sector}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
