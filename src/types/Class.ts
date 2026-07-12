export type ClassStatus = "healthy" | "warning" | "critical";
export type AlertSeverity = "information" | "warning" | "critical";

export interface Class {
  id: string;
  name: string;
  subject: string;
  grade: string;
  schoolYear: string;
  students: number;
  averageLevel: "Low" | "Medium" | "High";
  averagePerformance: number;
  difficulties: string[];
  calendar: string;
  description: string;
  status: ClassStatus;
  criticalTopic?: string;
  recentActivity?: string;
  nextLesson?: string;
  createdAt: string;
}

export interface Student {
  id: string;
  name: string;
  email?: string;
  studentId?: string;
  avatar?: string;
  averageGrade: number;
  participation: number;
  progress: number;
  difficultyLevel: "Low" | "Medium" | "High";
  status: "active" | "at-risk" | "struggling";
  classId: string;
}

export interface AIInsight {
  id: string;
  type: "performance" | "engagement" | "planning" | "assignment";
  message: string;
  severity: AlertSeverity;
  action?: "generate-lesson" | "generate-activity" | "generate-assessment" | "view-analytics";
  createdAt: string;
}

export interface ClassAlert {
  id: string;
  type: "absence" | "difficulty" | "performance" | "assignment" | "engagement";
  message: string;
  severity: AlertSeverity;
  studentIds?: string[];
  createdAt: string;
}

export interface CreateClassFormData {
  name: string;
  grade: string;
  subject: string;
  schoolYear: string;
  description?: string;
}

export interface ImportedStudent {
  name: string;
  email?: string;
  studentId?: string;
}
