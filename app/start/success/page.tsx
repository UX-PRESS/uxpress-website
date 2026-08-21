"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";

export default function StartSuccessPage() {
  const { locale } = useLanguage();

  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-background p-6 text-center shadow-[0_24px_70px_rgba(36,33,28,0.08)] md:p-10">
          <p className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/25 text-2xl font-semibold">✓</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{t("Request received", locale)}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
            {t("Your Uxpress launch request is in.", locale)}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-charcoal">
            {t("We have captured your website details. The next step is reviewing your business, selected template, and launch goals so the setup can begin cleanly.", locale)}
          </p>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            {[
              ["1", "Review", "We review your template choice and business details."],
              ["2", "Prepare", "You gather copy, images, testimonials, and links."],
              ["3", "Setup", "Typical setup planning takes 1-3 business days."]
            ].map(([number, title, body]) => (
              <div key={title} className="rounded-2xl border border-border bg-sand p-5">
                <p className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">{number}</p>
                <h2 className="mt-4 text-lg font-semibold">{t(title, locale)}</h2>
                <p className="mt-2 text-sm leading-6 text-taupe">{t(body, locale)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/templates">{t("Back to Templates", locale)}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

