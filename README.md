# Jinan Sarida International Supply Chain — Website

Bilingual (English / Arabic) B2B website for **Jinan Sarida International Supply Chain**, a sourcing company connecting global buyers with verified factories in China across four sectors: **trucks, construction machinery, agricultural machinery, and medical supplies**.

Built with Next.js (App Router), TypeScript and Tailwind CSS, with full RTL support for Arabic.

## Features

- **Bilingual EN/AR** — path-based routing (`/en/...`, `/ar/...`) with automatic locale detection and full RTL layout
- **Product catalogue** — hub, 4 sector grids, and 24 individual product pages with specifications and related products
- **Brand-compliant design** — red/green/navy/grey palette, chain-link logo, Noto Kufi Arabic typography, leaf/vein pattern
- **Contact form** — opens a prefilled email on submit (zero backend required; easily swappable for an API)
- **SEO** — auto-generated `sitemap.xml`, `robots.txt`, Open Graph / Twitter metadata, hreflang alternates
- **Fully responsive** — mobile menu and adaptive layouts

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack, static generation)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting started

```bash
npm install
npm run dev        # development server at http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── [lang]/                     # localized routes (en | ar)
│   │   ├── page.tsx                # home
│   │   ├── about/
│   │   ├── contact/
│   │   └── catalogue/
│   │       ├── page.tsx            # catalogue hub
│   │       ├── [sector]/           # products per sector
│   │       └── [sector]/[product]/ # product detail
│   ├── globals.css                 # theme + brand palette
│   ├── sitemap.ts                  # auto-generated sitemap
│   └── robots.ts
├── components/                      # UI components (Header, Footer, product cards, illustrations)
├── config/site.ts                  # ← contact details & domain (EDIT THIS)
├── data/products.ts                # ← product catalogue data (EDIT THIS)
├── dictionaries/                   # en.ts / ar.ts translations
└── proxy.ts                        # locale detection & redirect
```

## Configuration

Two files hold all site-specific content:

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Email, phone, WhatsApp, address, and production domain |
| `src/data/products.ts` | All products: names, descriptions, specs, and images |

### Adding real product photos

Each product currently uses a branded illustration. To use a real photo, add an `image` URL to the product in `src/data/products.ts`:

```ts
{
  slug: "dump-truck",
  image: "https://example.com/dump-truck.jpg", // ← added
  // ...
}
```

The illustration is automatically used as a fallback if the image ever fails to load.

### Adding a language

1. Add the locale to `locales` in `src/dictionaries/index.ts`
2. Create a dictionary file for it (copy `en.ts`) and register it in `getDictionary`
3. The routes and sitemap pick it up automatically

## Deployment

The easiest option is [Vercel](https://vercel.com) — import the repo and deploy with zero configuration.

Before going live, update `url` in `src/config/site.ts` to your real domain (used for canonical URLs and the sitemap).
