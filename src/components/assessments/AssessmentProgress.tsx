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
  analyzing: "Analisando currículo...",
  strategy: "Selecionando estratégia de avaliação...",
  generating: "Gerando questões...",
  balancing: "Equilibrando dificuldade...",
  answerKey: "Preparando gabarito...",
  finalizing: "Finalizando documento...",
  completed: "Concluído",
};

const stepDescriptions: Record<GenerationStep, string> = {
  analyzing: "Analisando seus requisitos de currículo e objetivos de aprendizagem",
  strategy: "Selecionando a melhor estratégia de avaliação para suas necessidades",
  generating: "Criando questões personalizadas para suas especificações",
  balancing: "Equilibrando dificuldade e distribuição das questões",
  answerKey: "Preparando gabarito completo e rubricas",
  finalizing: "Finalizando seu documento de avaliação completo",
  completed: "Sua avaliação foi gerada com sucesso",
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
