import { motion } from "framer-motion";
import { TrendingUp, Activity, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Student } from "@/types/Class";

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-600";
      case "at-risk":
        return "bg-yellow-500/10 text-yellow-600";
      case "struggling":
        return "bg-red-500/10 text-red-600";
    }
  };

  const getDifficultyColor = (level: Student["difficultyLevel"]) => {
    switch (level) {
      case "High":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-red-600";
    }
  };

  const getAvatarInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-3">
      {students.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No students in this class yet.
        </div>
      ) : (
        students.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors"
          >
            {/* Avatar */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
              {student.avatar ? (
                <img src={student.avatar} alt={student.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <span>{getAvatarInitials(student.name)}</span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-foreground truncate">{student.name}</h4>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  getStatusColor(student.status)
                )}>
                  {student.status}
                </span>
              </div>
              {student.email && (
                <p className="text-sm text-muted-foreground truncate">{student.email}</p>
              )}
              {student.studentId && (
                <p className="text-xs text-muted-foreground">ID: {student.studentId}</p>
              )}
            </div>

            {/* Stats */}
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Grade</p>
                  <p className="font-semibold text-foreground">{student.averageGrade}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Participation</p>
                  <p className="font-semibold text-foreground">{student.participation}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Progress</p>
                  <p className="font-semibold text-foreground">{student.progress}%</p>
                </div>
              </div>
            </div>

            {/* Difficulty */}
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Level</p>
              <p className={cn("text-sm font-semibold", getDifficultyColor(student.difficultyLevel))}>
                {student.difficultyLevel}
              </p>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
