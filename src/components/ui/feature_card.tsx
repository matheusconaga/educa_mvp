import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const featureCardVariants = cva(
  [
    "group",
    "flex",
    "flex-col",
    "items-center",

    "rounded-3xl",

    "border",

    "shadow-md",

    "transition-all",
    "duration-300",

    "hover:-translate-y-2",

    "active:-translate-y-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border",

          "bg-gradient-to-b",
          "from-primary/5",
          "to-background",

          "hover:shadow-xl",
          "hover:shadow-primary/10",

          "active:shadow-xl",
          "active:shadow-primary/10",
        ],

        glass: [
          "border-white/20",

          "bg-white/10",

          "backdrop-blur-xl",

          "shadow-2xl",

          "hover:bg-white/15",

          "hover:shadow-primary/20",

          "active:bg-white/15",

          "active:shadow-primary/20",

          "supports-[backdrop-filter]:bg-white/10",
        ],
      },

      size: {
        sm: "p-5",
        md: "p-8",
        lg: "p-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface FeatureCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  icon: React.ReactNode;

  title: string;

  description: string;

  iconClassName?: string;
}

export function FeatureCard({
  className,

  variant,

  size,

  icon,

  title,

  description,

  iconClassName,

  ...props
}: FeatureCardProps) {
  const isGlass = variant === "glass";

  const currentSize = size ?? "md";

  const iconSize: Record<"sm" | "md" | "lg", string> = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };

  const titleSize: Record<"sm" | "md" | "lg", string> = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  const descriptionSize: Record<"sm" | "md" | "lg", string> = {
    sm: "text-sm leading-5",
    md: "text-base leading-7",
    lg: "text-lg leading-8",
  };

  return (
    <div
      className={cn(
        featureCardVariants({
          variant,
          size: currentSize,
        }),
        "h-full",
        className,
      )}
      {...props}
    >
      {/* Ícone */}

      <div
        className={cn(
          "flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-active:scale-110",
          iconSize[currentSize],
          isGlass
            ? "bg-white/15 text-white"
            : (iconClassName ?? "bg-primary/10 text-primary"),
        )}
      >
        {icon}
      </div>

      {/* Título */}

      <h3
        className={cn(
          "mt-4 text-center font-bold",
          titleSize[currentSize],
          isGlass ? "text-white" : "text-secondary",
        )}
      >
        {title}
      </h3>

      {/* Descrição */}

      <p
        className={cn(
          "mt-2 text-center",
          descriptionSize[currentSize],
          isGlass ? "text-white/80" : "text-muted-foreground",
        )}
      >
        {description}
      </p>
    </div>
  );
}
