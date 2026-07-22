import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { EducationalRecommendation } from "@/types/Analytics";

interface RecommendationCardProps {
  recommendation: EducationalRecommendation;
  onAction: (recommendation: EducationalRecommendation) => void;
}

export function RecommendationCard({ recommendation, onAction }: RecommendationCardProps) {
  const getSeverityIcon = (severity: EducationalRecommendation["severity"]) => {
    switch (severity) {
      case "positive":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "critical":
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getSeverityColor = (severity: EducationalRecommendation["severity"]) => {
    switch (severity) {
      case "positive":
        return "bg-green-500/10 border-green-500/20";
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/20";
      case "critical":
        return "bg-red-500/10 border-red-500/20";
    }
  };

  const getActionButtonLabel = (action: EducationalRecommendation["action"]) => {
    switch (action) {
      case "generate-lesson-plan":
        return "Gerar Plano de Aula";
      case "generate-activity":
        return "Gerar Atividade";
      case "generate-assessment":
        return "Gerar Avaliação";
      case "review-documents":
        return "Revisar Documentos";
      case "view-details":
        return "Ver Detalhes";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-5 rounded-2xl border shadow-md hover:shadow-lg transition-shadow",
        getSeverityColor(recommendation.severity)
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        {getSeverityIcon(recommendation.severity)}
        <div className="flex-1">
          <p className="text-foreground font-medium mb-1">{recommendation.message}</p>
          {recommendation.context && (
            <p className="text-sm text-muted-foreground">{recommendation.context}</p>
          )}
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction(recommendation)}
        className="w-full"
      >
        {getActionButtonLabel(recommendation.action)}
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </motion.div>
  );
}
