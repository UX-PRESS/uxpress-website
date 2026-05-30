import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  audiences,
  benefits,
  comparison,
  landingFaqs,
  landingTemplates,
  stats,
  steps,
  testimonials
} from "@/lib/homepage";

export const metadata: Metadata = {
  title: "Launch Your Professional Website in Days, Not Months",
  description:
    "Premium website templates and complete website kits built specifically for coaches, consultants, and service professionals.",
  alternates: {
    canonical: "/"
  }
};

function HeroMockups() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-border bg-sand p-4 shadow-[0_30px_80px_rgba(36,33,28,0.12)] mockup-grid">
      <div className="absolute left-5 top-6 w-[82%] rounded-2xl border border-border bg-background shadow-xl md:left-10 md:top-10">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e66b5b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4d9b73]" />
        </div>
        <div className="grid gap-5 p-5 md:p-7">
          <div className="h-3 w-24 rounded-full bg-gold/70" />
          <div className="space-y-3">
            <div className="h-8 w-11/12 rounded-lg bg-foreground" />
            <div className="h-8 w-8/12 rounded-lg bg-foreground" />
          </div>
          <div className="grid gap-2">
            <div className="h-3 w-full rounded-full bg-taupe/20" />
            <div className="h-3 w-10/12 rounded-full bg-taupe/20" />
          </div>
          <div className="flex gap-3">
            <div className="h-11 w-36 rounded-full bg-foreground" />
            <div className="h-11 w-28 rounded-full border border-foreground" />
          </div>
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="h-24 rounded-xl bg-beige" />
            <div className="h-24 rounded-xl bg-sand" />
            <div className="h-24 rounded-xl bg-[#efe2c6]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-5 w-[58%] rounded-2xl border border-border bg-foreground p-4 text-background shadow-2xl md:right-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Template kit</p>
        <div className="mt-4 h-4 w-32 rounded-full bg-background/90" />
        <div className="mt-3 h-3 w-44 max-w-full rounded-full bg-background/25" />
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-background/10 p-3">
            <div className="h-2 w-10 rounded bg-gold" />
            <div className="mt-3 h-2 w-full rounded bg-background/25" />
          </div>
          <div className="rounded-xl bg-background/10 p-3">
            <div className="h-2 w-10 rounded bg-gold" />
            <div className="mt-3 h-2 w-full rounded bg-background/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff7e7_0%,#f3e9d8_34%,#fffcf7_78%)] py-16 md:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="reveal">
            <p className="mb-5 inline-flex rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-charcoal shadow-sm">
              Premium website kits for service professionals
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              Launch Your Professional Website in Days, Not Months.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-charcoal md:text-xl">
              Premium website templates and complete website kits built specifically for coaches, consultants, and
              service professionals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/templates">Browse Templates</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                See How It Works
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-medium text-taupe sm:grid-cols-3">
              <span>Conversion-ready sections</span>
              <span>Mobile-first layouts</span>
              <span>Launch support available</span>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <HeroMockups />
          </div>
        </div>
      </section>

      <section aria-label="Uxpress social proof" className="border-y border-border bg-background py-8">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-sand p-5 text-center">
              <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-taupe">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Benefits</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              Everything You Need to Launch Faster
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="group rounded-2xl border border-border bg-sand p-6 hover:-translate-y-1 hover:bg-background hover:shadow-xl hover:shadow-charcoal/5">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-taupe">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-sand py-16 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">How it works</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              From template to launched site in three focused steps.
            </h2>
          </div>
          <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-border lg:block" />
            {steps.map((step) => (
              <article key={step.title} className="relative rounded-2xl border border-border bg-background p-7 shadow-sm">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-border bg-foreground text-2xl font-semibold text-background">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-taupe">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Featured templates</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
                Premium starting points for modern service businesses.
              </h2>
            </div>
            <ButtonLink href="/templates" variant="secondary">
              View All Templates
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {landingTemplates.map((template, index) => (
              <article key={template.name} className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                <div className="mockup-grid border-b border-border bg-gradient-to-br from-beige to-background p-5">
                  <div className="rounded-xl border border-border bg-background p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="h-3 w-24 rounded-full bg-foreground/80" />
                      <span className="rounded-full bg-gold/25 px-3 py-1 text-xs font-semibold">{template.tone}</span>
                    </div>
                    <div className="h-28 rounded-xl bg-sand" />
                    <div className="mt-4 grid gap-2">
                      <span className="h-3 w-full rounded-full bg-taupe/20" />
                      <span className="h-3 w-8/12 rounded-full bg-taupe/20" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-gold">{template.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{template.name}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-taupe">{template.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <ButtonLink href={`/templates#template-${index + 1}`} variant="ghost" className="w-full">
                      Preview
                    </ButtonLink>
                    <ButtonLink href="/templates" className="w-full">
                      Use Template
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Comparison</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              A faster path than starting from zero.
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-[#3a352c]">
            <div className="grid bg-[#151411] text-sm font-semibold text-gold md:grid-cols-4">
              <div className="p-4">Focus</div>
              <div className="p-4">Uxpress</div>
              <div className="p-4">Hiring an Agency</div>
              <div className="p-4">DIY Website Builders</div>
            </div>
            {comparison.map((row) => (
              <div key={row.factor} className="grid border-t border-[#3a352c] text-sm leading-6 md:grid-cols-4">
                <div className="bg-[#151411] p-4 font-semibold">{row.factor}</div>
                <div className="p-4 text-[#efe7d9]">{row.uxpress}</div>
                <div className="p-4 text-[#c8bfb2]">{row.agency}</div>
                <div className="p-4 text-[#c8bfb2]">{row.diy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Who it is for</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              Built for people who sell expertise, trust, and outcomes.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-2xl border border-border bg-background p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/25 text-sm font-bold text-foreground">
                  {audience.icon}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{audience.title}</h3>
                <p className="mt-3 leading-7 text-taupe">{audience.description}</p>
                <p className="mt-5 rounded-xl bg-sand px-4 py-3 text-sm font-semibold text-charcoal">{audience.useCase}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Testimonials</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              Launch confidence from people who move fast.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-2xl border border-border bg-sand p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {testimonial.initials}
                  </div>
                  <figcaption>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-taupe">{testimonial.profession}</p>
                  </figcaption>
                </div>
                <blockquote className="mt-6 text-pretty text-lg leading-8 text-charcoal">
                  “{testimonial.review}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">FAQ</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              Questions before you launch?
            </h2>
            <p className="mt-5 text-lg leading-8 text-taupe">
              The essentials on customization, domains, launch speed, and mobile readiness.
            </p>
          </div>
          <FAQAccordion items={landingFaqs} />
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0b0b0a_0%,#24211c_60%,#3a321f_100%)] py-16 text-center text-background md:py-24">
        <div className="container-shell">
          <h2 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-none md:text-7xl">
            Stop Delaying Your Online Presence.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#efe7d9]">
            Choose a template today and launch a professional website faster than ever.
          </p>
          <div className="mt-8">
            <ButtonLink href="/templates" variant="gold">
              Get Started
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

