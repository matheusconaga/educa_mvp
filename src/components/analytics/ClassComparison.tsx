import { motion } from "framer-motion";
import { TrendingUp, Users, CheckCircle, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ClassComparison } from "@/types/Analytics";

interface ClassComparisonProps {
  comparisons: ClassComparison[];
}

export function ClassComparison({ comparisons }: ClassComparisonProps) {
  const getHealthColor = (status: ClassComparison["healthStatus"]) => {
    switch (status) {
      case "excellent":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "healthy":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "warning":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "critical":
        return "bg-red-500/10 text-red-600 border-red-500/20";
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-6">Comparação de Turmas</h2>
      <div className="space-y-4">
        {comparisons.map((comparison, index) => (
          <motion.div
            key={comparison.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{comparison.className}</h3>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-medium border",
                    getHealthColor(comparison.healthStatus)
                  )}>
                    {comparison.healthStatus.charAt(0).toUpperCase() + comparison.healthStatus.slice(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Pontuação de Saúde: {comparison.healthScore}/100
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{comparison.averagePerformance}%</div>
                <div className="text-sm text-muted-foreground">Desempenho</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Participação</p>
                  <p className="text-sm font-semibold text-foreground">{comparison.participation}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Trabalhos</p>
                  <p className="text-sm font-semibold text-foreground">{comparison.assignmentCompletion}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Avaliações</p>
                  <p className="text-sm font-semibold text-foreground">{comparison.assessmentResults}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Ritmo de Aprendizagem</p>
                  <p className="text-sm font-semibold text-foreground">{comparison.learningPace}%</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
