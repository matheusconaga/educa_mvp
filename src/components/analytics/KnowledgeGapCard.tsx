import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { KnowledgeGap } from "@/types/Analytics";

interface KnowledgeGapCardProps {
  gap: KnowledgeGap;
  onAction: (gap: KnowledgeGap) => void;
}

export function KnowledgeGapCard({ gap, onAction }: KnowledgeGapCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-2xl border border-border bg-card shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">{gap.className}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4 text-orange-500" />
            <span>Critical Gaps</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {gap.criticalGaps.map((gapItem) => (
          <span
            key={gapItem}
            className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-600 border border-red-500/20 text-sm font-medium"
          >
            {gapItem}
          </span>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 mb-4">
        <div className="flex items-start gap-2">
          <Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">{gap.aiRecommendation}</p>
        </div>
      </div>

      <Button variant="outline" size="sm" onClick={() => onAction(gap)} className="w-full">
        Generate Lesson Plan
      </Button>
    </motion.div>
  );
}
