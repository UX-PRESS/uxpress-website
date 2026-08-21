"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { TemplateMockup } from "@/components/TemplateMockup";
import { localize, t } from "@/lib/i18n";
import type { Template } from "@/lib/templates";

export function TemplateDetailContent({ template }: { template: Template }) {
  const { locale } = useLanguage();
  const localizedTemplate = localize(template, locale);
  const startTitle = t("Start with {name} and customize from there.", locale).replace(
    "{name}",
    localizedTemplate.shortName
  );

  return (
    <>
      <section className="bg-beige py-16 md:py-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-border bg-background/75 px-4 py-2 text-sm font-semibold text-charcoal">
              {localizedTemplate.category}
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">{localizedTemplate.name}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-charcoal md:text-xl">{localizedTemplate.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/start?template=${template.slug}`}>{t("Use This Template", locale)}</ButtonLink>
              <ButtonLink href="/templates" variant="secondary">{t("Browse Templates", locale)}</ButtonLink>
            </div>
          </div>
          <TemplateMockup template={localizedTemplate} />
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{t("Preview", locale)}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">{t("A premium foundation for your next launch.", locale)}</h2>
            <p className="mt-5 text-lg leading-8 text-taupe">{localizedTemplate.longDescription}</p>
          </div>
          <div className="rounded-2xl border border-border bg-sand p-6">
            <p className="text-sm font-semibold text-taupe">{t("Preview image placeholder", locale)}</p>
            <p className="mt-2 break-all text-sm text-charcoal">{localizedTemplate.image}</p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{t("Features", locale)}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">{t("Built to help visitors trust you faster.", locale)}</h2>
            <div className="mt-8 grid gap-4">
              {localizedTemplate.features.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-taupe">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{t("Sections included", locale)}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">{t("The core pages and blocks are already mapped.", locale)}</h2>
            <div className="mt-8 grid gap-3">
              {localizedTemplate.sections.map((section) => (
                <div key={section} className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/25 text-sm font-semibold">✓</span>
                  <span className="font-semibold">{section}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container-shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">{localizedTemplate.category}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold md:text-6xl">{startTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#efe7d9]">{t("Move into onboarding with this template selected so your launch can start with the right structure.", locale)}</p>
          <div className="mt-8">
            <ButtonLink href={`/start?template=${template.slug}`} variant="gold">{t("Use This Template", locale)}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
