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
        <p className="text-muted-foreground">Carregando dashboard...</p>
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
      recentActivity: "2 horas atrás",
      progress: levelToNumber[cls.averageLevel] || 50,
      criticalTopic: cls.difficulties[0] || "Nenhum",
      severity,
    };
  });

  // Mock data for recent history
  const historyItems: HistoryItem[] = [
    {
      id: "1",
      type: "upload",
      title: "Planejamento Anual.pdf",
      timestamp: "2 horas atrás",
      status: "Concluído",
    },
    {
      id: "2",
      type: "lesson",
      title: "Introdução a Frações",
      timestamp: "5 horas atrás",
      status: "Concluído",
    },
    {
      id: "3",
      type: "activity",
      title: "Quiz de Prática de Frações",
      timestamp: "Ontem",
      status: "Em Andamento",
    },
    {
      id: "4",
      type: "analysis",
      title: "Análise do Currículo de Matemática",
      timestamp: "2 dias atrás",
      status: "Concluído",
    },
    {
      id: "5",
      type: "error",
      title: "Falha ao enviar Currículo.pdf",
      timestamp: "3 dias atrás",
      status: "Falhou",
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
          title="Total de Turmas"
          value={analytics.totalClasses}
          change="+2 este mês"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<FileText />}
          title="Documentos"
          value={analytics.totalDocuments}
          change="+5 esta semana"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<ClipboardList />}
          title="Planos de Aula"
          value={analytics.lessonPlans}
          change="+3 esta semana"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<Sparkles />}
          title="Atividades"
          value={analytics.generatedActivities}
          change="+8 esta semana"
          changeType="positive"
          size="md"
        />

        <StatCard
          icon={<Clock />}
          title="Horas Economizadas"
          value={analytics.hoursSaved}
          change="Este mês"
          changeType="neutral"
          size="md"
        />

        <StatCard
          icon={<TrendingUp />}
          title="Desempenho Médio"
          value={`${analytics.averagePerformance}%`}
          change="+5% vs mês anterior"
          changeType="positive"
          size="md"
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Ações Rápidas
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">

          <QuickActionButton
            icon={<Plus />}
            label="Gerar Plano de Aula"
            variant="primary"
          />

          <QuickActionButton
            icon={<Sparkles />}
            label="Criar Atividade"
            variant="outline"
          />

          <QuickActionButton
            icon={<BookOpen />}
            label="Ver Todas as Turmas"
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
            Insights da IA
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Recomendações personalizadas geradas a partir das suas turmas e atividades recentes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AIInsightCard
            icon={TrendingUp}
            title="Tendência de Desempenho"
            message="Seus alunos melhoraram 12% este mês."
            severity="positive"
          />

          <AIInsightCard
            icon={Clock}
            title="Otimização de Tempo"
            message="Você economizou 24 horas usando IA."
            severity="positive"
          />

          <AIInsightCard
            icon={AlertTriangle}
            title="Atenção"
            message="45% dos alunos tiveram dificuldade com Frações."
            severity="warning"
            action={{
              label: "Gerar atividade de reforço",
              onClick: () => { },
            }}
          />

          <AIInsightCard
            icon={AlertTriangle}
            title="Crítico"
            message="Três alunos não concluíram a última avaliação."
            severity="critical"
            action={{
              label: "Revisar alunos",
              onClick: () => { },
            }}
          />

          <AIInsightCard
            icon={CheckCircle}
            title="Marco da Turma"
            message="A 9ª série atingiu 80% de progresso geral esta semana."
            severity="positive"
          />

          <AIInsightCard
            icon={BookOpen}
            title="Recomendação"
            message="Considere introduzir conceitos algébricos para seus alunos avançados."
            severity="warning"
          />
        </div>
      </div >
    </div >
  );
}
