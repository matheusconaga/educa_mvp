import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LearningTrend } from "@/types/Analytics";

interface LearningTrendsProps {
  trends: LearningTrend[];
}

export function LearningTrends({ trends }: LearningTrendsProps) {
  const getTrendIcon = (trend: LearningTrend["trend"]) => {
    switch (trend) {
      case "improving":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "declining":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case "stable":
        return <Minus className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getTrendColor = (trend: LearningTrend["trend"]) => {
    switch (trend) {
      case "improving":
        return "text-green-500";
      case "declining":
        return "text-red-500";
      case "stable":
        return "text-yellow-500";
    }
  };

  const getBarColor = (index: number) => {
    const colors = ["bg-primary/20", "bg-primary/40", "bg-primary/60", "bg-primary/80", "bg-primary"];
    return colors[index % colors.length];
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-6">Learning Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend, index) => (
          <motion.div
            key={trend.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl border border-border bg-muted/30"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{trend.name}</h3>
              <div className="flex items-center gap-1">
                {getTrendIcon(trend.trend)}
                <span className={cn("text-sm font-medium", getTrendColor(trend.trend))}>
                  {trend.trend.charAt(0).toUpperCase() + trend.trend.slice(1)}
                </span>
              </div>
            </div>
            
            {/* Simple bar chart visualization */}
            <div className="flex items-end gap-1 h-24 mb-3">
              {trend.data.map((value, i) => (
                <div
                  key={i}
                  className={cn("flex-1 rounded-t-sm", getBarColor(i))}
                  style={{ height: `${value}%` }}
                  title={`${trend.labels[i]}: ${value}%`}
                />
              ))}
            </div>
            
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              {trend.labels.map((label, i) => (
                <span key={i}>{label}</span>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">{trend.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
