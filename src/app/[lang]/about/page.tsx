import { getDictionary, type Locale } from "@/dictionaries";
import CtaBanner from "@/components/CtaBanner";
import BrandPattern from "@/components/BrandPattern";

const valueAccents = [
  "from-brand-500 to-brand-700",
  "from-leaf-500 to-leaf-700",
  "from-navy-500 to-navy-700",
  "from-brand-400 to-leaf-500",
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/60">
        <BrandPattern
          className="pointer-events-none absolute -top-8 end-0 h-80 w-96 text-brand-200/60"
          stroke="currentColor"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brand-600">{a.hero.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {a.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            {a.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {a.intro.title}
          </h2>
          <div className="space-y-5">
            {a.intro.body.map((para, i) => (
              <p key={i} className="text-[16.5px] leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-silver-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {a.values.title}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.items.map((value, i) => (
              <div
                key={value.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span
                  className={`block h-1.5 w-12 rounded-full bg-gradient-to-r ${valueAccents[i]}`}
                />
                <h3 className="mt-5 text-[18px] font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {a.numbers.title}
        </h2>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {a.numbers.items.map((item) => (
            <div key={item.label} className="bg-white px-6 py-10 text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-5xl font-bold text-brand-600">{item.value}</dd>
              <p className="mt-3 text-[14px] text-muted">{item.label}</p>
            </div>
          ))}
        </dl>
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
