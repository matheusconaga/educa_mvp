export type ActivityType = "Multiple Choice" | "Essay" | "Interpretation" | "Mixed";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Activity {
  id: string;
  lessonPlanId?: string;
  title: string;
  difficulty: Difficulty;
  type: ActivityType;
  questions: number;
  estimatedTime: number;
  generatedAt: string;
}
