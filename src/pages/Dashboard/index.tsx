import { useEffect, useState } from "react";
import {
  BookOpen,
  FileText,
  ClipboardList,
  Sparkles,
  TrendingUp,
  Clock,
  Plus,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActionButton } from "@/components/dashboard/QuickActionButton";
import { ClassesTable } from "@/components/dashboard/ClassesTable";
import { RecentHistory } from "@/components/dashboard/RecentHistory";
import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { analyticsService } from "@/services/analytics.service";
import { mockClasses } from "@/data/classes";
import type { Analytics } from "@/types/Analytics";
import type { HistoryItem } from "@/components/dashboard/RecentHistory";

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    analyticsService.get().then(setAnalytics);
  }, []);

  if (!analytics) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  // Mock data for classes table
  const classesData = mockClasses.slice(0, 5).map((cls) => {
    const levelToNumber: Record<string, number> = {
      Low: 35,
      Medium: 65,
      High: 85,
    };
    const severity: "low" | "medium" | "high" | "critical" =
      cls.difficulties.length > 2 ? "critical" : cls.difficulties.length > 0 ? "medium" : "low";
    return {
      id: cls.id,
      name: cls.name,
      students: cls.students,
      recentActivity: "2 hours ago",
      progress: levelToNumber[cls.averageLevel] || 50,
      criticalTopic: cls.difficulties[0] || "None",
      severity,
    };
  });

  // Mock data for recent history
  const historyItems: HistoryItem[] = [
    {
      id: "1",
      type: "upload",
      title: "Annual Planning.pdf",
      timestamp: "2 hours ago",
      status: "Completed",
    },
    {
      id: "2",
      type: "lesson",
      title: "Introduction to Fractions",
      timestamp: "5 hours ago",
      status: "Completed",
    },
    {
      id: "3",
      type: "activity",
      title: "Fraction Practice Quiz",
      timestamp: "Yesterday",
      status: "In Progress",
    },
    {
      id: "4",
      type: "analysis",
      title: "Math Curriculum Analysis",
      timestamp: "2 days ago",
      status: "Completed",
    },
    {
      id: "5",
      type: "error",
      title: "Failed to upload Curriculum.pdf",
      timestamp: "3 days ago",
      status: "Failed",
    },
  ];



  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">
          Bem-vindo de volta, Professor Matheus
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          Aqui está uma visão geral do seu assistente inteligente
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard
          icon={<BookOpen />}
          title="Total Classes"
          value={analytics.totalClasses}
          change="+2 this month"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<FileText />}
          title="Documents"
          value={analytics.totalDocuments}
          change="+5 this week"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<ClipboardList />}
          title="Lesson Plans"
          value={analytics.lessonPlans}
          change="+3 this week"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<Sparkles />}
          title="Activities"
          value={analytics.generatedActivities}
          change="+8 this week"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<Clock />}
          title="Hours Saved"
          value={analytics.hoursSaved}
          change="This month"
          changeType="neutral"
          size="md"
        />

        <StatCard
          icon={<TrendingUp />}
          title="Avg Performance"
          value={`${analytics.averagePerformance}%`}
          change="+5% vs last month"
          changeType="positive"
          size="md"
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">

          <QuickActionButton
            icon={<Plus />}
            label="Generate Lesson Plan"
            variant="primary"
          />

          <QuickActionButton
            icon={<Sparkles />}
            label="Create Activity"
            variant="outline"
          />

          <QuickActionButton
            icon={<BookOpen />}
            label="View All Classes"
            variant="outline"
          />
        </div>
      </div>

      {/* Classes + History */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-stretch">
        <div className="xl:col-span-8 h-full">
          <ClassesTable
            classes={classesData}
            totalClasses={analytics.totalClasses}
          />
        </div>

        <div className="xl:col-span-4 h-full">
          <RecentHistory items={historyItems} />
        </div>
      </div>

      {/* AI Insights */}
      <div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-foreground">
            AI Insights
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Personalized recommendations generated from your classes and recent activities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AIInsightCard
            icon={TrendingUp}
            title="Performance Trend"
            message="Your students improved 12% this month."
            severity="positive"
          />

          <AIInsightCard
            icon={Clock}
            title="Time Optimization"
            message="You saved 24 hours using AI."
            severity="positive"
          />

          <AIInsightCard
            icon={AlertTriangle}
            title="Warning"
            message="45% of students struggled with Fractions."
            severity="warning"
            action={{
              label: "Generate remedial activity",
              onClick: () => { },
            }}
          />

          <AIInsightCard
            icon={AlertTriangle}
            title="Critical"
            message="Three students have not completed the latest assessment."
            severity="critical"
            action={{
              label: "Review students",
              onClick: () => { },
            }}
          />

          <AIInsightCard
            icon={CheckCircle}
            title="Class Milestone"
            message="9th Grade reached 80% overall progress this week."
            severity="positive"
          />

          <AIInsightCard
            icon={BookOpen}
            title="Recommendation"
            message="Consider introducing algebraic concepts to your advanced students."
            severity="warning"
          />
        </div>
      </div >
    </div >
  );
}
