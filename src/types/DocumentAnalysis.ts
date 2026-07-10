export type Difficulty = "Easy" | "Medium" | "Hard";

export interface DocumentAnalysis {
  id: string;
  documentId: string;
  topics: string[];
  skills: string[];
  competencies: string[];
  estimatedHours: number;
  difficulty: Difficulty;
  complexity: number;
  pedagogicalDensity: number;
  riskLevel: string;
  recommendations: string[];
  generatedAt: string;
}
