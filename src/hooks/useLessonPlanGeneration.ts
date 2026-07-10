import { useState, useCallback } from "react";
import type { LessonPlanFormData, GeneratedLessonPlan } from "@/types/LessonPlan";

type GenerationStep = 
  | "analyzing" 
  | "strategies" 
  | "structure" 
  | "activities" 
  | "assessment" 
  | "adaptations" 
  | "finalizing" 
  | "completed";

export function useLessonPlanGeneration() {
  const [currentStep, setCurrentStep] = useState<GenerationStep>("analyzing");
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedLessonPlan | null>(null);

  const generateLessonPlan = useCallback(async (formData: LessonPlanFormData) => {
    setIsGenerating(true);
    setCurrentStep("analyzing");
    setProgress(0);

    try {
      // Simulate AI processing steps
      const steps: GenerationStep[] = [
        "analyzing",
        "strategies",
        "structure",
        "activities",
        "assessment",
        "adaptations",
        "finalizing",
        "completed",
      ];

      for (const step of steps) {
        setCurrentStep(step);
        setProgress(0);

        const stepDuration = step === "analyzing" ? 800 
          : step === "strategies" ? 1000
          : step === "structure" ? 1200
          : step === "activities" ? 1500
          : step === "assessment" ? 1000
          : step === "adaptations" ? 800
          : step === "finalizing" ? 500
          : 0;

        for (let i = 0; i <= 100; i += 10) {
          await new Promise(resolve => setTimeout(resolve, stepDuration / 10));
          setProgress(i);
        }
      }

      // Generate mock lesson plan based on form data
      const plan: GeneratedLessonPlan = generateMockLessonPlan(formData);
      setGeneratedPlan(plan);

      return plan;
    } catch (error) {
      console.error("Generation failed:", error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const refineLessonPlan = useCallback(async (action: string) => {
    if (!generatedPlan) return;

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
      const refinedPlan = applyRefinement(generatedPlan, action);
      setGeneratedPlan(refinedPlan);

      return refinedPlan;
    } catch (error) {
      console.error("Refinement failed:", error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  }, [generatedPlan]);

  const reset = useCallback(() => {
    setCurrentStep("analyzing");
    setProgress(0);
    setIsGenerating(false);
    setGeneratedPlan(null);
  }, []);

  return {
    currentStep,
    progress,
    isGenerating,
    generatedPlan,
    generateLessonPlan,
    refineLessonPlan,
    reset,
  };
}

function generateMockLessonPlan(formData: LessonPlanFormData): GeneratedLessonPlan {
  const { grade, subject, topic, learningObjectives, duration, methodologies, resources, hasSpecialNeeds, specialNeeds } = formData;

  return {
    title: `${topic} - ${subject}`,
    grade,
    subject,
    duration: `${duration} minutes`,
    learningObjectives,
    requiredMaterials: resources.length > 0 ? resources : ["Whiteboard", "Markers", "Notebook"],
    teachingMethodology: methodologies.length > 0 ? methodologies : ["Direct Instruction"],
    lessonDevelopment: {
      introduction: generateIntroduction(subject, topic),
      mainActivities: generateActivities(subject, topic, methodologies),
      practice: generatePractice(),
      assessment: generateAssessment(),
      homework: generateHomework(),
    },
      adaptations: hasSpecialNeeds ? generateAdaptations(specialNeeds) : "No special adaptations required.",
      teacherNotes: "Ensure all students participate actively. Monitor understanding throughout the lesson.",
      aiRecommendations: generateAIRecommendations(subject, methodologies),
    };
}

function generateIntroduction(subject: string, _topic: string): string {
  const intros: Record<string, string[]> = {
    Mathematics: [
      "Begin with a real-world problem that demonstrates the relevance of the topic.",
      "Use visual aids to introduce the concept before diving into formal definitions.",
      "Start with a quick review of prerequisite skills to ensure all students are prepared.",
    ],
    Science: [
      "Begin with an engaging demonstration or experiment to spark curiosity.",
      "Connect the topic to students' prior knowledge and everyday experiences.",
      "Pose a thought-provoking question to guide the lesson's exploration.",
    ],
    History: [
      "Start with a compelling story or primary source document from the time period.",
      "Use a timeline to establish context before diving into specific events.",
      "Begin with a 'what if' scenario to engage students in historical thinking.",
    ],
    default: [
      "Begin with an engaging hook to capture students' attention.",
      "Connect the lesson to previous learning and real-world applications.",
      "State the learning objectives clearly at the beginning of the lesson.",
    ],
  };

  const subjectIntros = intros[subject] || intros.default;
  return subjectIntros[Math.floor(Math.random() * subjectIntros.length)];
}

function generateActivities(_subject: string, _topic: string, methodologies: string[]): string[] {
  const baseActivities = [
    "Interactive discussion with guided questions",
    "Small group collaborative problem-solving",
    "Individual practice with immediate feedback",
    "Peer teaching and explanation activities",
    "Hands-on exploration and discovery",
  ];

  const methodologyActivities: Record<string, string[]> = {
    "Direct Instruction": [
      "Teacher-led explanation with visual aids",
      "Guided note-taking session",
      "Step-by-step demonstration",
    ],
    "Project-Based Learning": [
      "Group project planning and execution",
      "Real-world problem application",
      "Creative presentation development",
    ],
    "Flipped Classroom": [
      "Pre-lesson video discussion",
      "In-class application of concepts",
      "Peer review and feedback",
    ],
    "Socratic Method": [
      "Guided questioning to develop understanding",
      "Student-led discussions",
      "Critical thinking exercises",
    ],
    "Gamification": [
      "Educational game or competition",
      "Point-based learning activities",
      "Achievement-based progression",
    ],
    "Collaborative Learning": [
      "Think-pair-share activities",
      "Group brainstorming sessions",
      "Collaborative problem-solving",
    ],
    "Inquiry-Based Learning": [
      "Student-generated questions",
      "Investigation and research activities",
      "Hypothesis testing and conclusion",
    ],
  };

  let activities = [...baseActivities.slice(0, 2)];
  
  methodologies.forEach((method) => {
    const methodActivities = methodologyActivities[method] || [];
    activities = [...activities, ...methodActivities.slice(0, 1)];
  });

  return activities.slice(0, 4);
}

function generatePractice(): string {
  return `Students will practice the concept through guided exercises, gradually increasing in complexity. The teacher will circulate to provide individual support and address misconceptions as they arise.`;
}

function generateAssessment(): string {
  return `Assessment will be ongoing through observation of student participation and understanding. A brief exit ticket or quick quiz will be used to gauge mastery of the learning objectives.`;
}

function generateHomework(): string {
  return `Students will complete practice problems to reinforce the concepts learned in class. The assignment will be designed to take approximately 15-20 minutes and will include a mix of review and extension problems.`;
}

function generateAdaptations(specialNeeds: string[]): string {
  const adaptations: string[] = [];
  
  if (specialNeeds.includes("Autism Spectrum Disorder (ASD)")) {
    adaptations.push("Provide visual schedules and clear expectations. Use concrete examples and minimize sensory distractions.");
  }
  if (specialNeeds.includes("ADHD")) {
    adaptations.push("Incorporate movement breaks and chunk activities into smaller segments. Provide clear, concise instructions.");
  }
  if (specialNeeds.includes("Hearing Impairment")) {
    adaptations.push("Ensure visual aids are prominent. Use captioning when available and face students when speaking.");
  }
  if (specialNeeds.includes("Visual Impairment")) {
    adaptations.push("Provide materials in accessible formats. Use descriptive language for visual content.");
  }
  if (specialNeeds.includes("Dyslexia")) {
    adaptations.push("Use dyslexia-friendly fonts and provide audio materials when possible. Allow extra time for reading tasks.");
  }
  
  return adaptations.length > 0 
    ? adaptations.join(" ") 
    : "Adaptations will be made based on individual student needs as identified in their IEPs.";
}

function generateAIRecommendations(_subject: string, methodologies: string[]): string[] {
  const recommendations = [
    "Consider incorporating more visual elements to support different learning styles.",
    "The lesson could benefit from additional real-world connections to increase engagement.",
    "Think about adding formative assessment checkpoints throughout the lesson.",
    "Consider scaffolding the activities to better support diverse learners.",
  ];

  if (methodologies.includes("Project-Based Learning")) {
    recommendations.push("Ensure projects have clear rubrics and milestones for tracking progress.");
  }
  if (methodologies.includes("Collaborative Learning")) {
    recommendations.push("Assign specific roles within groups to ensure equal participation.");
  }

  return recommendations.slice(0, 3);
}

function applyRefinement(plan: GeneratedLessonPlan, action: string): GeneratedLessonPlan {
  const refined = { ...plan };

  switch (action) {
    case "Make it more engaging":
      refined.lessonDevelopment.mainActivities = [
        "Interactive game-based learning activity",
        "Student-led demonstrations",
        "Real-world scenario simulation",
        ...refined.lessonDevelopment.mainActivities.slice(0, 2),
      ];
      refined.aiRecommendations.push("Added gamification elements to increase student engagement.");
      break;
    case "Simplify language":
      refined.teacherNotes = "Use simpler vocabulary and shorter sentences. Check for understanding frequently.";
      refined.aiRecommendations.push("Adjusted language complexity for better accessibility.");
      break;
    case "Increase difficulty":
      refined.lessonDevelopment.practice = "Students will tackle complex, multi-step problems requiring critical thinking and synthesis of concepts.";
      refined.aiRecommendations.push("Increased challenge level to promote deeper learning.");
      break;
    case "Adapt for younger students":
      refined.lessonDevelopment.introduction = "Begin with a story or visual hook appropriate for younger learners.";
      refined.aiRecommendations.push("Adapted content for age-appropriate delivery.");
      break;
    case "Generate more activities":
      refined.lessonDevelopment.mainActivities = [
        ...refined.lessonDevelopment.mainActivities,
        "Creative expression activity",
        "Technology-integrated exercise",
      ];
      refined.aiRecommendations.push("Added additional activity options for variety.");
      break;
    case "Improve assessment":
      refined.lessonDevelopment.assessment = "Use a mix of formative and summative assessments including self-assessment, peer assessment, and teacher assessment with clear rubrics.";
      refined.aiRecommendations.push("Enhanced assessment strategy with multiple evaluation methods.");
      break;
    default:
      break;
  }

  return refined;
}
