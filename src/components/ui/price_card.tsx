import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const priceCardVariants = cva(
  [
    "flex",
    "flex-col",
    "rounded-3xl",
    "border",
    "border-border",
    "bg-background",
    "shadow-lg",
    "transition-all",
    "duration-300",

    "hover:-translate-y-2",
    "hover:shadow-xl",
    "hover:shadow-primary/10",

    "active:-translate-y-2",
    "active:shadow-xl",
    "active:shadow-primary/10",
  ],
  {
    variants: {
      variant: {
        default: "",

        featured: [
          "border-2",
          "border-primary",

          "shadow-xl",
          "shadow-primary/15",

          "scale-[1.04]",

          "hover:scale-[1.06]",

          "active:scale-[1.06]",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface Benefit {
  icon: React.ReactNode;
  label: string;
}

export interface PriceCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof priceCardVariants> {
  title: string;

  highlight?: string;

  subtitle: string;

  price: string;

  period?: string;

  benefits: Benefit[];

  currentPlan?: boolean;

  buttonText?: string;

  onSelect?: () => void;

  badge?: string;
}

export function PriceCard({
  className,

  variant,

  title,

  highlight,

  subtitle,

  price,

  period = "/mês",

  benefits,

  currentPlan = false,

  buttonText = "Escolher plano",

  onSelect,

  badge,

  ...props
}: PriceCardProps) {
  return (
    <div
      className={cn("relative", priceCardVariants({ variant }), className)}
      {...props}
    >
      {badge && (
        <div
          className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-primary

      px-5
      py-2

      text-sm
      font-bold
      text-white

      shadow-lg
      shadow-primary/30
    "
        >
          {badge}
        </div>
      )}
      <div className="p-10">
        {/* Nome */}

        <h3 className="text-center text-2xl font-extrabold">
          {title}{" "}
          {highlight && <span className="text-primary">{highlight}</span>}
        </h3>

        {/* Subtitulo */}

        <p className=" text-center text-muted-foreground">{subtitle}</p>

        {/* Preço */}

        <div className="mt-4 text-center">
          <h2 className="text-4xl font-extrabold text-primary">{price}</h2>

          <span className="text-2xl font-bold text-muted-foreground">
            {period}
          </span>
        </div>

        <hr className="my-4 border-border" />

        {/* Benefícios */}

        <div className="space-y-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-primary">{benefit.icon}</div>

              <span className="text-muted-foreground">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Botão */}

      <div className="mt-auto p-10 pt-0">
        <Button
          className="w-full"
          variant={currentPlan ? "ghost" : "primary"}
          size="md"
          onClick={onSelect}
          disabled={currentPlan}
        >
          {currentPlan ? "Seu plano atual" : buttonText}
        </Button>
      </div>
    </div>
  );
}
