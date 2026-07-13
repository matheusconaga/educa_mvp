export type TrendDirection = "improving" | "stable" | "declining";
export type DifficultyLevel = "low" | "medium" | "high" | "critical";
export type RecommendationSeverity = "positive" | "warning" | "critical";
export type HealthStatus = "excellent" | "healthy" | "warning" | "critical";

export interface LearningTrend {
  id: string;
  name: string;
  data: number[];
  labels: string[];
  trend: TrendDirection;
  description: string;
}

export interface TopicMastery {
  id: string;
  topic: string;
  difficultyPercentage: number;
  difficultyLevel: DifficultyLevel;
  affectedClasses: string[];
  studentsAffected: number;
  trend: TrendDirection;
  recommendedAction: "generate-reinforcement-lesson" | "generate-practice-activity" | "generate-assessment";
}

export interface KnowledgeGap {
  id: string;
  classId: string;
  className: string;
  criticalGaps: string[];
  aiRecommendation: string;
}

export interface CurriculumCoverage {
  id: string;
  progressPercentage: number;
  topicsCompleted: number;
  remainingTopics: number;
  estimatedCompletion: string;
  upcomingPriorityTopics: string[];
}

export interface ClassComparison {
  id: string;
  classId: string;
  className: string;
  averagePerformance: number;
  participation: number;
  assignmentCompletion: number;
  assessmentResults: number;
  learningPace: number;
  healthScore: number;
  healthStatus: HealthStatus;
}

export interface LearningPrediction {
  id: string;
  prediction: string;
  probability: number;
  recommendation: string;
  severity: RecommendationSeverity;
}

export interface TeachingStrategy {
  id: string;
  name: string;
  averagePerformance: number;
  engagement: number;
  retention: number;
  aiExplanation: string;
}

export interface EducationalRecommendation {
  id: string;
  message: string;
  severity: RecommendationSeverity;
  action: "generate-lesson-plan" | "generate-activity" | "generate-assessment" | "review-documents" | "view-details";
  context?: string;
}

export interface ClassHealth {
  id: string;
  classId: string;
  className: string;
  learningScore: number;
  participationScore: number;
  assignmentScore: number;
  assessmentScore: number;
  engagementScore: number;
  attendanceScore: number;
  overallScore: number;
  healthStatus: HealthStatus;
}

export interface MonthlyReport {
  id: string;
  month: string;
  year: string;
  strengths: string[];
  weaknesses: string[];
  mostDifficultTopics: string[];
  mostSuccessfulTopics: string[];
  recommendedActions: string[];
  estimatedTimeSaved: string;
  educationalHighlights: string[];
}

export interface AICopilotMessage {
  id: string;
  message: string;
  context: string;
  actions: Array<{
    label: string;
    action: string;
  }>;
  timestamp: string;
}

export interface AnalyticsFilters {
  dateRange: string;
  classId?: string;
  subject?: string;
  schoolYear?: string;
  performanceLevel?: string;
  teachingMethodology?: string;
}

export interface Analytics {
  // Dashboard Stats
  totalClasses: number;
  totalDocuments: number;
  lessonPlans: number;
  generatedActivities: number;
  hoursSaved: number;
  averagePerformance: number;

  // Analytics
  learningTrends: LearningTrend[];
  topicMastery: TopicMastery[];
  knowledgeGaps: KnowledgeGap[];
  curriculumCoverage: CurriculumCoverage;
  classComparison: ClassComparison[];
  learningPredictions: LearningPrediction[];
  teachingStrategies: TeachingStrategy[];
  educationalRecommendations: EducationalRecommendation[];
  classHealth: ClassHealth[];
  monthlyReport: MonthlyReport;
  aiCopilotMessages: AICopilotMessage[];
}
