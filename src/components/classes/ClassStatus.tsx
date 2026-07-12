import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ClassStatus } from "@/types/Class";

interface ClassStatusProps {
  status: ClassStatus;
  message?: string;
}

export function ClassStatus({ status, message }: ClassStatusProps) {
  const getStatusConfig = (status: ClassStatus) => {
    switch (status) {
      case "healthy":
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
          borderColor: "border-green-500/20",
          label: "Healthy",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          color: "text-yellow-500",
          bgColor: "bg-yellow-500/10",
          borderColor: "border-yellow-500/20",
          label: "Warning",
        };
      case "critical":
        return {
          icon: XCircle,
          color: "text-red-500",
          bgColor: "bg-red-500/10",
          borderColor: "border-red-500/20",
          label: "Critical",
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-full border",
      config.bgColor,
      config.borderColor
    )}>
      <Icon className={cn("h-4 w-4", config.color)} />
      <span className={cn("text-sm font-medium", config.color)}>
        {config.label}
      </span>
      {message && (
        <span className="text-sm text-muted-foreground ml-1">
          - {message}
        </span>
      )}
    </div>
  );
}
