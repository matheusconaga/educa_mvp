export type AssessmentType = "activity" | "test" | "assignment";

export type Difficulty = "easy" | "medium" | "hard" | "very-hard";

export type QuestionType = 
  | "multiple-choice" 
  | "open-ended" 
  | "true-false" 
  | "matching" 
  | "fill-blanks" 
  | "essay" 
  | "mixed";

export type ActivityType = 
  | "classroom-exercise" 
  | "homework" 
  | "group-activity" 
  | "individual-activity" 
  | "practical-activity";

export type AssignmentType = 
  | "essay" 
  | "research-project" 
  | "presentation" 
  | "seminar" 
  | "case-study" 
  | "poster" 
  | "portfolio" 
  | "group-project" 
  | "book-review" 
  | "experiment";

export interface AssessmentFormData {
  assessmentType: AssessmentType;
  grade: string;
  subject: string;
  topic: string;
  learningObjective: string;
  difficulty: Difficulty;
  estimatedTime: string;
  numberOfQuestions: string;
  questionTypes: QuestionType[];
  activityType?: ActivityType;
  assignmentType?: AssignmentType;
  questionDistribution?: "multiple-choice" | "essay" | "mixed";
  difficultyBalance?: boolean;
  randomizeQuestions?: boolean;
  generateAnswerKey?: boolean;
  generateTeacherVersion?: boolean;
  generateStudentVersion?: boolean;
  includeReadingComprehension?: boolean;
  includeListeningActivity?: boolean;
  includeGrammarQuestions?: boolean;
  includeWritingPrompt?: boolean;
  includeDiagrams?: boolean;
  includeInterpretationQuestions?: boolean;
  includeProblemSolving?: boolean;
  includeStepByStepExercises?: boolean;
  includeSourceAnalysis?: boolean;
  includeTimelineQuestions?: boolean;
  presentationRequired?: boolean;
  rubricIncluded?: boolean;
  evaluationCriteria?: string;
  submissionDeadline?: string;
  additionalInstructions: string;
  adaptForInclusiveEducation: boolean;
  inclusiveEducationNeeds: string[];
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer?: string;
  points?: number;
}

export interface GeneratedAssessment {
  id: string;
  title: string;
  type: AssessmentType;
  grade: string;
  subject: string;
  topic: string;
  estimatedTime: string;
  difficulty: Difficulty;
  instructions: string;
  questions: Question[];
  answerKey?: string;
  teacherNotes: string;
  evaluationRubric?: string;
  aiRecommendations: string[];
  generatedAt: string;
}

export interface AssessmentHistory {
  id: string;
  title: string;
  type: AssessmentType;
  subject: string;
  grade: string;
  topic: string;
  generatedAt: string;
}
