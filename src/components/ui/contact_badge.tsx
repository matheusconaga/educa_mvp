import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const contactBadgeVariants = cva(
  [
    "group",
    "flex",
    "items-center",
    "justify-center",

    "rounded-2xl",

    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        default: [
          "border",
          "border-border",

          "bg-primary/5",

          "text-primary",

          "hover:bg-primary",
          "hover:text-white",

          "hover:border-primary",

          "hover:-translate-y-1",

          "hover:shadow-lg",
          "hover:shadow-primary/20",

          "active:bg-primary",
          "active:text-white",

          "active:border-primary",

          "active:-translate-y-1",

          "active:shadow-lg",
          "active:shadow-primary/20",
        ],

        glass: [
          "border",
          "border-white/20",

          "bg-white/10",

          "backdrop-blur-xl",

          "text-white",

          "hover:bg-white/20",

          "hover:-translate-y-1",

          "hover:shadow-xl",
          "hover:shadow-primary/20",

            "active:bg-white/20",

          "active:-translate-y-1",

          "active:shadow-xl",
          "active:shadow-primary/20",
        ],

        outline: [
          "border",
          "border-border",

          "bg-transparent",

          "text-primary",

          "hover:bg-primary/10",
          "hover:border-primary",

           "active:bg-primary/10",
          "active:border-primary",
        ],

        solid: [
          "bg-primary",

          "text-white",

          "hover:scale-105",

          "hover:shadow-xl",
          "hover:shadow-primary/30",

           "active:scale-105",

          "active:shadow-xl",
          "active:shadow-primary/30",
        ],
      },

      size: {
        sm: "h-10 w-10",
        md: "h-12 w-12",
        lg: "h-14 w-14",
        xl: "h-16 w-16",
      },

      clickable: {
        true: "cursor-pointer",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      clickable: true,
    },
  }
);

export interface ContactBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contactBadgeVariants> {}

export function ContactBadge({
  className,
  variant,
  size,
  clickable,
  children,
  ...props
}: ContactBadgeProps) {
  return (
    <div
      className={cn(
        contactBadgeVariants({
          variant,
          size,
          clickable,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}