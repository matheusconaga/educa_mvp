import { Link } from "react-router-dom";
import { SeverityBadge } from "./SeverityBadge";
import { cn } from "@/lib/utils";

interface ClassRow {
  id: string;
  name: string;
  students: number;
  recentActivity: string;
  progress: number;
  criticalTopic: string;
  severity: "low" | "medium" | "high" | "critical";
}

interface ClassesTableProps {
  classes: ClassRow[];
  totalClasses: number;
}

export function ClassesTable({ classes, totalClasses }: ClassesTableProps) {
  return (
    <div className="flex h-full min-h-[380px] rounded-3xl border border-border bg-card shadow-md overflow-hidden flex-col xl:min-h-[460px]">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div>
          <h2 className="text-xl font-bold text-foreground">My Classes</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Total Classes: {totalClasses}
          </p>
        </div>
        <Link
          to="/classes"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View All Classes →
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Class Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Recent Activity
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Class Progress
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Critical Topic
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {classes.map((classItem) => (
              <tr
                key={classItem.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-foreground">
                    {classItem.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-muted-foreground">
                    {classItem.students}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-muted-foreground">
                    {classItem.recentActivity}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[100px]">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all",
                          classItem.progress >= 80
                            ? "bg-green-500"
                            : classItem.progress >= 60
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        )}
                        style={{ width: `${classItem.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {classItem.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <SeverityBadge severity={classItem.severity}>
                    {classItem.criticalTopic}
                  </SeverityBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
