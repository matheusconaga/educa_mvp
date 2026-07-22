import { useState } from "react";
import { Download, Sparkles, Edit2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GeneratedLessonPlan } from "@/types/LessonPlan";

interface LessonPlanPreviewProps {
  lessonPlan: GeneratedLessonPlan | null;
  onRefine: (action: string) => void;
  onExportPDF: () => void;
  onExportDOCX: () => void;
}

export function LessonPlanPreview({
  lessonPlan,
  onRefine,
  onExportPDF,
  onExportDOCX,
}: LessonPlanPreviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState<GeneratedLessonPlan | null>(null);

  const refineOptions = [
    "Tornar mais envolvente",
    "Simplificar linguagem",
    "Aumentar dificuldade",
    "Adaptar para alunos mais jovens",
    "Gerar mais atividades",
    "Melhorar avaliação",
  ];

  const handleEdit = () => {
    if (isEditing && editableContent) {
      setEditableContent(null);
    } else {
      setEditableContent(lessonPlan);
    }
    setIsEditing(!isEditing);
  };

  const handleContentChange = (
    section: keyof GeneratedLessonPlan | keyof GeneratedLessonPlan["lessonDevelopment"],
    value: string | string[]
  ) => {
    if (!editableContent) return;

    if (section === "introduction" || section === "practice" || section === "assessment" || section === "homework") {
      setEditableContent({
        ...editableContent,
        lessonDevelopment: {
          ...editableContent.lessonDevelopment,
          [section]: value as string,
        },
      });
    } else if (section === "mainActivities") {
      setEditableContent({
        ...editableContent,
        lessonDevelopment: {
          ...editableContent.lessonDevelopment,
          mainActivities: value as string[],
        },
      });
    } else {
      setEditableContent({
        ...editableContent,
        [section]: value,
      } as GeneratedLessonPlan);
    }
  };

  if (!lessonPlan) {
    return (
      <div className="rounded-3xl border border-border bg-card p-12 shadow-md h-full flex justify-center">
        <div className="text-center">
          <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Nenhum Plano de Aula Ainda</h3>
          <p className="text-sm text-muted-foreground">
            Preencha o formulário à esquerda e clique em "Gerar Plano de Aula" para criar seu plano de aula alimentado por IA.
          </p>
        </div>
      </div>
    );
  }

  const content = isEditing ? editableContent : lessonPlan;

  return (
    <div className="space-y-4">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Visualização do Plano de Aula</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleEdit}>
            {isEditing ? <Check className="h-4 w-4 mr-2" /> : <Edit2 className="h-4 w-4 mr-2" />}
            {isEditing ? "Salvar" : "Editar"}
          </Button>
          <Button variant="outline" size="sm" onClick={onExportPDF}>
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
          <Button variant="outline" size="sm" onClick={onExportDOCX}>
            <Download className="h-4 w-4 mr-2" />
            DOCX
          </Button>
        </div>
      </div>

      {/* AI Refine Actions */}
      <div className="rounded-2xl border border-border bg-primary/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Refinar com IA</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {refineOptions.map((option) => (
            <button
              key={option}
              onClick={() => onRefine(option)}
              className="px-3 py-1.5 rounded-full bg-card text-sm text-foreground hover:bg-primary/10 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson Plan Content */}
      <div className="rounded-3xl border border-border bg-card p-8 shadow-md space-y-6">
        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            value={content?.title || ""}
            onChange={(e) => handleContentChange("title", e.target.value)}
            className="w-full text-3xl font-bold text-foreground bg-transparent border-b border-border focus:outline-none focus:border-primary pb-2"
          />
        ) : (
          <h1 className="text-3xl font-bold text-foreground">{content?.title}</h1>
        )}

        {/* Metadata */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Série:</span>
            <span className="ml-2 font-medium text-foreground">{content?.grade}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Disciplina:</span>
            <span className="ml-2 font-medium text-foreground">{content?.subject}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Duração:</span>
            <span className="ml-2 font-medium text-foreground">{content?.duration} minutos</span>
          </div>
        </div>

        {/* Learning Objectives */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Objetivos de Aprendizagem</h3>
          {isEditing ? (
            <textarea
              value={content?.learningObjectives || ""}
              onChange={(e) => handleContentChange("learningObjectives", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          ) : (
            <p className="text-sm text-foreground">{content?.learningObjectives}</p>
          )}
        </div>

        {/* Required Materials */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Materiais Necessários</h3>
          <div className="flex flex-wrap gap-2">
            {content?.requiredMaterials.map((material, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Teaching Methodology */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Metodologia de Ensino</h3>
          <div className="flex flex-wrap gap-2">
            {content?.teachingMethodology.map((method, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-muted text-foreground text-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Lesson Development */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Desenvolvimento da Aula</h3>

          <div>
            <h4 className="text-md font-medium text-foreground mb-2">Introdução</h4>
            {isEditing ? (
              <textarea
                value={content?.lessonDevelopment.introduction || ""}
                onChange={(e) => handleContentChange("introduction", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            ) : (
              <p className="text-sm text-foreground">{content?.lessonDevelopment.introduction}</p>
            )}
          </div>

          <div>
            <h4 className="text-md font-medium text-foreground mb-2">Atividades Principais</h4>
            <ul className="space-y-2">
              {content?.lessonDevelopment.mainActivities.map((activity, index) => (
                <li key={index} className="text-sm text-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-md font-medium text-foreground mb-2">Prática</h4>
            {isEditing ? (
              <textarea
                value={content?.lessonDevelopment.practice || ""}
                onChange={(e) => handleContentChange("practice", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            ) : (
              <p className="text-sm text-foreground">{content?.lessonDevelopment.practice}</p>
            )}
          </div>

          <div>
            <h4 className="text-md font-medium text-foreground mb-2">Avaliação</h4>
            {isEditing ? (
              <textarea
                value={content?.lessonDevelopment.assessment || ""}
                onChange={(e) => handleContentChange("assessment", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            ) : (
              <p className="text-sm text-foreground">{content?.lessonDevelopment.assessment}</p>
            )}
          </div>

          <div>
            <h4 className="text-md font-medium text-foreground mb-2">Tarefa de Casa</h4>
            {isEditing ? (
              <textarea
                value={content?.lessonDevelopment.homework || ""}
                onChange={(e) => handleContentChange("homework", e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            ) : (
              <p className="text-sm text-foreground">{content?.lessonDevelopment.homework}</p>
            )}
          </div>
        </div>

        {/* Adaptations */}
        {content?.adaptations && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Adaptações</h3>
            <p className="text-sm text-foreground">{content.adaptations}</p>
          </div>
        )}

        {/* Teacher Notes */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Notas do Professor</h3>
          <p className="text-sm text-foreground">{content?.teacherNotes}</p>
        </div>

        {/* AI Recommendations */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Recomendações da IA</h3>
          <div className="space-y-2">
            {content?.aiRecommendations.map((recommendation, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-primary/5 border border-primary/10"
              >
                <p className="text-sm text-foreground">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
