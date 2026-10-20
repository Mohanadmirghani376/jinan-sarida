import Link from "next/link";
import type { Dictionary, Locale } from "@/dictionaries";
import { catalogue } from "@/data/products";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";
import Year from "./Year";
import BrandPattern from "./BrandPattern";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="relative overflow-hidden bg-navy-600 text-white">
      {/* leaf pattern accent */}
      <BrandPattern
        className="pointer-events-none absolute -top-10 -end-10 h-72 w-96 text-white/10"
        stroke="currentColor"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -start-16 h-64 w-64 rounded-full bg-leaf-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo lang={lang} fullName={dict.brand.fullName} light />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
              {dict.footer.description}
            </p>
            <p className="mt-4 text-[13px] font-medium text-leaf-300">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-leaf-300">{dict.footer.sectorsTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {catalogue.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={`/${lang}/catalogue/${sector.id}`}
                    className="text-[15px] text-white/75 transition-colors hover:text-white"
                  >
                    {sector.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow text-leaf-300">{dict.footer.contactTitle}</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-white/75">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-leaf-300" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-leaf-300" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-leaf-300" />
                <a href={`tel:${siteConfig.contact.phoneHref}`} dir="ltr" className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              {siteConfig.contact.whatsapp && (
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-leaf-300" />
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-[13px] text-white/50">
          © <Year /> {dict.brand.fullName}. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
