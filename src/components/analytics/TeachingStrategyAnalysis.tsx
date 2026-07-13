import { motion } from "framer-motion";
import { TrendingUp, Users, Brain } from "lucide-react";
import type { TeachingStrategy } from "@/types/Analytics";

interface TeachingStrategyAnalysisProps {
  strategies: TeachingStrategy[];
}

export function TeachingStrategyAnalysis({ strategies }: TeachingStrategyAnalysisProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-6">Teaching Strategy Analysis</h2>
      <div className="space-y-4">
        {strategies.map((strategy, index) => (
          <motion.div
            key={strategy.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground text-lg">{strategy.name}</h3>
              <div className="text-2xl font-bold text-primary">{strategy.averagePerformance}%</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Performance</p>
                  <p className="text-sm font-semibold text-foreground">{strategy.averagePerformance}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                  <p className="text-sm font-semibold text-foreground">{strategy.engagement}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Retention</p>
                  <p className="text-sm font-semibold text-foreground">{strategy.retention}%</p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-2">
                <Brain className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{strategy.aiExplanation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
