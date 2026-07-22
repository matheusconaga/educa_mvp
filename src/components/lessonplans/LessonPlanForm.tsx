import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LessonPlanFormData } from "@/types/LessonPlan";

interface LessonPlanFormProps {
  onSubmit: (data: LessonPlanFormData) => void;
  isGenerating: boolean;
}

export function LessonPlanForm({ onSubmit, isGenerating }: LessonPlanFormProps) {
  const [formData, setFormData] = useState<LessonPlanFormData>({
    grade: "",
    subject: "",
    topic: "",
    learningObjectives: "",
    duration: "45",
    methodologies: [],
    resources: [],
    hasSpecialNeeds: false,
    specialNeeds: [],
  });

  const grades = ["6ª Série", "7ª Série", "8ª Série", "9ª Série", "Ensino Médio"];
  const subjects = [
    "Matemática",
    "Ciências",
    "História",
    "Português",
    "Geografia",
    "Biologia",
    "Química",
    "Física",
  ];
  const durations = ["40", "45", "50", "60", "90", "120"];
  const methodologies = [
    "Instrução Direta",
    "Aprendizagem Baseada em Projetos",
    "Sala de Aula Invertida",
    "Método Socrático",
    "Gamificação",
    "Aprendizagem Colaborativa",
    "Aprendizagem Baseada em Investigação",
  ];
  const resources = [
    "Quadro Branco",
    "Marcadores",
    "Projetor",
    "Slides",
    "Fichas Impressas",
    "Caderno",
    "Computador",
    "Internet",
    "Calculadora",
    "Jogos Educativos",
    "Vídeos",
    "Livros",
    "Laboratório",
    "Tablets",
  ];
  const specialNeeds = [
    "Transtorno do Espectro Autista (TEA)",
    "TDAH",
    "Deficiência Auditiva",
    "Deficiência Visual",
    "Deficiência Intelectual",
    "Dislexia",
    "Deficiência Física",
    "Outro",
  ];

  const toggleMethodology = (method: string) => {
    setFormData((prev) => ({
      ...prev,
      methodologies: prev.methodologies.includes(method)
        ? prev.methodologies.filter((m) => m !== method)
        : [...prev.methodologies, method],
    }));
  };

  const toggleResource = (resource: string) => {
    setFormData((prev) => ({
      ...prev,
      resources: prev.resources.includes(resource)
        ? prev.resources.filter((r) => r !== resource)
        : [...prev.resources, resource],
    }));
  };

  const toggleSpecialNeed = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      specialNeeds: prev.specialNeeds.includes(need)
        ? prev.specialNeeds.filter((n) => n !== need)
        : [...prev.specialNeeds, need],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid =
    formData.grade &&
    formData.subject &&
    formData.topic &&
    formData.learningObjectives &&
    formData.methodologies.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Gerar Plano de Aula</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Descreva sua aula e deixe a IA construir um plano de aula completo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Basic Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Informações Básicas</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Turma / Série
              </label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione a série</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Disciplina
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione a disciplina</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tópico
              </label>
              <input
                type="text"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="ex: Introdução a Frações"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Objetivos de Aprendizagem
              </label>
              <textarea
                value={formData.learningObjectives}
                onChange={(e) => setFormData({ ...formData, learningObjectives: e.target.value })}
                placeholder="ex: Os alunos devem entender frações e resolver exercícios básicos."
                rows={3}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 2: Lesson Configuration */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Configuração da Aula</h2>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Duração da Aula
            </label>
            <select
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration} minutos
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Metodologia de Ensino
            </label>
            <div className="flex flex-wrap gap-2">
              {methodologies.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => toggleMethodology(method)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    formData.methodologies.includes(method)
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Teaching Resources */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Recursos de Ensino</h2>
          
          <div className="flex flex-wrap gap-2">
            {resources.map((resource) => (
              <button
                key={resource}
                type="button"
                onClick={() => toggleResource(resource)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  formData.resources.includes(resource)
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
              >
                {resource}
              </button>
            ))}
          </div>
        </div>

        {/* Section 4: Special Educational Needs */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Necessidades Educacionais Especiais</h2>
          
          <div className="flex items-center gap-3">
            <label className="text-sm text-foreground">
              Sua turma inclui alunos que necessitam de adaptações educacionais?
            </label>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, hasSpecialNeeds: !formData.hasSpecialNeeds })}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                formData.hasSpecialNeeds ? "bg-primary" : "bg-muted"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  formData.hasSpecialNeeds ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          {formData.hasSpecialNeeds && (
            <>
              <div className="flex flex-wrap gap-2">
                {specialNeeds.map((need) => (
                  <button
                    key={need}
                    type="button"
                    onClick={() => toggleSpecialNeed(need)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      formData.specialNeeds.includes(need)
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    )}
                  >
                    {need}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                A IA adaptará o plano de aula para promover uma experiência de aprendizagem inclusiva.
              </p>
            </>
          )}
        </div>

        {/* Generate Button */}
        <Button
          type="submit"
          variant="primary"
          className="w-full py-3 text-lg"
          disabled={!isFormValid || isGenerating}
        >
          {isGenerating ? "Gerando..." : "Gerar Plano de Aula"}
        </Button>
      </form>
    </div>
  );
}
