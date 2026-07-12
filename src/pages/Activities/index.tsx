import { useState } from "react";
import { AssessmentForm } from "@/components/assessments/AssessmentForm";
import { AssessmentPreview } from "@/components/assessments/AssessmentPreview";
import { AssessmentProgress } from "@/components/assessments/AssessmentProgress";
import { AssessmentHistory } from "@/components/assessments/AssessmentHistory";
import { useAssessmentGeneration } from "@/hooks/useAssessmentGeneration";
import { assessmentPDFExportService } from "@/services/export/assessment-pdf-export.service";
import { assessmentDOCXExportService } from "@/services/export/assessment-docx-export.service";
import type { AssessmentFormData } from "@/types/Assessment";

export default function Activities() {
  const [showHistory, setShowHistory] = useState(false);
  
  const {
    currentStep,
    progress,
    isGenerating,
    generatedAssessment,
    generateAssessment,
    refineAssessment,
  } = useAssessmentGeneration();

  const handleFormSubmit = async (data: AssessmentFormData) => {
    await generateAssessment(data);
  };

  const handleRefine = async (action: string) => {
    await refineAssessment(action);
  };

  const handleExportPDF = () => {
    if (generatedAssessment) {
      assessmentPDFExportService.exportAssessment(generatedAssessment);
    }
  };

  const handleExportDOCX = () => {
    if (generatedAssessment) {
      assessmentDOCXExportService.exportAssessment(generatedAssessment);
    }
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  const handleSelectHistory = (id: string) => {
    console.log("Selected assessment:", id);
    setShowHistory(false);
  };

  if (isGenerating) {
    return (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Generating Assessment</h1>
        <AssessmentProgress currentStep={currentStep} progress={progress} />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Configuration Panel */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <AssessmentForm onSubmit={handleFormSubmit} isGenerating={isGenerating} />
        </div>

        {/* Right Column - Preview Panel */}
        <div>
          <AssessmentPreview
            assessment={generatedAssessment}
            onRefine={handleRefine}
            onExportPDF={handleExportPDF}
            onExportDOCX={handleExportDOCX}
            onShowHistory={handleShowHistory}
          />
        </div>
      </div>

      {/* History Modal */}
      <AssessmentHistory
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        onSelect={handleSelectHistory}
      />
    </>
  );
}
