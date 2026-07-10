import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const featureItemVariants = cva(
  [
    "group",

    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      size: {
        sm: "gap-3",
        md: "gap-4",
        lg: "gap-5",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

export interface FeatureItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureItemVariants> {
  icon: React.ReactNode;

  title: string;

  description: string;

  iconClassName?: string;
}

export function FeatureItem({
  className,

  size,

  icon,

  title,

  description,

  iconClassName,

  ...props
}: FeatureItemProps) {
  return (
    <div
      className={cn(
        featureItemVariants({
          size,
        }),
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-5">
        {/* Ícone */}

        <div
          className={cn(
            "mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110",
            iconClassName
          )}
        >
          {icon}
        </div>

        {/* Texto */}

        <div className="flex-1">
          <h3 className="text-lg font-bold text-secondary md:text-xl">
            {title}
          </h3>

          <p className="mt-2 leading-8 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}