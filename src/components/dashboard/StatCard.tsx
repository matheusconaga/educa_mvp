import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statCardVariants = cva(
  [
    "group",
    "flex",
    "flex-col",
    "items-start",

    "rounded-3xl",

    "border",
    "border-border",

    "bg-gradient-to-b",
    "from-primary/5",
    "to-background",

    "shadow-md",

    "transition-all",
    "duration-300",

    "hover:-translate-y-1",

    "hover:shadow-xl",
    "hover:shadow-primary/10",

    "active:-translate-y-1",
  ],
  {
    variants: {
      size: {
        sm: "p-5",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface StatCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export function StatCard({
  className,
  size,
  icon,
  title,
  value,
  change,
  changeType = "neutral",
  ...props
}: StatCardProps) {
  const currentSize = size ?? "md";
  
  const iconSize: Record<"sm" | "md" | "lg", string> = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  const titleSize: Record<"sm" | "md" | "lg", string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const valueSize: Record<"sm" | "md" | "lg", string> = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  const changeColor: Record<"positive" | "negative" | "neutral", string> = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-muted-foreground",
  };

  return (
    <div
      className={cn(
        statCardVariants({ size }),
        "h-full",
        className,
      )}
      {...props}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
          iconSize[currentSize],
          "bg-primary/10 text-primary",
        )}
      >
        {icon}
      </div>

      {/* Title */}
      <p
        className={cn(
          "mt-4 font-medium text-muted-foreground",
          titleSize[currentSize],
        )}
      >
        {title}
      </p>

      {/* Value */}
      <h3
        className={cn(
          "mt-1 font-bold text-foreground",
          valueSize[currentSize],
        )}
      >
        {value}
      </h3>

      {/* Change */}
      {change && (
        <p
          className={cn(
            "mt-2 text-sm",
            changeColor[changeType],
          )}
        >
          {change}
        </p>
      )}
    </div>
  );
}
