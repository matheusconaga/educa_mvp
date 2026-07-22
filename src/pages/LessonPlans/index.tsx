import { LessonPlanForm } from "@/components/lessonplans/LessonPlanForm";
import { LessonPlanPreview } from "@/components/lessonplans/LessonPlanPreview";
import { LessonPlanProgress } from "@/components/lessonplans/LessonPlanProgress";
import { useLessonPlanGeneration } from "@/hooks/useLessonPlanGeneration";
import type { LessonPlanFormData } from "@/types/LessonPlan";

export default function LessonPlans() {
  const {
    currentStep,
    progress,
    isGenerating,
    generatedPlan,
    generateLessonPlan,
    refineLessonPlan,
  } = useLessonPlanGeneration();

  const handleFormSubmit = async (data: LessonPlanFormData) => {
    await generateLessonPlan(data);
  };

  const handleRefine = async (action: string) => {
    await refineLessonPlan(action);
  };

  const handleExportPDF = () => {
    console.log("Exporting to PDF (mock)");
  };

  const handleExportDOCX = () => {
    console.log("Exporting to DOCX (mock)");
  };

  if (isGenerating) {
    return (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Gerando Plano de Aula</h1>
        <LessonPlanProgress currentStep={currentStep} progress={progress} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column - Configuration Panel */}
      <div className="lg:sticky lg:top-6 lg:self-start">
        <LessonPlanForm onSubmit={handleFormSubmit} isGenerating={isGenerating} />
      </div>

      {/* Right Column - Preview Panel */}
      <div>
        <LessonPlanPreview
          lessonPlan={generatedPlan}
          onRefine={handleRefine}
          onExportPDF={handleExportPDF}
          onExportDOCX={handleExportDOCX}
        />
      </div>
    </div>
  );
}
