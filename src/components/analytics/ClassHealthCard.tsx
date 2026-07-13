import { motion } from "framer-motion";
import { Heart, TrendingUp, Users, CheckCircle, Award, Brain, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ClassHealth } from "@/types/Analytics";

interface ClassHealthCardProps {
  health: ClassHealth;
  onViewDetails: (health: ClassHealth) => void;
}

export function ClassHealthCard({ health, onViewDetails }: ClassHealthCardProps) {
  const getHealthColor = (status: ClassHealth["healthStatus"]) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-2xl border border-border bg-card shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">{health.className}</h3>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium border",
              getHealthColor(health.healthStatus)
            )}>
              {health.healthStatus.charAt(0).toUpperCase() + health.healthStatus.slice(1)}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary">{health.overallScore}</div>
          <div className="text-sm text-muted-foreground">/ 100</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Learning</p>
            <p className="text-sm font-semibold text-foreground">{health.learningScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Participation</p>
            <p className="text-sm font-semibold text-foreground">{health.participationScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Assignments</p>
            <p className="text-sm font-semibold text-foreground">{health.assignmentScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Assessments</p>
            <p className="text-sm font-semibold text-foreground">{health.assessmentScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Engagement</p>
            <p className="text-sm font-semibold text-foreground">{health.engagementScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Attendance</p>
            <p className="text-sm font-semibold text-foreground">{health.attendanceScore}%</p>
          </div>
        </div>
      </div>

      <Button variant="outline" size="sm" onClick={() => onViewDetails(health)} className="w-full">
        View Detailed Analysis
      </Button>
    </motion.div>
  );
}
