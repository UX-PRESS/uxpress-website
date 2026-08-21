"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { TemplateFilterGrid } from "@/components/TemplateFilterGrid";
import { t } from "@/lib/i18n";
import { templates } from "@/lib/templates";

export default function TemplatesPage() {
  const { locale } = useLanguage();

  return (
    <>
      <section className="bg-beige py-16 md:py-24">
        <div className="container-shell text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{t("Premium website kits", locale)}</p>
          <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">
            {t("Choose the website kit that fits your expertise.", locale)}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal">
            {t("Every Uxpress template is designed to help service professionals explain their value, build trust, and move visitors toward the next step.", locale)}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#templates">{t("Compare Kits", locale)}</ButtonLink>
            <ButtonLink href="/installation-service" variant="secondary">
              {t("Get Installation Help", locale)}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="templates" className="bg-background py-16 md:py-24">
        <div className="container-shell">
          <TemplateFilterGrid templates={templates} />
        </div>
      </section>

      <section className="bg-foreground py-16 md:py-20">
        <div className="container-shell grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <SectionHeader
            light
            title={t("Need help setting it up?", locale)}
            body={t("Add installation support and get help customizing your selected kit, connecting the essentials, and preparing your site for launch.", locale)}
          />
          <ButtonLink href="/installation-service" variant="gold">
            {t("Request Installation", locale)}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

