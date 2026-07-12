import { cn } from "@/lib/utils";

type GenerationStep = 
  | "analyzing" 
  | "strategy" 
  | "generating" 
  | "balancing" 
  | "answerKey" 
  | "finalizing" 
  | "completed";

interface AssessmentProgressProps {
  currentStep: GenerationStep;
  progress: number;
}

const stepLabels: Record<GenerationStep, string> = {
  analyzing: "Analyzing curriculum...",
  strategy: "Selecting assessment strategy...",
  generating: "Generating questions...",
  balancing: "Balancing difficulty...",
  answerKey: "Preparing answer key...",
  finalizing: "Finalizing document...",
  completed: "Completed",
};

const stepDescriptions: Record<GenerationStep, string> = {
  analyzing: "Analyzing your curriculum requirements and learning objectives",
  strategy: "Selecting the best assessment strategy for your needs",
  generating: "Creating questions tailored to your specifications",
  balancing: "Balancing question difficulty and distribution",
  answerKey: "Preparing comprehensive answer key and rubrics",
  finalizing: "Finalizing your complete assessment document",
  completed: "Your assessment has been successfully generated",
};

export function AssessmentProgress({ currentStep, progress }: AssessmentProgressProps) {
  const steps: GenerationStep[] = ["analyzing", "strategy", "generating", "balancing", "answerKey", "finalizing", "completed"];
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
