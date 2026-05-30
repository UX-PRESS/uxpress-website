import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { TemplateFilterGrid } from "@/components/TemplateFilterGrid";
import { templates } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Website Templates for Coaches, Consultants, and Service Professionals",
  description:
    "Browse premium ready-to-launch website kits for coaches, consultants, mentors, personal brands, and service businesses."
};

export default function TemplatesPage() {
  return (
    <>
      <section className="bg-beige py-16 md:py-24">
        <div className="container-shell text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Premium website kits</p>
          <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">
            Choose the website kit that fits your expertise.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal">
            Every Uxpress template is designed to help service professionals explain their value, build trust, and move
            visitors toward the next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#templates">Compare Kits</ButtonLink>
            <ButtonLink href="/installation-service" variant="secondary">
              Get Installation Help
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
            title="Need help setting it up?"
            body="Add installation support and get help customizing your selected kit, connecting the essentials, and preparing your site for launch."
          />
          <ButtonLink href="/installation-service" variant="gold">
            Request Installation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

