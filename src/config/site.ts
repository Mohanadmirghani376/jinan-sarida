/**
 * Central site configuration — the single source of truth for contact
 * details, brand name and domain. Update these values once, here, and they
 * are reflected across the header, footer, contact page and form.
 */
export const siteConfig = {
  name: "Jinan Sarida",
  fullName: "Jinan Sarida International Supply Chain",
  /** Production domain — used for SEO metadata, sitemap and canonical URLs. */
  url: "https://www.saridaglobal.com",

  contact: {
    /** Replace with your real business email. */
    email: "info@saridaglobal.com",
    /** Displayed phone number (keep spaces for readability). */
    phone: "+86 138 0000 0000",
    /** Dial-able phone (digits only, with country code). */
    phoneHref: "+8613800000000",
    /** WhatsApp number (digits only, with country code). Leave "" to hide. */
    whatsapp: "8613800000000",
    address: "Jinan, Shandong Province, China",
  },

  /** Default inquiry subject used when the contact form opens an email. */
  defaultEmailSubject: "New sourcing inquiry",
} as const;

export type SiteConfig = typeof siteConfig;
