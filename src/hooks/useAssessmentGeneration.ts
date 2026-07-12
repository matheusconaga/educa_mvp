import { useState, useCallback } from "react";
import type { AssessmentFormData, GeneratedAssessment, Question, QuestionType } from "@/types/Assessment";

type GenerationStep = 
  | "analyzing" 
  | "strategy" 
  | "generating" 
  | "balancing" 
  | "answerKey" 
  | "finalizing" 
  | "completed";

export function useAssessmentGeneration() {
  const [currentStep, setCurrentStep] = useState<GenerationStep>("analyzing");
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAssessment, setGeneratedAssessment] = useState<GeneratedAssessment | null>(null);

  const generateAssessment = useCallback(async (formData: AssessmentFormData) => {
    setIsGenerating(true);
    setCurrentStep("analyzing");
    setProgress(0);

    try {
      // Simulate AI processing steps
      const steps: GenerationStep[] = [
        "analyzing",
        "strategy",
        "generating",
        "balancing",
        "answerKey",
        "finalizing",
        "completed",
      ];

      for (const step of steps) {
        setCurrentStep(step);
        setProgress(0);

        const stepDuration = step === "analyzing" ? 800 
          : step === "strategy" ? 1000
          : step === "generating" ? 1500
          : step === "balancing" ? 1000
          : step === "answerKey" ? 800
          : step === "finalizing" ? 500
          : 0;

        for (let i = 0; i <= 100; i += 10) {
          await new Promise(resolve => setTimeout(resolve, stepDuration / 10));
          setProgress(i);
        }
      }

      // Generate mock assessment based on form data
      const assessment = generateMockAssessment(formData);
      setGeneratedAssessment(assessment);

      return assessment;
    } catch (error) {
      console.error("Generation failed:", error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const refineAssessment = useCallback(async (action: string) => {
    if (!generatedAssessment) return;

    setIsGenerating(true);
    setCurrentStep("analyzing");
    setProgress(0);

    try {
      // Simulate refinement
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setProgress(i);
      }

      // Apply refinement based on action
      const refinedAssessment = applyRefinement(generatedAssessment, action);
      setGeneratedAssessment(refinedAssessment);

      return refinedAssessment;
    } catch (error) {
      console.error("Refinement failed:", error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  }, [generatedAssessment]);

  const reset = useCallback(() => {
    setCurrentStep("analyzing");
    setProgress(0);
    setIsGenerating(false);
    setGeneratedAssessment(null);
  }, []);

  return {
    currentStep,
    progress,
    isGenerating,
    generatedAssessment,
    generateAssessment,
    refineAssessment,
    reset,
  };
}

function generateMockAssessment(formData: AssessmentFormData): GeneratedAssessment {
  const { assessmentType, grade, subject, topic, difficulty, estimatedTime, numberOfQuestions, questionTypes } = formData;

  const questionCount = parseInt(numberOfQuestions) || 10;
  const questions = generateQuestions(subject, topic, difficulty, questionTypes, questionCount);

  return {
    id: `assessment-${Date.now()}`,
    title: `${assessmentType.charAt(0).toUpperCase() + assessmentType.slice(1)}: ${topic}`,
    type: assessmentType,
    grade,
    subject,
    topic,
    estimatedTime: `${estimatedTime} minutes`,
    difficulty,
    instructions: generateInstructions(assessmentType, subject),
    questions,
    answerKey: formData.generateAnswerKey ? generateAnswerKey(questions) : undefined,
    teacherNotes: generateTeacherNotes(assessmentType, difficulty),
    evaluationRubric: assessmentType === "assignment" ? generateEvaluationRubric(formData.assignmentType) : undefined,
    aiRecommendations: generateAIRecommendations(assessmentType, difficulty),
    generatedAt: new Date().toISOString(),
  };
}

function generateQuestions(subject: string, topic: string, difficulty: AssessmentFormData["difficulty"], questionTypes: QuestionType[], count: number): Question[] {
  const questions: Question[] = [];
  
  for (let i = 0; i < count; i++) {
    const type = questionTypes.includes("mixed") 
      ? getRandomQuestionType()
      : questionTypes[i % questionTypes.length];
    
    questions.push({
      id: `q-${i + 1}`,
      type,
      text: generateQuestionText(subject, topic, type, difficulty),
      options: type === "multiple-choice" || type === "true-false" ? generateOptions(type) : undefined,
      correctAnswer: type === "multiple-choice" || type === "true-false" ? "A" : undefined,
      points: type === "essay" ? 10 : 1,
    });
  }

  return questions;
}

function getRandomQuestionType(): QuestionType {
  const types: QuestionType[] = ["multiple-choice", "open-ended", "true-false", "matching", "fill-blanks", "essay"];
  return types[Math.floor(Math.random() * types.length)];
}

function generateQuestionText(subject: string, topic: string, type: QuestionType, difficulty: AssessmentFormData["difficulty"]): string {
  const difficultyPrefix = difficulty === "easy" ? "Basic" : difficulty === "medium" ? "Intermediate" : difficulty === "hard" ? "Advanced" : "Expert";
  
  const templates: Record<string, Record<QuestionType, string[]>> = {
    Mathematics: {
      "multiple-choice": [
        `What is the result of the following calculation involving ${topic}?`,
        `Which of the following best describes the concept of ${topic}?`,
        `Solve the problem related to ${topic} and select the correct answer.`,
      ],
      "open-ended": [
        `Explain the process of solving problems related to ${topic}.`,
        `Describe how ${topic} is applied in real-world situations.`,
      ],
      "true-false": [
        `The statement about ${topic} is correct.`,
        `${topic} can be applied to solve the given problem.`,
      ],
      "matching": [
        `Match the ${topic} concepts with their definitions.`,
        `Match the ${topic} problems with their solutions.`,
      ],
      "fill-blanks": [
        `Complete the sentence about ${topic} with the appropriate term.`,
        `Fill in the blanks to complete the ${topic} equation.`,
      ],
      "essay": [
        `Discuss the importance of ${topic} in mathematics and provide examples.`,
        `Analyze the relationship between ${topic} and other mathematical concepts.`,
      ],
      "mixed": [
        `Complete the mixed assessment on ${topic} covering various question types.`,
        `Demonstrate understanding of ${topic} through diverse question formats.`,
      ],
    },
    Science: {
      "multiple-choice": [
        `Which of the following best describes the process of ${topic}?`,
        `What is the primary function of ${topic} in biological systems?`,
        `Select the correct statement about ${topic}.`,
      ],
      "open-ended": [
        `Explain the mechanism behind ${topic}.`,
        `Describe how ${topic} affects the overall system.`,
      ],
      "true-false": [
        `${topic} is essential for the survival of organisms.`,
        `The process of ${topic} occurs in all living cells.`,
      ],
      "matching": [
        `Match the ${topic} components with their functions.`,
        `Match the ${topic} stages with their descriptions.`,
      ],
      "fill-blanks": [
        `Complete the description of ${topic} with the correct terms.`,
        `Fill in the blanks to describe the ${topic} process.`,
      ],
      "essay": [
        `Analyze the significance of ${topic} in scientific understanding.`,
        `Discuss the applications of ${topic} in modern science.`,
      ],
      "mixed": [
        `Complete the comprehensive assessment on ${topic} with various question formats.`,
        `Demonstrate understanding of ${topic} through mixed question types.`,
      ],
    },
    default: {
      "multiple-choice": [
        `Which of the following best describes ${topic}?`,
        `What is the main characteristic of ${topic}?`,
        `Select the correct statement about ${topic}.`,
      ],
      "open-ended": [
        `Explain the concept of ${topic} in detail.`,
        `Describe the importance of ${topic} in this subject.`,
      ],
      "true-false": [
        `The statement about ${topic} is accurate.`,
        `${topic} plays a significant role in this context.`,
      ],
      "matching": [
        `Match the ${topic} terms with their meanings.`,
        `Match the ${topic} examples with their categories.`,
      ],
      "fill-blanks": [
        `Complete the sentence about ${topic}.`,
        `Fill in the missing information about ${topic}.`,
      ],
      "essay": [
        `Discuss the historical significance of ${topic}.`,
        `Analyze the impact of ${topic} on society.`,
      ],
      "mixed": [
        `Complete the varied assessment on ${topic} with different question types.`,
        `Show understanding of ${topic} through multiple question formats.`,
      ],
    },
  };

  const subjectTemplates = templates[subject] || templates.default;
  const typeTemplates = subjectTemplates[type] || subjectTemplates["multiple-choice"];
  const template = typeTemplates[Math.floor(Math.random() * typeTemplates.length)];

  return `${difficultyPrefix}: ${template}`;
}

function generateOptions(type: QuestionType): string[] {
  if (type === "true-false") {
    return ["True", "False"];
  }
  
  return [
    "Option A: The correct answer",
    "Option B: A plausible distractor",
    "Option C: Another distractor",
    "Option D: Final option",
  ];
}

function generateInstructions(assessmentType: AssessmentFormData["assessmentType"], _subject: string): string {
  const baseInstructions = [
    "Read each question carefully before answering.",
    "Manage your time effectively to complete all questions.",
    "If unsure about an answer, make your best guess and move on.",
  ];

  const typeInstructions: Record<string, string[]> = {
    activity: [
      "Work through each activity systematically.",
      "Collaborate with peers when permitted.",
      "Document your work clearly.",
    ],
    test: [
    "Answer all questions to the best of your ability.",
    "Show your work for partial credit where applicable.",
    "Review your answers before submitting.",
    ],
    assignment: [
      "Follow the guidelines provided for each section.",
      "Submit your work by the specified deadline.",
      "Ensure all sources are properly cited.",
    ],
  };

  return [...baseInstructions, ...(typeInstructions[assessmentType] || [])].join("\n");
}

function generateAnswerKey(questions: Question[]): string {
  return questions.map((q, i) => `Q${i + 1}: ${q.correctAnswer}`).join("\n");
}

function generateTeacherNotes(assessmentType: AssessmentFormData["assessmentType"], difficulty: AssessmentFormData["difficulty"]): string {
  return `This ${assessmentType} is designed for ${difficulty} level students. Monitor student progress and provide guidance as needed. Adjust timing based on class performance.`;
}

function generateEvaluationRubric(assignmentType?: AssessmentFormData["assignmentType"]): string {
  if (!assignmentType) return "";

  const rubrics: Record<string, string> = {
    essay: "Content (40%), Organization (30%), Grammar & Style (20%), Creativity (10%)",
    "research-project": "Research Quality (35%), Analysis (30%), Presentation (20%), Sources (15%)",
    presentation: "Content (40%), Delivery (30%), Visual Aids (20%), Q&A (10%)",
    seminar: "Preparation (30%), Participation (30%), Critical Thinking (25%), Leadership (15%)",
    "case-study": "Analysis (40%), Solution Quality (30%), Application (20%), Documentation (10%)",
    poster: "Visual Design (30%), Content Accuracy (40%), Organization (20%), Creativity (10%)",
    portfolio: "Completeness (30%), Quality (40%), Reflection (20%), Presentation (10%)",
    "group-project": "Collaboration (30%), Final Product (40%), Process (20%), Individual Contribution (10%)",
    "book-review": "Analysis (40%), Summary (25%), Critical Evaluation (20%), Writing Style (15%)",
    experiment: "Procedure (30%), Results (35%), Analysis (25%), Safety (10%)",
  };

  return rubrics[assignmentType] || "Content (50%), Organization (30%), Presentation (20%)";
}

function generateAIRecommendations(assessmentType: AssessmentFormData["assessmentType"], difficulty: AssessmentFormData["difficulty"]): string[] {
  const recommendations = [
    "Consider adding visual aids to support understanding.",
    "The assessment could benefit from more real-world applications.",
    "Think about including scaffolding for diverse learners.",
  ];

  if (difficulty === "hard" || difficulty === "very-hard") {
    recommendations.push("Consider providing hints for challenging questions.");
  }

  if (assessmentType === "activity") {
    recommendations.push("Ensure clear instructions for each activity step.");
  }

  if (assessmentType === "test") {
    recommendations.push("Balance question types to assess different skills.");
  }

  return recommendations.slice(0, 3);
}

function applyRefinement(assessment: GeneratedAssessment, action: string): GeneratedAssessment {
  const refined = { ...assessment };

  switch (action) {
    case "Make easier":
      refined.difficulty = "easy";
      refined.questions = refined.questions.map((q) => ({
        ...q,
        text: q.text.replace(/Advanced|Expert|Hard/g, "Basic"),
        points: q.type === "essay" ? 5 : 1,
      }));
      refined.aiRecommendations.push("Reduced difficulty level for better accessibility.");
      break;
    case "Increase difficulty":
      refined.difficulty = "hard";
      refined.questions = refined.questions.map((q) => ({
        ...q,
        text: q.text.replace(/Basic|Simple/g, "Advanced"),
        points: q.type === "essay" ? 15 : 2,
      }));
      refined.aiRecommendations.push("Increased challenge level to promote deeper learning.");
      break;
    case "Generate more questions":
      const newQuestions = generateQuestions(
        assessment.subject,
        assessment.topic,
        assessment.difficulty,
        assessment.questions.map((q) => q.type),
        5
      );
      refined.questions = [...refined.questions, ...newQuestions];
      refined.aiRecommendations.push("Added additional questions for comprehensive assessment.");
      break;
    case "Reduce number of questions":
      refined.questions = refined.questions.slice(0, Math.max(5, refined.questions.length - 5));
      refined.aiRecommendations.push("Reduced question count for focused assessment.");
      break;
    case "Improve wording":
      refined.questions = refined.questions.map((q) => ({
        ...q,
        text: q.text.replace(/Which of the following/g, "Select the option that"),
      }));
      refined.aiRecommendations.push("Improved question clarity and wording.");
      break;
    case "Generate alternative version":
      refined.questions = generateQuestions(
        assessment.subject,
        assessment.topic,
        assessment.difficulty,
        assessment.questions.map((q) => q.type),
        assessment.questions.length
      );
      refined.aiRecommendations.push("Generated alternative version with different questions.");
      break;
    case "Generate reinforcement activity":
      refined.aiRecommendations.push("Added reinforcement activity suggestions for struggling students.");
      break;
    case "Generate challenge version":
      refined.difficulty = "very-hard";
      refined.questions = refined.questions.map((q) => ({
        ...q,
        text: q.text.replace(/Basic|Intermediate/g, "Expert"),
        points: q.type === "essay" ? 20 : 3,
      }));
      refined.aiRecommendations.push("Created challenge version for advanced students.");
      break;
    default:
      break;
  }

  return refined;
}
