import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AssessmentFormData, AssessmentType, QuestionType, ActivityType, AssignmentType } from "@/types/Assessment";

interface AssessmentFormProps {
  onSubmit: (data: AssessmentFormData) => void;
  isGenerating: boolean;
}

export function AssessmentForm({ onSubmit, isGenerating }: AssessmentFormProps) {
  const [formData, setFormData] = useState<AssessmentFormData>({
    assessmentType: "activity",
    grade: "",
    subject: "",
    topic: "",
    learningObjective: "",
    difficulty: "medium",
    estimatedTime: "30",
    numberOfQuestions: "10",
    questionTypes: ["multiple-choice"],
    additionalInstructions: "",
    adaptForInclusiveEducation: false,
    inclusiveEducationNeeds: [],
  });

  const grades = ["6ª Série", "7ª Série", "8ª Série", "9ª Série", "Ensino Médio"];
  const subjects = ["Matemática", "Ciências", "História", "Português", "Biologia", "Química", "Física", "Geografia"];
  const difficulties: Array<{ value: AssessmentFormData["difficulty"]; label: string }> = [
    { value: "easy", label: "Fácil" },
    { value: "medium", label: "Médio" },
    { value: "hard", label: "Difícil" },
    { value: "very-hard", label: "Muito Difícil" },
  ];
  const estimatedTimes = ["20", "30", "40", "45", "60", "90"];
  const questionCounts = ["5", "10", "15", "20", "25", "30"];
  const questionTypes: Array<{ value: QuestionType; label: string }> = [
    { value: "multiple-choice", label: "Múltipla Escolha" },
    { value: "open-ended", label: "Resposta Aberta" },
    { value: "true-false", label: "Verdadeiro ou Falso" },
    { value: "matching", label: "Associação" },
    { value: "fill-blanks", label: "Preencher Lacunas" },
    { value: "essay", label: "Redação" },
    { value: "mixed", label: "Avaliação Mista" },
  ];
  const activityTypes: Array<{ value: ActivityType; label: string }> = [
    { value: "classroom-exercise", label: "Exercício em Sala" },
    { value: "homework", label: "Tarefa de Casa" },
    { value: "group-activity", label: "Atividade em Grupo" },
    { value: "individual-activity", label: "Atividade Individual" },
    { value: "practical-activity", label: "Atividade Prática" },
  ];
  const assignmentTypes: Array<{ value: AssignmentType; label: string }> = [
    { value: "essay", label: "Redação" },
    { value: "research-project", label: "Projeto de Pesquisa" },
    { value: "presentation", label: "Apresentação" },
    { value: "seminar", label: "Seminário" },
    { value: "case-study", label: "Estudo de Caso" },
    { value: "poster", label: "Pôster" },
    { value: "portfolio", label: "Portfólio" },
    { value: "group-project", label: "Projeto em Grupo" },
    { value: "book-review", label: "Resenha de Livro" },
    { value: "experiment", label: "Experimento" },
  ];
  const inclusiveNeeds = [
    "Transtorno do Espectro Autista",
    "TDAH",
    "Dislexia",
    "Deficiência Visual",
    "Deficiência Auditiva",
    "Deficiência Intelectual",
    "Deficiência Física",
    "Outro",
  ];

  const toggleQuestionType = (type: QuestionType) => {
    setFormData((prev) => ({
      ...prev,
      questionTypes: prev.questionTypes.includes(type)
        ? prev.questionTypes.filter((t) => t !== type)
        : [...prev.questionTypes, type],
    }));
  };

  const toggleInclusiveNeed = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      inclusiveEducationNeeds: prev.inclusiveEducationNeeds.includes(need)
        ? prev.inclusiveEducationNeeds.filter((n) => n !== need)
        : [...prev.inclusiveEducationNeeds, need],
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
    formData.learningObjective &&
    formData.questionTypes.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Gerar Avaliação</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Crie atividades, testes e trabalhos em minutos usando IA.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Assessment Type */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Tipo de Avaliação</h2>
          
          <div className="flex gap-2">
            {(["activity", "test", "assignment"] as AssessmentType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, assessmentType: type })}
                className={cn(
                  "hover:cursor-pointer flex-1 px-4 py-2 rounded-xl font-medium transition-colors",
                  formData.assessmentType === type
                    ? "bg-primary text-white "
                    : "bg-muted text-foreground hover:bg-primary/20"
                )}
              >
                {type === "test" ? "Prova / Quiz" : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Section 2: Basic Information */}
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
                placeholder="ex: Fotossíntese"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Objetivo de Aprendizagem
              </label>
              <textarea
                value={formData.learningObjective}
                onChange={(e) => setFormData({ ...formData, learningObjective: e.target.value })}
                placeholder="ex: Os alunos devem entender o processo de fotossíntese e identificar suas etapas."
                rows={3}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 3: Assessment Configuration */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Configuração da Avaliação</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Dificuldade
              </label>
              <div className="flex gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, difficulty: diff.value })}
                    className={cn(
                      "hover:cursor-pointer flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                      formData.difficulty === diff.value
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-primary/20"
                    )}
                  >
                    {diff.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tempo Estimado
              </label>
              <select
                value={formData.estimatedTime}
                onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {estimatedTimes.map((time) => (
                  <option key={time} value={time}>
                    {time} minutes
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Número de Questões
              </label>
              <select
                value={formData.numberOfQuestions}
                onChange={(e) => setFormData({ ...formData, numberOfQuestions: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {questionCounts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: Question Types */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Tipos de Questão</h2>
          
          <div className="flex flex-wrap gap-2">
            {questionTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => toggleQuestionType(type.value)}
                className={cn(
                  "hover:cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  formData.questionTypes.includes(type.value)
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-primary/20"
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section 5: Conditional Options */}
        {formData.assessmentType === "activity" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Tipo de Atividade</h2>
            
            <div className="flex flex-wrap gap-2">
              {activityTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, activityType: type.value })}
                  className={cn(
                    "hover:cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    formData.activityType === type.value
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground hover:bg-primary/20"
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {formData.assessmentType === "test" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Configuração da Prova</h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="randomize"
                  checked={formData.randomizeQuestions || false}
                  onChange={(e) => setFormData({ ...formData, randomizeQuestions: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="randomize" className="text-sm text-foreground">
                  Embaralhar Questões
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="answerKey"
                  checked={formData.generateAnswerKey || false}
                  onChange={(e) => setFormData({ ...formData, generateAnswerKey: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="answerKey" className="text-sm text-foreground">
                  Gerar Gabarito
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="teacherVersion"
                  checked={formData.generateTeacherVersion || false}
                  onChange={(e) => setFormData({ ...formData, generateTeacherVersion: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="teacherVersion" className="text-sm text-foreground">
                  Gerar Versão do Professor
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="studentVersion"
                  checked={formData.generateStudentVersion || false}
                  onChange={(e) => setFormData({ ...formData, generateStudentVersion: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="studentVersion" className="text-sm text-foreground">
                  Gerar Versão do Aluno
                </label>
              </div>
            </div>

            {/* Subject-specific options */}
            {(formData.subject === "Portuguese" || formData.subject === "History") && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground">Opções de Língua e História</h3>
                {formData.subject === "Portuguese" && (
                  <>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="reading"
                        checked={formData.includeReadingComprehension || false}
                        onChange={(e) => setFormData({ ...formData, includeReadingComprehension: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor="reading" className="text-sm text-foreground">
                        Incluir Compreensão de Leitura
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="grammar"
                        checked={formData.includeGrammarQuestions || false}
                        onChange={(e) => setFormData({ ...formData, includeGrammarQuestions: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor="grammar" className="text-sm text-foreground">
                        Incluir Questões de Gramática
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="writing"
                        checked={formData.includeWritingPrompt || false}
                        onChange={(e) => setFormData({ ...formData, includeWritingPrompt: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor="writing" className="text-sm text-foreground">
                        Incluir Proposta de Redação
                      </label>
                    </div>
                  </>
                )}
                {formData.subject === "History" && (
                  <>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="source"
                        checked={formData.includeSourceAnalysis || false}
                        onChange={(e) => setFormData({ ...formData, includeSourceAnalysis: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor="source" className="text-sm text-foreground">
                        Incluir Análise de Fontes
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="timeline"
                        checked={formData.includeTimelineQuestions || false}
                        onChange={(e) => setFormData({ ...formData, includeTimelineQuestions: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor="timeline" className="text-sm text-foreground">
                        Incluir Questões de Linha do Tempo
                      </label>
                    </div>
                  </>
                )}
              </div>
            )}

            {(formData.subject === "Science" || formData.subject === "Biology" || formData.subject === "Chemistry" || formData.subject === "Physics") && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground">Opções de Ciências</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="diagrams"
                    checked={formData.includeDiagrams || false}
                    onChange={(e) => setFormData({ ...formData, includeDiagrams: e.target.checked })}
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="diagrams" className="text-sm text-foreground">
                    Incluir Diagramas
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="interpretation"
                    checked={formData.includeInterpretationQuestions || false}
                    onChange={(e) => setFormData({ ...formData, includeInterpretationQuestions: e.target.checked })}
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="interpretation" className="text-sm text-foreground">
                    Incluir Questões de Interpretação
                  </label>
                </div>
              </div>
            )}

            {formData.subject === "Mathematics" && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground">Opções de Matemática</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="problemSolving"
                    checked={formData.includeProblemSolving || false}
                    onChange={(e) => setFormData({ ...formData, includeProblemSolving: e.target.checked })}
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="problemSolving" className="text-sm text-foreground">
                    Incluir Resolução de Problemas
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="stepByStep"
                    checked={formData.includeStepByStepExercises || false}
                    onChange={(e) => setFormData({ ...formData, includeStepByStepExercises: e.target.checked })}
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="stepByStep" className="text-sm text-foreground">
                    Incluir Exercícios Passo a Passo
                  </label>
                </div>
              </div>
            )}
         </div>
        )}

        {formData.assessmentType === "assignment" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Configuração do Trabalho</h2>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tipo de Trabalho
              </label>
              <div className="flex flex-wrap gap-2">
                {assignmentTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, assignmentType: type.value })}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      formData.assignmentType === type.value
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    )}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="presentation"
                  checked={formData.presentationRequired || false}
                  onChange={(e) => setFormData({ ...formData, presentationRequired: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="presentation" className="text-sm text-foreground">
                  Apresentação Obrigatória
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="rubric"
                  checked={formData.rubricIncluded || false}
                  onChange={(e) => setFormData({ ...formData, rubricIncluded: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="rubric" className="text-sm text-foreground">
                  Rubrica Incluída
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Critérios de Avaliação
              </label>
              <textarea
                value={formData.evaluationCriteria || ""}
                onChange={(e) => setFormData({ ...formData, evaluationCriteria: e.target.value })}
                placeholder="ex: Precisão do conteúdo, criatividade, habilidades de apresentação"
                rows={2}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Prazo de Entrega
              </label>
              <input
                type="date"
                value={formData.submissionDeadline || ""}
                onChange={(e) => setFormData({ ...formData, submissionDeadline: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        )}

        {/* Section 6: Additional Instructions */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Instruções Adicionais</h2>
          
          <textarea
            value={formData.additionalInstructions}
            onChange={(e) => setFormData({ ...formData, additionalInstructions: e.target.value })}
            placeholder="ex: Focar no pensamento crítico. Evitar perguntas repetitivas. Incluir exemplos da vida real."
            rows={4}
            className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Section 7: Accessibility */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Acessibilidade</h2>
          
          <div className="flex items-center gap-3">
            <label className="text-sm text-foreground">
              Adaptar para Educação Inclusiva
            </label>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, adaptForInclusiveEducation: !formData.adaptForInclusiveEducation })}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                formData.adaptForInclusiveEducation ? "bg-primary" : "bg-muted"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  formData.adaptForInclusiveEducation ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          {formData.adaptForInclusiveEducation && (
            <>
              <div className="flex flex-wrap gap-2">
                {inclusiveNeeds.map((need) => (
                  <button
                    key={need}
                    type="button"
                    onClick={() => toggleInclusiveNeed(need)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      formData.inclusiveEducationNeeds.includes(need)
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    )}
                  >
                    {need}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                A IA adaptará a redação e a complexidade da atividade para aprendizagem inclusiva.
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
          {isGenerating ? "Gerando..." : "Gerar Avaliação"}
        </Button>
      </form>
    </div>
  );
}
