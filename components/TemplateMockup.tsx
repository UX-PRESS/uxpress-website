import type { Template } from "@/lib/templates";

export function TemplateMockup({ template, compact = false }: { template: Template; compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${template.accent} ${
        compact ? "min-h-52" : "min-h-[420px]"
      }`}
      aria-label={`${template.name} preview mockup`}
    >
      <div className="absolute left-5 right-5 top-5 rounded-lg border border-border bg-background shadow-sm">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d66]" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6b8]" />
        </div>
        <div className="grid gap-4 p-5">
          <div className="h-4 w-28 rounded-full bg-foreground/15" />
          <div className="h-8 w-4/5 rounded bg-foreground/90" />
          <div className="h-8 w-3/5 rounded bg-foreground/90" />
          <div className="h-3 w-full rounded bg-taupe/25" />
          <div className="h-3 w-4/5 rounded bg-taupe/25" />
          <div className="mt-2 flex gap-3">
            <div className="h-10 w-32 rounded-full bg-foreground" />
            <div className="h-10 w-28 rounded-full border border-foreground" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
        {template.includes.slice(0, 3).map((item) => (
          <div key={item} className="rounded-lg border border-border bg-background/82 p-3 backdrop-blur">
            <div className="mb-3 h-2 w-10 rounded-full bg-gold" />
            <div className="h-2.5 w-full rounded bg-foreground/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

