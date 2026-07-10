import * as React from "react";
import { cn } from "@/lib/utils";

interface StepProps
  extends React.HTMLAttributes<HTMLDivElement> {
  number: number;
  title: string;
  description: string;
}

export function Step({
  className,
  number,
  title,
  description,
  ...props
}: StepProps) {
  return (
    <div
      className={cn(
        "group flex items-start gap-3",
        className
      )}
      {...props}
    >
      <div
        className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-primary
            text-lg
            font-bold
            text-primary-foreground

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:shadow-lg
            group-hover:shadow-primary/20
        "
      >
        {number}
      </div>

      <div>
        <h2 className="text-lg font-bold">
          {title}
        </h2>

        <p className="max-w-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}