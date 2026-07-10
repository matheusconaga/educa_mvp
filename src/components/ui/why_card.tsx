import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const whyCardVariants = cva(
  [
    "group",
    "relative",
    "overflow-hidden",

    "rounded-3xl",
    "border",
    "border-border",

    "bg-gradient-to-r",
    "from-primary/25",
    "via-background",
    "to-background",

    "shadow-md",

    "transition-all",
    "duration-300",

    "hover:-translate-y-1",
    "hover:shadow-xl",
    "hover:shadow-primary/10",

    "active:-translate-y-1",
    "active:shadow-xl",
    "active:shadow-primary/10",
  ],
  {
    variants: {
      size: {
        sm: "min-h-[180px]",
        md: "min-h-[210px]",
        lg: "min-h-[240px]",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

export interface WhyCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof whyCardVariants> {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function WhyCard({
  className,
  size,
  icon,
  title,
  subtitle,
  ...props
}: WhyCardProps) {
  return (
    <div
      className={cn(whyCardVariants({ size }), className)}
      {...props}
    >
      {/* Ícone */}
      <div
        className="
          absolute
          left-[-72px]
          top-1/2
          flex
          h-40
          w-40
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-[14px]
          border-primary
          text-primary
          transition-transform
          duration-300
          group-hover:scale-105
          group-active:scale-105
        "
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <div className="flex h-full flex-col justify-center pl-25 pr-2 py-4">
        <h3 className="text-2xl font-bold text-primary">
          {title}
        </h3>

        <p className="mt-4 max-w-lg text-md leading-8 text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </div>
  );
}