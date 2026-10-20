import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { catalogue } from "@/data/products";
import { locales } from "@/dictionaries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const languages = locales as readonly string[];

  // Localized static routes
  const staticPaths = ["", "/about", "/catalogue", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    for (const lang of languages) {
      entries.push({
        url: `${base}/${lang}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            languages.map((l) => [l, `${base}/${l}${path}`])
          ),
        },
      });
    }
  }

  // Product + sector pages
  for (const sector of catalogue) {
    for (const lang of languages) {
      entries.push({
        url: `${base}/${lang}/catalogue/${sector.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });

      for (const product of sector.products) {
        entries.push({
          url: `${base}/${lang}/catalogue/${sector.id}/${product.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return entries;
}
