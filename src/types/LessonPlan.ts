export interface LessonPlan {
  id: string;
  classId: string;
  documentId?: string;
  title: string;
  objective: string;
  methodology: string[];
  activities: string[];
  materials: string[];
  assessment: string;
  homework: string;
  estimatedDuration: number;
  createdAt: string;
}

export interface LessonPlanFormData {
  grade: string;
  subject: string;
  topic: string;
  learningObjectives: string;
  duration: string;
  methodologies: string[];
  resources: string[];
  hasSpecialNeeds: boolean;
  specialNeeds: string[];
}

export interface GeneratedLessonPlan {
  title: string;
  grade: string;
  subject: string;
  duration: string;
  learningObjectives: string;
  requiredMaterials: string[];
  teachingMethodology: string[];
  lessonDevelopment: {
    introduction: string;
    mainActivities: string[];
    practice: string;
    assessment: string;
    homework: string;
  };
  adaptations: string;
  teacherNotes: string;
  aiRecommendations: string[];
}
