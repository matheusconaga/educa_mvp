import { useState } from "react";
import { Download, Sparkles, Edit2, Check, Trash2, Copy, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GeneratedAssessment, Question } from "@/types/Assessment";

interface AssessmentPreviewProps {
  assessment: GeneratedAssessment | null;
  onRefine: (action: string) => void;
  onExportPDF: () => void;
  onExportDOCX: () => void;
  onShowHistory: () => void;
}

export function AssessmentPreview({
  assessment,
  onRefine,
  onExportPDF,
  onExportDOCX,
  onShowHistory,
}: AssessmentPreviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState<GeneratedAssessment | null>(null);

  const refineOptions = [
    "Tornar mais fácil",
    "Aumentar dificuldade",
    "Gerar mais questões",
    "Reduzir número de questões",
    "Melhorar redação",
    "Gerar versão alternativa",
    "Gerar atividade de reforço",
    "Gerar versão desafio",
  ];

  const handleEdit = () => {
    if (isEditing && editableContent) {
      setEditableContent(null);
    } else {
      setEditableContent(assessment);
    }
    setIsEditing(!isEditing);
  };

  const handleContentChange = (field: keyof GeneratedAssessment, value: string) => {
    if (!editableContent) return;
    setEditableContent({ ...editableContent, [field]: value });
  };

  const handleQuestionChange = (questionId: string, field: keyof Question, value: string) => {
    if (!editableContent) return;
    setEditableContent({
      ...editableContent,
      questions: editableContent.questions.map((q) =>
        q.id === questionId ? { ...q, [field]: value } : q
      ),
    });
  };

  const handleDeleteQuestion = (questionId: string) => {
    if (!editableContent) return;
    setEditableContent({
      ...editableContent,
      questions: editableContent.questions.filter((q) => q.id !== questionId),
    });
  };

  const handleDuplicateQuestion = (question: Question) => {
    if (!editableContent) return;
    const newQuestion = { ...question, id: `${question.id}-copy` };
    const questionIndex = editableContent.questions.findIndex((q) => q.id === question.id);
    const newQuestions = [...editableContent.questions];
    newQuestions.splice(questionIndex + 1, 0, newQuestion);
    setEditableContent({ ...editableContent, questions: newQuestions });
  };

  const handleAddQuestion = () => {
    if (!editableContent) return;
    const newQuestion: Question = {
      id: `q-${Date.now()}`,
      type: "multiple-choice",
      text: "New question",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option A",
      points: 1,
    };
    setEditableContent({
      ...editableContent,
      questions: [...editableContent.questions, newQuestion],
    });
  };

  if (!assessment) {
    return (
      <div className="rounded-3xl border border-border bg-card p-12 shadow-md h-full flex justify-center">
        <div className="text-center">
          <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Nenhuma Avaliação Ainda</h3>
          <p className="text-sm text-muted-foreground">
            Preencha o formulário à esquerda e clique em "Gerar Avaliação" para criar sua avaliação alimentada por IA.
          </p>
        </div>
      </div>
    );
  }

  const content = isEditing ? editableContent : assessment;

  return (
    <div className="space-y-4">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Visualização da Avaliação</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onShowHistory}>
            <History className="h-4 w-4 mr-2" />
            Histórico
          </Button>
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

      {/* Assessment Content */}
      <div className="rounded-3xl border border-border bg-card p-8 shadow-md space-y-6">
        {/* Header */}
        <div className="border-b border-border pb-6">
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
          
          <div className="grid grid-cols-4 gap-4 mt-4 text-sm">
            <div>
              <span className="text-muted-foreground">Disciplina:</span>
              <span className="ml-2 font-medium text-foreground">{content?.subject}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Série:</span>
              <span className="ml-2 font-medium text-foreground">{content?.grade}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Tempo:</span>
              <span className="ml-2 font-medium text-foreground">{content?.estimatedTime} min</span>
            </div>
            <div>
              <span className="text-muted-foreground">Dificuldade:</span>
              <span className="ml-2 font-medium text-foreground capitalize">{content?.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Instruções</h3>
          {isEditing ? (
            <textarea
              value={content?.instructions || ""}
              onChange={(e) => handleContentChange("instructions", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          ) : (
            <p className="text-sm text-foreground">{content?.instructions}</p>
          )}
        </div>

        {/* Questions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Questões</h3>
            {isEditing && (
              <Button variant="outline" size="sm" onClick={handleAddQuestion}>
                + Adicionar Questão
              </Button>
            )}
          </div>
          
          {content?.questions.map((question, index) => (
            <div
              key={question.id}
              className="p-4 rounded-xl border border-border bg-muted/30 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Q{index + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      {question.type}
                    </span>
                    {question.points && (
                      <span className="text-xs text-muted-foreground">
                        ({question.points} pts)
                      </span>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <textarea
                      value={question.text}
                      onChange={(e) => handleQuestionChange(question.id, "text", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                    />
                  ) : (
                    <p className="text-sm text-foreground">{question.text}</p>
                  )}

                  {question.options && question.options.length > 0 && (
                    <div className="mt-3 space-y-1">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">{String.fromCharCode(65 + optIndex)}.</span>
                          <span className="text-foreground">{option}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {question.correctAnswer && (
                    <div className="mt-3 text-sm">
                      <span className="text-muted-foreground">Resposta Correta: </span>
                      <span className="text-foreground font-medium">{question.correctAnswer}</span>
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDuplicateQuestion(question)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Answer Key */}
        {content?.answerKey && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Gabarito</h3>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-foreground whitespace-pre-wrap">{content.answerKey}</p>
            </div>
          </div>
        )}

        {/* Evaluation Rubric */}
        {content?.evaluationRubric && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Rubrica de Avaliação</h3>
            <div className="p-4 rounded-xl bg-muted/30">
              <p className="text-sm text-foreground whitespace-pre-wrap">{content.evaluationRubric}</p>
            </div>
          </div>
        )}

        {/* Teacher Notes */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Notas do Professor</h3>
          {isEditing ? (
            <textarea
              value={content?.teacherNotes || ""}
              onChange={(e) => handleContentChange("teacherNotes", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          ) : (
            <p className="text-sm text-foreground">{content?.teacherNotes}</p>
          )}
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
