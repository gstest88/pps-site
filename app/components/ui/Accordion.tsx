"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Card from "./Card";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number[];
}

export default function Accordion({ items, allowMultiple, defaultOpen }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(
  defaultOpen ?? [0]
);

const toggle = (index: number) => {
  if (allowMultiple) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  } else {
    setOpenItems((current) =>
      current.includes(index) ? [] : [index]
    );
  }
};

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);

        return (
          <Card
            key={item.question}
            className={"group hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-lg rounded-3xl overflow-hidden"}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
            >
              <span className="text-lg font-semibold text-[#123B63]">
                {item.question}
              </span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-8 text-slate-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}