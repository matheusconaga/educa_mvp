import * as React from "react";
import { cn } from "@/lib/utils";

interface VideoPresentationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  videoUrl?: string;
}

export function VideoPresentation({
  className,
  videoUrl,
  ...props
}: VideoPresentationProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[720px]",
        className
      )}
      {...props}
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
        {videoUrl ? (
          <iframe
            className="aspect-video w-full"
            src={videoUrl}
            title="Como funciona"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="text-primary flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-xl transition-transform duration-300 hover:scale-110">
              ▶
            </div>
          </div>
        )}
      </div>
    </div>
  );
}