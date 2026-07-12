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

  const grades = ["6th Grade", "7th Grade", "8th Grade", "9th Grade", "High School"];
  const subjects = ["Mathematics", "Science", "History", "Portuguese", "Biology", "Chemistry", "Physics", "Geography"];
  const difficulties: Array<{ value: AssessmentFormData["difficulty"]; label: string }> = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
    { value: "very-hard", label: "Very Hard" },
  ];
  const estimatedTimes = ["20", "30", "40", "45", "60", "90"];
  const questionCounts = ["5", "10", "15", "20", "25", "30"];
  const questionTypes: Array<{ value: QuestionType; label: string }> = [
    { value: "multiple-choice", label: "Multiple Choice" },
    { value: "open-ended", label: "Open-ended" },
    { value: "true-false", label: "True or False" },
    { value: "matching", label: "Matching" },
    { value: "fill-blanks", label: "Fill in the Blanks" },
    { value: "essay", label: "Essay" },
    { value: "mixed", label: "Mixed Assessment" },
  ];
  const activityTypes: Array<{ value: ActivityType; label: string }> = [
    { value: "classroom-exercise", label: "Classroom Exercise" },
    { value: "homework", label: "Homework" },
    { value: "group-activity", label: "Group Activity" },
    { value: "individual-activity", label: "Individual Activity" },
    { value: "practical-activity", label: "Practical Activity" },
  ];
  const assignmentTypes: Array<{ value: AssignmentType; label: string }> = [
    { value: "essay", label: "Essay" },
    { value: "research-project", label: "Research Project" },
    { value: "presentation", label: "Presentation" },
    { value: "seminar", label: "Seminar" },
    { value: "case-study", label: "Case Study" },
    { value: "poster", label: "Poster" },
    { value: "portfolio", label: "Portfolio" },
    { value: "group-project", label: "Group Project" },
    { value: "book-review", label: "Book Review" },
    { value: "experiment", label: "Experiment" },
  ];
  const inclusiveNeeds = [
    "Autism Spectrum Disorder",
    "ADHD",
    "Dyslexia",
    "Visual Impairment",
    "Hearing Impairment",
    "Intellectual Disability",
    "Physical Disability",
    "Other",
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
        <h1 className="text-2xl font-bold text-foreground">Generate Assessment</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Create activities, tests and assignments in minutes using AI.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Assessment Type */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Assessment Type</h2>
          
          <div className="flex gap-2">
            {(["activity", "test", "assignment"] as AssessmentType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, assessmentType: type })}
                className={cn(
                  "flex-1 px-4 py-2 rounded-xl font-medium transition-colors",
                  formData.assessmentType === type
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
              >
                {type === "test" ? "Test / Quiz" : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Section 2: Basic Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Class / Grade
              </label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select grade</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Topic
              </label>
              <input
                type="text"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="e.g., Photosynthesis"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Learning Objective
              </label>
              <textarea
                value={formData.learningObjective}
                onChange={(e) => setFormData({ ...formData, learningObjective: e.target.value })}
                placeholder="e.g., Students should understand the photosynthesis process and identify its stages."
                rows={3}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 3: Assessment Configuration */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Assessment Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Difficulty
              </label>
              <div className="flex gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, difficulty: diff.value })}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                      formData.difficulty === diff.value
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    )}
                  >
                    {diff.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Estimated Time
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
                Number of Questions
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
          <h2 className="text-lg font-semibold text-foreground">Question Types</h2>
          
          <div className="flex flex-wrap gap-2">
            {questionTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => toggleQuestionType(type.value)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  formData.questionTypes.includes(type.value)
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
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
            <h2 className="text-lg font-semibold text-foreground">Activity Type</h2>
            
            <div className="flex flex-wrap gap-2">
              {activityTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, activityType: type.value })}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    formData.activityType === type.value
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
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
            <h2 className="text-lg font-semibold text-foreground">Test Configuration</h2>
            
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
                  Randomize Questions
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
                  Generate Answer Key
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
                  Generate Teacher Version
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
                  Generate Student Version
                </label>
              </div>
            </div>

            {/* Subject-specific options */}
            {(formData.subject === "Portuguese" || formData.subject === "History") && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground">Language & History Options</h3>
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
                        Include Reading Comprehension
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
                        Include Grammar Questions
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
                        Include Writing Prompt
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
                        Include Source Analysis
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
                        Include Timeline Questions
                      </label>
                    </div>
                  </>
                )}
              </div>
            )}

            {(formData.subject === "Science" || formData.subject === "Biology" || formData.subject === "Chemistry" || formData.subject === "Physics") && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground">Science Options</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="diagrams"
                    checked={formData.includeDiagrams || false}
                    onChange={(e) => setFormData({ ...formData, includeDiagrams: e.target.checked })}
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="diagrams" className="text-sm text-foreground">
                    Include Diagrams
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
                    Include Interpretation Questions
                  </label>
                </div>
              </div>
            )}

            {formData.subject === "Mathematics" && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground">Mathematics Options</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="problemSolving"
                    checked={formData.includeProblemSolving || false}
                    onChange={(e) => setFormData({ ...formData, includeProblemSolving: e.target.checked })}
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="problemSolving" className="text-sm text-foreground">
                    Include Problem Solving
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
                    Include Step-by-Step Exercises
                  </label>
                </div>
              </div>
            )}
         </div>
        )}

        {formData.assessmentType === "assignment" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Assignment Configuration</h2>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Assignment Type
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
                  Presentation Required
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
                  Rubric Included
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Evaluation Criteria
              </label>
              <textarea
                value={formData.evaluationCriteria || ""}
                onChange={(e) => setFormData({ ...formData, evaluationCriteria: e.target.value })}
                placeholder="e.g., Content accuracy, creativity, presentation skills"
                rows={2}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Submission Deadline
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
          <h2 className="text-lg font-semibold text-foreground">Additional Instructions</h2>
          
          <textarea
            value={formData.additionalInstructions}
            onChange={(e) => setFormData({ ...formData, additionalInstructions: e.target.value })}
            placeholder="e.g., Focus on critical thinking. Avoid repetitive questions. Include real-life examples."
            rows={4}
            className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Section 7: Accessibility */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Accessibility</h2>
          
          <div className="flex items-center gap-3">
            <label className="text-sm text-foreground">
              Adapt for Inclusive Education
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
                The AI will adapt wording and activity complexity for inclusive learning.
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
          {isGenerating ? "Generating..." : "Generate Assessment"}
        </Button>
      </form>
    </div>
  );
}
