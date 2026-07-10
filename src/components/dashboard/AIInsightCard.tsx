import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type InsightSeverity = "positive" | "warning" | "critical";

interface AIInsightCardProps {
  icon: LucideIcon;
  title: string;
  message: string;
  severity: InsightSeverity;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const severityStyles: Record<InsightSeverity, string> = {
  positive: "border-green-200 bg-green-50/50",
  warning: "border-yellow-200 bg-yellow-50/50",
  critical: "border-red-200 bg-red-50/50",
};

const iconStyles: Record<InsightSeverity, string> = {
  positive: "bg-green-100 text-green-600",
  warning: "bg-yellow-100 text-yellow-600",
  critical: "bg-red-100 text-red-600",
};

const titleStyles: Record<InsightSeverity, string> = {
  positive: "text-green-800",
  warning: "text-yellow-800",
  critical: "text-red-800",
};

export function AIInsightCard({
  icon: Icon,
  title,
  message,
  severity,
  action,
}: AIInsightCardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 active:-translate-y-1",
        severityStyles[severity]
      )}
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
            iconStyles[severity]
          )}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <h3
            className={cn(
              "font-semibold tracking-tight",
              titleStyles[severity]
            )}
          >
            {title}
          </h3>
        </div>
      </div>

      <p className="mb-5 text-sm leading-6 text-muted-foreground">
        {message}
      </p>

      {action && (
        <button
          onClick={action.onClick}
          className="text-sm font-medium text-primary transition-all duration-200 hover:translate-x-1 hover:text-primary/80"
        >
          {action.label} →
        </button>
      )}
    </div>
  );
}