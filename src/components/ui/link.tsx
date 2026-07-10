import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  [
    "inline-flex items-center gap-2",
    "cursor-pointer",
    "select-none",
    "transition-all duration-200",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring/50",

    "hover:-translate-y-0.5",
  ],
  {
    variants: {
      variant: {
        default: [
          "font-semibold",
          "text-muted-foreground",

          "hover:text-primary",
        ],

        primary: [
          "font-semibold",
          "text-primary",

          "hover:text-primary/80",
        ],

        ghost: [
          "font-medium",
          "text-foreground",

          "hover:text-primary",
        ],
      },

      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Link({
  className,

  variant,

  size,

  leftIcon,

  rightIcon,

  children,

  ...props
}: LinkProps) {
  return (
    <a
      className={cn(
        linkVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      {children}

      {rightIcon && (
        <span className="flex items-center">
          {rightIcon}
        </span>
      )}
    </a>
  );
}