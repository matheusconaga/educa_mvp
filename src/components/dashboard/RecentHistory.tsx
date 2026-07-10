import { useMemo, useState } from "react";
import {
  Upload,
  Brain,
  ClipboardList,
  BarChart3,
  TriangleAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type HistoryType =
  | "upload"
  | "lesson"
  | "activity"
  | "analysis"
  | "error";

export type HistoryStatus = "Completed" | "In Progress" | "Failed";

export interface HistoryItem {
  id: string;
  type: HistoryType;
  title: string;
  timestamp: string;
  status: HistoryStatus;
}

export interface RecentHistoryProps {
  items: HistoryItem[];
}

const ITEMS_PER_PAGE = 3;

const typeIcons = {
  upload: Upload,
  lesson: Brain,
  activity: ClipboardList,
  analysis: BarChart3,
  error: TriangleAlert,
};

const typeLabels = {
  upload: "Document Upload",
  lesson: "Lesson Plan",
  activity: "Activity",
  analysis: "Analysis",
  error: "System Error",
};

const statusStyles = {
  Completed: {
    border: "border-green-200",
    bg: "bg-green-50/40",
    icon: "bg-green-100 text-green-600",
    title: "text-green-800",
    badge: "bg-green-100 text-green-700",
  },

  "In Progress": {
    border: "border-yellow-200",
    bg: "bg-yellow-50/40",
    icon: "bg-yellow-100 text-yellow-600",
    title: "text-yellow-800",
    badge: "bg-yellow-100 text-yellow-700",
  },

  Failed: {
    border: "border-red-200",
    bg: "bg-red-50/40",
    icon: "bg-red-100 text-red-600",
    title: "text-red-800",
    badge: "bg-red-100 text-red-700",
  },
};

export function RecentHistory({ items }: RecentHistoryProps) {
  const [page, setPage] = useState(0);

  const maxPage = Math.max(
    Math.ceil(items.length / ITEMS_PER_PAGE) - 1,
    0
  );

  const visibleItems = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, page]);

  const startIndex =
    items.length === 0 ? 0 : page * ITEMS_PER_PAGE + 1;

  const endIndex = Math.min(
    (page + 1) * ITEMS_PER_PAGE,
    items.length
  );

  return (
    <div className="h-full rounded-3xl border border-border bg-card shadow-md p-6 flex flex-col">
      {/* Header */}

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Recent History
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            {startIndex}-{endIndex} of {items.length}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-background
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-muted
              hover:shadow-md
              active:-translate-y-0.5
              disabled:pointer-events-none
              disabled:opacity-40
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page === maxPage}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-background
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-muted
              hover:shadow-md
              active:-translate-y-0.5
              disabled:pointer-events-none
              disabled:opacity-40
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Cards */}

      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-3">
          {visibleItems.map((item) => {
            const style =
              statusStyles[item.status] ??
              statusStyles.Completed;

            const Icon = typeIcons[item.type];

            return (
              <div
                key={item.id}
                className={cn(
                  `
                  group
                  rounded-2xl
                  border
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-primary/10
                  active:-translate-y-1
                  `,
                  style.border,
                  style.bg
                )}
              >
                <div className="flex gap-3">
                  <div
                    className={cn(
                      `
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      `,
                      style.icon
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3
                          className={cn(
                            "text-sm font-semibold",
                            style.title
                          )}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {typeLabels[item.type]}
                        </p>
                      </div>

                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold",
                          style.badge
                        )}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                      {item.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {visibleItems.length === 0 && (
            <div className="flex h-[360px] items-center justify-center rounded-2xl border border-dashed border-border">
              <p className="text-sm text-muted-foreground">
                No recent history yet.
              </p>
            </div>
          )}
        </div>

        <div />
      </div>
    </div>
  );
}