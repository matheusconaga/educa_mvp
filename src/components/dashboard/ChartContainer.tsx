import { cn } from "@/lib/utils";

interface ChartContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartContainer({
  title,
  description,
  children,
  className,
}: ChartContainerProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border",
        "border-border",

        "bg-card",

        "p-6",

        "shadow-md",

        className,
      )}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Chart */}
      <div className="min-h-[300px]">{children}</div>
    </div>
  );
}
