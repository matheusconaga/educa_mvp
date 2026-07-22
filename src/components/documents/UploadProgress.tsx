import { cn } from "@/lib/utils";

export type ProcessingStep = "uploading" | "validating" | "reading" | "extracting" | "mapping" | "generating" | "completed";

interface UploadProgressProps {
  currentStep: ProcessingStep;
  progress: number;
}

const stepLabels: Record<ProcessingStep, string> = {
  uploading: "Enviando...",
  validating: "Validando documento...",
  reading: "Lendo conteúdo...",
  extracting: "Extraindo tópicos educacionais...",
  mapping: "Mapeando competências...",
  generating: "Gerando insights da IA...",
  completed: "Concluído",
};

const stepDescriptions: Record<ProcessingStep, string> = {
  uploading: "Enviando seu documento para nossos servidores seguros",
  validating: "Validando formato e estrutura do arquivo",
  reading: "Analisando estrutura e conteúdo do documento",
  extracting: "Identificando tópicos principais e objetivos de aprendizagem",
  mapping: "Mapeando para competências educacionais",
  generating: "Criando insights educacionais alimentados por IA",
  completed: "Seu documento foi analisado com sucesso",
};

export function UploadProgress({ currentStep, progress }: UploadProgressProps) {
  const steps: ProcessingStep[] = ["uploading", "validating", "reading", "extracting", "mapping", "generating", "completed"];
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
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                currentStep === "completed" ? "bg-green-500" : "bg-primary"
              )}
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
