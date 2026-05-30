import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Request Received - Uxpress",
  description: "Your Uxpress website launch request was received. Review next steps and browse more templates.",
  alternates: {
    canonical: "/start/success"
  }
};

export default function StartSuccessPage() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-background p-6 text-center shadow-[0_24px_70px_rgba(36,33,28,0.08)] md:p-10">
          <p className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/25 text-2xl font-semibold">✓</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Request received</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
            Your Uxpress launch request is in.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-charcoal">
            We have captured your website details. The next step is reviewing your business, selected template, and launch goals so the setup can begin cleanly.
          </p>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            {[
              ["1", "Review", "We review your template choice and business details."],
              ["2", "Prepare", "You gather copy, images, testimonials, and links."],
              ["3", "Setup", "Typical setup planning takes 1-3 business days."]
            ].map(([number, title, body]) => (
              <div key={title} className="rounded-2xl border border-border bg-sand p-5">
                <p className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">{number}</p>
                <h2 className="mt-4 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-taupe">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/templates">Back to Templates</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

