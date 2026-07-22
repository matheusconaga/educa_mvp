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
  analyzing: "Analisando informações da turma...",
  strategies: "Selecionando estratégias de ensino...",
  structure: "Gerando estrutura da aula...",
  activities: "Criando atividades...",
  assessment: "Construindo avaliação...",
  adaptations: "Aplicando adaptações educacionais...",
  finalizing: "Finalizando plano de aula...",
  completed: "Concluído",
};

const stepDescriptions: Record<GenerationStep, string> = {
  analyzing: "Analisando seus requisitos e objetivos da aula",
  strategies: "Selecionando as melhores metodologias de ensino para sua turma",
  structure: "Construindo a estrutura geral e fluxo da aula",
  activities: "Criando atividades de aprendizagem envolventes e eficazes",
  assessment: "Projetando estratégias de avaliação para medir a aprendizagem",
  adaptations: "Aplicando adaptações educacionais para aprendizagem inclusiva",
  finalizing: "Finalizando seu plano de aula completo",
  completed: "Seu plano de aula foi gerado com sucesso",
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
