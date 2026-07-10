import { cn } from "@/lib/utils";

type GenerationStep = 
  | "analyzing" 
  | "strategies" 
  | "structure" 
  | "activities" 
  | "assessment" 
  | "adaptations" 
  | "finalizing" 
  | "completed";

interface LessonPlanProgressProps {
  currentStep: GenerationStep;
  progress: number;
}

const stepLabels: Record<GenerationStep, string> = {
  analyzing: "Analyzing class information...",
  strategies: "Selecting teaching strategies...",
  structure: "Generating lesson structure...",
  activities: "Creating activities...",
  assessment: "Building assessment...",
  adaptations: "Applying educational adaptations...",
  finalizing: "Finalizing lesson plan...",
  completed: "Completed",
};

const stepDescriptions: Record<GenerationStep, string> = {
  analyzing: "Analyzing your lesson requirements and objectives",
  strategies: "Selecting the best teaching methodologies for your class",
  structure: "Building the overall lesson structure and flow",
  activities: "Creating engaging and effective learning activities",
  assessment: "Designing assessment strategies to measure learning",
  adaptations: "Applying educational adaptations for inclusive learning",
  finalizing: "Finalizing your complete lesson plan",
  completed: "Your lesson plan has been successfully generated",
};

export function LessonPlanProgress({ currentStep, progress }: LessonPlanProgressProps) {
  const steps: GenerationStep[] = ["analyzing", "strategies", "structure", "activities", "assessment", "adaptations", "finalizing", "completed"];
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">
              {stepLabels[currentStep]}
            </span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Description */}
        <p className="text-sm text-muted-foreground">
          {stepDescriptions[currentStep]}
        </p>

        {/* Steps Timeline */}
        <div className="space-y-3">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isCurrent
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? "✓" : index + 1}
                </div>
                <span
                  className={cn(
                    "text-sm",
                    isCompleted
                      ? "text-foreground font-medium"
                      : isCurrent
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {stepLabels[step]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
