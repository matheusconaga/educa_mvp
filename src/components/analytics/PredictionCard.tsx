import { motion } from "framer-motion";
import { Brain, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LearningPrediction } from "@/types/Analytics";

interface PredictionCardProps {
  prediction: LearningPrediction;
  onAction: (prediction: LearningPrediction) => void;
}

export function PredictionCard({ prediction, onAction }: PredictionCardProps) {
  const getSeverityIcon = (severity: LearningPrediction["severity"]) => {
    switch (severity) {
      case "positive":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };

  const getSeverityColor = (severity: LearningPrediction["severity"]) => {
    switch (severity) {
      case "positive":
        return "bg-green-500/10 border-green-500/20";
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/20";
      case "critical":
        return "bg-red-500/10 border-red-500/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-5 rounded-2xl border shadow-md hover:shadow-lg transition-shadow",
        getSeverityColor(prediction.severity)
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-foreground font-medium mb-2">{prediction.prediction}</p>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Probability: <span className="font-semibold text-foreground">{prediction.probability}%</span>
            </span>
          </div>
        </div>
        {getSeverityIcon(prediction.severity)}
      </div>

      <div className="p-3 rounded-xl bg-card/50 mb-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Recommendation:</span> {prediction.recommendation}
        </p>
      </div>

      <Button variant="outline" size="sm" onClick={() => onAction(prediction)} className="w-full">
        Take Action
      </Button>
    </motion.div>
  );
}
