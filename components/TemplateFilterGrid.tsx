"use client";

import { useMemo, useState } from "react";
import { TemplateCard } from "@/components/TemplateCard";
import type { Template } from "@/lib/templates";

const filters = ["All", "Coaches", "Consultants", "Personal Brands"] as const;

export function TemplateFilterGrid({ templates }: { templates: Template[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visibleTemplates = useMemo(() => {
    if (active === "All") {
      return templates;
    }

    return templates.filter((template) => template.useCase === active);
  }, [active, templates]);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter templates by use case">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold ${
              active === filter
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-foreground hover:bg-sand"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleTemplates.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </div>
  );
}

