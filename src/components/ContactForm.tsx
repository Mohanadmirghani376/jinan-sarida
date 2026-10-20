"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/dictionaries";
import { siteConfig } from "@/config/site";

export default function ContactForm({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const f = dict.contact.form;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    try {
      // Build a prefilled email and open the visitor's mail app. This works
      // with no backend. To collect inquiries server-side instead, POST the
      // `data` object to your own /api/inquiry endpoint or a service such as
      // Formspree and handle the response here.
      const body = [
        `${f.name}: ${data.name ?? ""}`,
        `${f.company}: ${data.company ?? ""}`,
        `${f.email}: ${data.email ?? ""}`,
        `${f.phone}: ${data.phone ?? ""}`,
        `${f.sector}: ${data.sector ?? ""}`,
        "",
        `${f.message}:`,
        data.message ?? "",
      ].join("\n");

      const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
        siteConfig.defaultEmailSubject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-silver-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";
  const label = "mb-2 block text-[14px] font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-7 sm:p-9">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {f.title}
      </h2>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            {f.name}
          </label>
          <input id="name" name="name" required placeholder={f.namePlaceholder} className={field} />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            {f.company}
          </label>
          <input id="company" name="company" placeholder={f.companyPlaceholder} className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            {f.email}
          </label>
          <input id="email" name="email" type="email" required placeholder={f.emailPlaceholder} className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            {f.phone}
          </label>
          <input id="phone" name="phone" dir="ltr" placeholder={f.phonePlaceholder} className={`${field} text-start`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sector" className={label}>
            {f.sector}
          </label>
          <select id="sector" name="sector" defaultValue="" required className={field}>
            <option value="" disabled>
              {f.sectorPlaceholder}
            </option>
            {f.sectorOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            {f.message}
          </label>
          <textarea id="message" name="message" rows={5} required placeholder={f.messagePlaceholder} className={field} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>

      {status === "success" && (
        <p role="status" className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-[14.5px] font-medium text-brand-700">
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[14.5px] font-medium text-red-700">
          {f.error}
        </p>
      )}
    </form>
  );
}
