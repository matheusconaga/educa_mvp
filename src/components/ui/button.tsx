import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg",
    "transition-all duration-200",
    "cursor-pointer",
    "select-none",
    "whitespace-nowrap",

    "hover:-translate-y-1",
    "active:translate-y-1",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring/50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-primary-foreground",
          "font-semibold",

          "hover:bg-primary/90",

          "hover:shadow-lg",
          "hover:shadow-primary/10",

            "active:bg-primary/90",

          "active:shadow-lg",
          "active:shadow-primary/10",
        ],

        outline: [
          "border",
          "border-border",

          "border-primary",

          "bg-transparent",

          "text-primary",
          "font-semibold",

          "hover:bg-muted",

          "hover:shadow-lg",
          "hover:shadow-primary/10",

          "active:bg-muted",

          "active:shadow-lg",
          "active:shadow-primary/10",
        ],

        ghost: ["text-foreground", "cursor-default", "hover:bg-muted", "active:bg-muted"],

        secondary: [
          "bg-white",
          "text-primary",
          "font-semibold",

          "border",
          "border-white/80",

          "hover:bg-white/90",

          "hover:shadow-lg",
          "hover:shadow-primary/15",

          "active:bg-white/90",

          "active:shadow-lg",
          "active:shadow-primary/15",
        ],
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-10 px-6 text-sm",

        lg: "h-12 px-8 text-base",

        xl: "h-14 px-12 text-base font-bold",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className,

  variant,

  size,

  leftIcon,

  rightIcon,

  children,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),

        className,
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}
