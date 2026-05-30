import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { StartForm } from "@/components/start/StartForm";
import { getTemplate } from "@/lib/templates";

type StartPageProps = {
  searchParams: Promise<{
    template?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Start Your Website - Uxpress",
  description: "Start your Uxpress website launch with a selected template and a few business details.",
  alternates: {
    canonical: "/start"
  }
};

export default async function StartPage({ searchParams }: StartPageProps) {
  const { template: templateSlug } = await searchParams;
  const template = templateSlug ? getTemplate(templateSlug) : undefined;
  const selectedTemplate = template?.name ?? templateSlug ?? "No template selected";

  return (
    <>
      <section className="bg-beige py-16 md:py-24">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex rounded-full border border-border bg-background/75 px-4 py-2 text-sm font-semibold text-charcoal">
              Website onboarding
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              Tell us what you are launching.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-charcoal">
              Share the essentials so the selected template can become a focused, professional website for your business.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background/70 p-5">
              <p className="text-sm font-semibold text-taupe">Selected template</p>
              <p className="mt-2 text-xl font-semibold">{selectedTemplate}</p>
            </div>
            <div className="mt-6">
              <ButtonLink href="/templates" variant="secondary">
                Change Template
              </ButtonLink>
            </div>
          </div>
          <StartForm selectedTemplate={selectedTemplate} />
        </div>
      </section>
    </>
  );
}

