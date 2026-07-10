import { Button } from "@/components/ui/button";

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
}

export function QuickActionButton({
  icon,
  label,
  onClick,
  variant = "primary",
}: QuickActionButtonProps) {
  return (
    <Button
      variant={variant}
      size="md"
      onClick={onClick}
      className="w-full justify-start gap-3"
    >
      <span className="flex items-center">{icon}</span>
      {label}
    </Button>
  );
}
