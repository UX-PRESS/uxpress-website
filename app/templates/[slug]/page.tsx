import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { TemplateMockup } from "@/components/TemplateMockup";
import { getTemplate, templates } from "@/lib/templates";

type TemplateDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug
  }));
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return {
      title: "Template Not Found"
    };
  }

  return {
    title: `${template.name} - Uxpress`,
    description: template.description,
    alternates: {
      canonical: `/templates/${template.slug}`
    }
  };
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  return (
    <>
      <section className="bg-beige py-16 md:py-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-border bg-background/75 px-4 py-2 text-sm font-semibold text-charcoal">
              {template.category}
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              {template.name}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-charcoal md:text-xl">
              {template.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/start?template=${template.slug}`}>Use This Template</ButtonLink>
              <ButtonLink href="/templates" variant="secondary">
                Browse Templates
              </ButtonLink>
            </div>
          </div>
          <TemplateMockup template={template} />
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Preview</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">
              A premium foundation for your next launch.
            </h2>
            <p className="mt-5 text-lg leading-8 text-taupe">{template.longDescription}</p>
          </div>
          <div className="rounded-2xl border border-border bg-sand p-6">
            <p className="text-sm font-semibold text-taupe">Preview image placeholder</p>
            <p className="mt-2 break-all text-sm text-charcoal">{template.image}</p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Features</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">Built to help visitors trust you faster.</h2>
            <div className="mt-8 grid gap-4">
              {template.features.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-taupe">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Sections included</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">The core pages and blocks are already mapped.</h2>
            <div className="mt-8 grid gap-3">
              {template.sections.map((section) => (
                <div key={section} className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/25 text-sm font-semibold">
                    ✓
                  </span>
                  <span className="font-semibold">{section}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container-shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">{template.category}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold md:text-6xl">
            Start with {template.shortName} and customize from there.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#efe7d9]">
            Move into onboarding with this template selected so your launch can start with the right structure.
          </p>
          <div className="mt-8">
            <ButtonLink href={`/start?template=${template.slug}`} variant="gold">
              Use This Template
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

