"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-background">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold md:text-lg">{item.question}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand text-xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? <p className="px-5 pb-5 text-pretty leading-7 text-taupe">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

