import { useState } from "react";
import { AnalyticsFilters } from "@/components/analytics/AnalyticsFilters";
import { LearningTrends } from "@/components/analytics/LearningTrends";
import { TopicMastery } from "@/components/analytics/TopicMastery";
import { KnowledgeGapCard } from "@/components/analytics/KnowledgeGapCard";
import { CurriculumCoverage } from "@/components/analytics/CurriculumCoverage";
import { ClassComparison } from "@/components/analytics/ClassComparison";
import { PredictionCard } from "@/components/analytics/PredictionCard";
import { TeachingStrategyAnalysis } from "@/components/analytics/TeachingStrategyAnalysis";
import { RecommendationCard } from "@/components/analytics/RecommendationCard";
import { ClassHealthCard } from "@/components/analytics/ClassHealthCard";
import { MonthlyReport } from "@/components/analytics/MonthlyReport";
import { AICopilotPanel } from "@/components/analytics/AICopilotPanel";
import {
  mockLearningTrends,
  mockTopicMastery,
  mockKnowledgeGaps,
  mockCurriculumCoverage,
  mockClassComparison,
  mockLearningPredictions,
  mockTeachingStrategies,
  mockEducationalRecommendations,
  mockClassHealth,
  mockMonthlyReport,
  mockAICopilotMessages,
} from "@/data/analytics";
import type { TopicMastery as TopicMasteryType, KnowledgeGap, LearningPrediction, EducationalRecommendation, ClassHealth, AICopilotMessage } from "@/types/Analytics";

export default function Analytics() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleExportReport = () => {
    console.log("Exporting report...");
  };

  const handleTopicAction = (topic: TopicMasteryType) => {
    console.log("Action for topic:", topic);
  };

  const handleKnowledgeGapAction = (gap: KnowledgeGap) => {
    console.log("Action for knowledge gap:", gap);
  };

  const handleTopicClick = (topic: string) => {
    console.log("Generate lesson plan for:", topic);
  };

  const handlePredictionAction = (prediction: LearningPrediction) => {
    console.log("Action for prediction:", prediction);
  };

  const handleRecommendationAction = (recommendation: EducationalRecommendation) => {
    console.log("Action for recommendation:", recommendation);
  };

  const handleClassHealthDetails = (health: ClassHealth) => {
    console.log("View details for class health:", health);
  };

  const handleExportPDF = () => {
    console.log("Exporting PDF...");
  };

  const handleExportDOCX = () => {
    console.log("Exporting DOCX...");
  };

  const handleAIAction = (message: AICopilotMessage, action: string) => {
    console.log("AI action:", action, "for message:", message);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Inteligência Educacional</h1>
        <p className="text-muted-foreground mt-1">
          Entenda tendências de aprendizagem, identifique padrões educacionais e receba recomendações estratégicas da IA.
        </p>
      </div>

      {/* Filters */}
      <AnalyticsFilters
        onExportReport={handleExportReport}
        onFilterChange={handleFilterChange}
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Analytics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Learning Trends */}
          <LearningTrends trends={mockLearningTrends} />

          {/* Topic Mastery */}
          <TopicMastery topics={mockTopicMastery} onAction={handleTopicAction} />

          {/* Knowledge Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockKnowledgeGaps.map((gap) => (
              <KnowledgeGapCard
                key={gap.id}
                gap={gap}
                onAction={handleKnowledgeGapAction}
              />
            ))}
          </div>

          {/* Curriculum Coverage */}
          <CurriculumCoverage
            coverage={mockCurriculumCoverage}
            onTopicClick={handleTopicClick}
          />

          {/* Class Comparison */}
          <ClassComparison comparisons={mockClassComparison} />

          {/* Teaching Strategy Analysis */}
          <TeachingStrategyAnalysis strategies={mockTeachingStrategies} />
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* AI Copilot Panel */}
          <AICopilotPanel
            messages={mockAICopilotMessages}
            onAction={handleAIAction}
          />

          {/* Learning Predictions */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4">Previsões de Aprendizagem</h2>
            <div className="space-y-3">
              {mockLearningPredictions.map((prediction) => (
                <PredictionCard
                  key={prediction.id}
                  prediction={prediction}
                  onAction={handlePredictionAction}
                />
              ))}
            </div>
          </div>

          {/* Educational Recommendations */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4">Recomendações</h2>
            <div className="space-y-3">
              {mockEducationalRecommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.id}
                  recommendation={recommendation}
                  onAction={handleRecommendationAction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Class Health */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-4">Saúde da Turma</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockClassHealth.map((health) => (
              <ClassHealthCard
                key={health.id}
                health={health}
                onViewDetails={handleClassHealthDetails}
              />
            ))}
          </div>
        </div>

        {/* Monthly Report */}
        <MonthlyReport
          report={mockMonthlyReport}
          onExportPDF={handleExportPDF}
          onExportDOCX={handleExportDOCX}
        />
      </div>
    </div>
  );
}
