"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";
import { StartForm } from "@/components/start/StartForm";

export function StartContent({ selectedTemplate }: { selectedTemplate: string }) {
  const { locale } = useLanguage();

  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.75fr_1fr]">
        <div className="lg:sticky lg:top-28">
          <p className="mb-5 inline-flex rounded-full border border-border bg-background/75 px-4 py-2 text-sm font-semibold text-charcoal">{t("Website onboarding", locale)}</p>
          <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">{t("Tell us what you are launching.", locale)}</h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-charcoal">{t("Share the essentials so the selected template can become a focused, professional website for your business.", locale)}</p>
          <div className="mt-8 rounded-2xl border border-border bg-background/70 p-5">
            <p className="text-sm font-semibold text-taupe">{t("Selected template", locale)}</p>
            <p className="mt-2 text-xl font-semibold">{selectedTemplate}</p>
          </div>
          <div className="mt-6"><ButtonLink href="/templates" variant="secondary">{t("Change Template", locale)}</ButtonLink></div>
        </div>
        <StartForm selectedTemplate={selectedTemplate} />
      </div>
    </section>
  );
}
