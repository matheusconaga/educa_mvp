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

  const grades = ["6th Grade", "7th Grade", "8th Grade", "9th Grade", "High School"];
  const subjects = [
    "Mathematics",
    "Science",
    "History",
    "Portuguese",
    "Geography",
    "Biology",
    "Chemistry",
    "Physics",
  ];
  const durations = ["40", "45", "50", "60", "90", "120"];
  const methodologies = [
    "Direct Instruction",
    "Project-Based Learning",
    "Flipped Classroom",
    "Socratic Method",
    "Gamification",
    "Collaborative Learning",
    "Inquiry-Based Learning",
  ];
  const resources = [
    "Whiteboard",
    "Markers",
    "Projector",
    "Slides",
    "Printed Worksheets",
    "Notebook",
    "Computer",
    "Internet",
    "Calculator",
    "Educational Games",
    "Videos",
    "Books",
    "Laboratory",
    "Tablets",
  ];
  const specialNeeds = [
    "Autism Spectrum Disorder (ASD)",
    "ADHD",
    "Hearing Impairment",
    "Visual Impairment",
    "Intellectual Disability",
    "Dyslexia",
    "Physical Disability",
    "Other",
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
        <h1 className="text-2xl font-bold text-foreground">Generate Lesson Plan</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Describe your lesson and let AI build a complete lesson plan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Basic Information */}
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
                placeholder="e.g., Introduction to Fractions"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Learning Objectives
              </label>
              <textarea
                value={formData.learningObjectives}
                onChange={(e) => setFormData({ ...formData, learningObjectives: e.target.value })}
                placeholder="e.g., Students should understand fractions and solve basic exercises."
                rows={3}
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 2: Lesson Configuration */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Lesson Configuration</h2>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Lesson Duration
            </label>
            <select
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration} minutes
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Teaching Methodology
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
          <h2 className="text-lg font-semibold text-foreground">Teaching Resources</h2>
          
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
          <h2 className="text-lg font-semibold text-foreground">Special Educational Needs</h2>
          
          <div className="flex items-center gap-3">
            <label className="text-sm text-foreground">
              Does your class include students requiring educational adaptations?
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
                The AI will adapt the lesson plan to promote an inclusive learning experience.
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
          {isGenerating ? "Generating..." : "Generate Lesson Plan"}
        </Button>
      </form>
    </div>
  );
}
