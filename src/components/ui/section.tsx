import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        `
          relative
         scroll-mt-18 
         sm:scroll-mt-20
          overflow-hidden
        `,
        className,
      )}
    >
      {children}
    </section>
  );
}
