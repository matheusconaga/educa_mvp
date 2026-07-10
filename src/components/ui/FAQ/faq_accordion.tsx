import { useState } from "react";

import { FaqItem } from "./faq_item";

export interface Faq {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: Faq[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [opened, setOpened] = useState<number | null>(0);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:gap-4">
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={opened === index}
          onToggle={() => setOpened(opened === index ? null : index)}
        />
      ))}
    </div>
  );
}
