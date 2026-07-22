import { motion } from "framer-motion";
import { Users, TrendingUp, AlertTriangle, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Class, AIInsight } from "@/types/Class";

interface ClassCardProps {
  classData: Class;
  aiInsight?: AIInsight;
  onViewDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onGenerateLesson: () => void;
  onGenerateActivity: () => void;
  onGenerateAssessment: () => void;
  onViewAnalytics: () => void;
}

export function ClassCard({
  classData,
  aiInsight,
  onViewDetails,
  onEdit,
  onDelete,
  onGenerateLesson,
  onGenerateActivity,
  onGenerateAssessment,
  onViewAnalytics,
}: ClassCardProps) {
  const getStatusColor = (status: Class["status"]) => {
    switch (status) {
      case "healthy":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "warning":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "critical":
        return "bg-red-500/10 text-red-600 border-red-500/20";
    }
  };

  const getStatusMessage = (status: Class["status"]) => {
    switch (status) {
      case "healthy":
        return "Os alunos estão progredindo normalmente.";
      case "warning":
        return classData.criticalTopic
          ? `Muitos alunos com dificuldade em ${classData.criticalTopic}.`
          : "Alguns alunos precisam de atenção.";
      case "critical":
        return classData.criticalTopic
          ? `Baixa engajamento detectado. Crítico: ${classData.criticalTopic}.`
          : "Problemas críticos detectados.";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-border bg-card p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{classData.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{classData.subject}</span>
            <span>•</span>
            <span>{classData.grade}</span>
          </div>
        </div>
        <div className={cn(
          "px-3 py-1 rounded-full text-xs font-medium border",
          getStatusColor(classData.status)
        )}>
          {classData.status.charAt(0).toUpperCase() + classData.status.slice(1)}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Alunos</p>
            <p className="text-sm font-semibold text-foreground">{classData.students}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Média</p>
            <p className="text-sm font-semibold text-foreground">{classData.averagePerformance}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Próxima Aula</p>
            <p className="text-sm font-semibold text-foreground truncate">{classData.nextLesson || "—"}</p>
          </div>
        </div>
      </div>

      {/* Status Message */}
      <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-muted/30">
        <AlertTriangle className={cn(
          "h-4 w-4 mt-0.5 flex-shrink-0",
          classData.status === "healthy" ? "text-green-500" : classData.status === "warning" ? "text-yellow-500" : "text-red-500"
        )} />
        <p className="text-xs text-muted-foreground">{getStatusMessage(classData.status)}</p>
      </div>

      {/* Recent Activity */}
      {classData.recentActivity && (
        <div className="flex items-center gap-2 mb-4 text-sm">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Recente: </span>
          <span className="text-foreground">{classData.recentActivity}</span>
        </div>
      )}

      {/* AI Insight */}
      {aiInsight && (
        <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5 bg-primary" />
            <div className="flex-1">
              <p className="text-xs text-foreground mb-2">{aiInsight.message}</p>
              <div className="flex gap-2">
                {aiInsight.action === "generate-lesson" && (
                  <Button variant="outline" size="sm" onClick={onGenerateLesson}>
                    Gerar Plano de Aula
                  </Button>
                )}
                {aiInsight.action === "generate-activity" && (
                  <Button variant="outline" size="sm" onClick={onGenerateActivity}>
                    Gerar Atividade
                  </Button>
                )}
                {aiInsight.action === "generate-assessment" && (
                  <Button variant="outline" size="sm" onClick={onGenerateAssessment}>
                    Gerar Avaliação
                  </Button>
                )}
                {aiInsight.action === "view-analytics" && (
                  <Button variant="outline" size="sm" onClick={onViewAnalytics}>
                    Ver Inteligência Educacional
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={onViewDetails} className="flex-1">
          Ver Detalhes
        </Button>
        <Button variant="ghost" size="sm" onClick={onEdit}>
          Editar
        </Button>
        <Button variant="ghost" size="sm" onClick={onDelete}>
          Excluir
        </Button>
      </div>
    </motion.div>
  );
}
