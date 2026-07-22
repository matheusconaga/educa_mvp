import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TopicMastery } from "@/types/Analytics";

interface TopicMasteryProps {
  topics: TopicMastery[];
  onAction: (topic: TopicMastery) => void;
}

export function TopicMastery({ topics, onAction }: TopicMasteryProps) {
  const getDifficultyColor = (level: TopicMastery["difficultyLevel"]) => {
    switch (level) {
      case "low":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "high":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "critical":
        return "bg-red-500/10 text-red-600 border-red-500/20";
    }
  };

  const getTrendIcon = (trend: TopicMastery["trend"]) => {
    switch (trend) {
      case "improving":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "declining":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case "stable":
        return <Minus className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getActionButtonLabel = (action: TopicMastery["recommendedAction"]) => {
    switch (action) {
      case "generate-reinforcement-lesson":
        return "Gerar Aula de Reforço";
      case "generate-practice-activity":
        return "Gerar Atividade de Prática";
      case "generate-assessment":
        return "Gerar Avaliação";
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-6">Domínio de Tópicos</h2>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{topic.topic}</h3>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-medium border",
                    getDifficultyColor(topic.difficultyLevel)
                  )}>
                    {topic.difficultyPercentage}% tiveram dificuldade
                  </span>
                  {topic.difficultyLevel === "critical" && (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{topic.affectedClasses.length} turmas afetadas</span>
                  <span>{topic.studentsAffected} students</span>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(topic.trend)}
                    <span className="capitalize">{topic.trend}</span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onAction(topic)}
              >
                {getActionButtonLabel(topic.recommendedAction)}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {topic.affectedClasses.map((className) => (
                <span
                  key={className}
                  className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs"
                >
                  {className}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
