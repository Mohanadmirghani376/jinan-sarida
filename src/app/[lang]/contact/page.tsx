import { getDictionary, type Locale } from "@/dictionaries";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ContactForm";
import BrandPattern from "@/components/BrandPattern";
import { PinIcon, MailIcon, PhoneIcon, ClockIcon, WhatsAppIcon } from "@/components/icons";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const c = dict.contact;

  const infoItems = [
    { icon: PinIcon, label: c.info.addressLabel, value: siteConfig.contact.address, href: undefined as string | undefined },
    { icon: MailIcon, label: c.info.emailLabel, value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: PhoneIcon, label: c.info.phoneLabel, value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phoneHref}` },
    ...(siteConfig.contact.whatsapp
      ? [{
          icon: WhatsAppIcon,
          label: "WhatsApp",
          value: siteConfig.contact.phone,
          href: `https://wa.me/${siteConfig.contact.whatsapp}`,
        }]
      : []),
    { icon: ClockIcon, label: c.info.hoursLabel, value: c.info.hours, href: undefined },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/60">
        <BrandPattern
          className="pointer-events-none absolute -top-8 end-0 h-80 w-96 text-brand-200/60"
          stroke="currentColor"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brand-600">{c.hero.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {c.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <ContactForm lang={locale} dict={dict} />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {c.info.title}
              </h2>
              <ul className="mt-7 space-y-6">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  const body = (
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-muted">
                          {item.label}
                        </p>
                        <p
                          className="mt-0.5 text-[15.5px] font-medium text-foreground"
                          dir={item.href ? "ltr" : undefined}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="block transition-opacity hover:opacity-80">
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-8 rounded-xl bg-leaf-50 px-4 py-3 text-[14px] leading-relaxed text-leaf-700">
                {c.info.note}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
