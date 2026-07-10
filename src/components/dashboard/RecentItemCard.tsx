import { cn } from "@/lib/utils";

interface RecentItemCardProps {
  title: string;
  subtitle: string;
  date: string;
  status?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function RecentItemCard({
  title,
  subtitle,
  date,
  status,
  icon,
  onClick,
}: RecentItemCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group",
        "flex",
        "items-center",
        "gap-4",

        "rounded-2xl",
        "border",
        "border-border",

        "bg-card",

        "p-4",

        "shadow-sm",

        "transition-all",
        "duration-200",

        "hover:border-primary/30",
        "hover:shadow-md",
        "hover:-translate-y-0.5",

        "cursor-pointer",

        onClick && "hover:bg-muted/50",
      )}
    >
      {/* Icon */}
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground truncate">{title}</h4>
        <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-muted-foreground">{date}</span>
        {status && (
          <span className="text-xs font-medium text-primary">{status}</span>
        )}
      </div>
    </div>
  );
}
