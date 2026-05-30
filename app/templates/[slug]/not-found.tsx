import { ButtonLink } from "@/components/ButtonLink";

export default function TemplateNotFound() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-background p-8 text-center shadow-[0_24px_70px_rgba(36,33,28,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Invalid template</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Template not found</h1>
          <p className="mt-4 text-taupe">
            This template is not available yet. Browse the current Uxpress kits and choose an active starting point.
          </p>
          <div className="mt-7">
            <ButtonLink href="/templates">Browse Templates</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

