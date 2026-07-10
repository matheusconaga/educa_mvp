import { Sparkles, BookOpen, Target, AlertTriangle, Clock } from "lucide-react";
import { SeverityBadge } from "@/components/dashboard/SeverityBadge";
import type { DocumentAnalysis } from "@/types/DocumentAnalysis";

interface DocumentAnalysisProps {
  analysis: DocumentAnalysis;
}

export function DocumentAnalysisView({ analysis }: DocumentAnalysisProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">AI Analysis Results</h2>
            <p className="text-sm text-muted-foreground">
              Generated on {new Date(analysis.generatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Document Summary */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <h3 className="text-lg font-bold text-foreground mb-4">Document Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Estimated Teaching Time</p>
              <p className="text-lg font-semibold text-foreground">{analysis.estimatedHours} hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Topics Identified</p>
              <p className="text-lg font-semibold text-foreground">{analysis.topics.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Identified Topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {analysis.topics.map((topic, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Target Skills</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {analysis.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-xl bg-muted/50"
            >
              <span className="text-sm text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Competencies */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <h3 className="text-lg font-bold text-foreground mb-4">Competencies</h3>
        <div className="space-y-2">
          {analysis.competencies.map((competency, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/30"
            >
              <span className="text-sm text-foreground">{competency}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty & Complexity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
          <h3 className="text-lg font-bold text-foreground mb-4">Difficulty Level</h3>
          <SeverityBadge severity={analysis.difficulty === "Hard" ? "high" : analysis.difficulty === "Medium" ? "medium" : "low"}>
            {analysis.difficulty}
          </SeverityBadge>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
          <h3 className="text-lg font-bold text-foreground mb-4">Complexity</h3>
          <SeverityBadge severity={analysis.complexity >= 7 ? "high" : analysis.complexity >= 4 ? "medium" : "low"}>
            {analysis.complexity}/10
          </SeverityBadge>
        </div>
      </div>

      {/* Pedagogical Density */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <h3 className="text-lg font-bold text-foreground mb-4">Pedagogical Density</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${analysis.pedagogicalDensity}%` }}
            />
          </div>
          <span className="text-sm font-medium text-foreground">
            {analysis.pedagogicalDensity}%
          </span>
        </div>
      </div>

      {/* Risk Level */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Risk Assessment</h3>
        </div>
        <SeverityBadge severity={analysis.riskLevel === "High" ? "critical" : analysis.riskLevel === "Medium" ? "medium" : "low"}>
          {analysis.riskLevel} Risk
        </SeverityBadge>
      </div>

      {/* Pedagogical Recommendations */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <h3 className="text-lg font-bold text-foreground mb-4">Pedagogical Recommendations</h3>
        <div className="space-y-3">
          {analysis.recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-primary/5"
            >
              <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{recommendation}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">AI Insights</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-green-50 border border-green-200">
            <p className="text-sm text-green-800">
              This document contains well-structured educational content suitable for classroom use.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
            <p className="text-sm text-blue-800">
              Consider supplementing with practical examples to enhance student engagement.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
            <p className="text-sm text-purple-800">
              The identified topics align well with standard curriculum requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
