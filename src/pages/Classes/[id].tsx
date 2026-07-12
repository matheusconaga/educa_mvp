import { ArrowLeft, Users, TrendingUp, BookOpen, AlertTriangle, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClassStatus } from "@/components/classes/ClassStatus";
import { StudentList } from "@/components/classes/StudentList";
import { mockClasses, mockStudents, mockClassAlerts, mockAIInsights } from "@/data/classes";

export default function ClassDetails({ classId }: { classId: string }) {
  const classData = mockClasses.find((c) => c.id === classId);
  const students = mockStudents.filter((s) => s.classId === classId);
  const alerts = mockClassAlerts;
  const insights = mockAIInsights;

  if (!classData) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Class not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{classData.name}</h1>
          <p className="text-muted-foreground">{classData.subject} • {classData.grade}</p>
        </div>
        <div className="ml-auto">
          <ClassStatus status={classData.status} />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Students</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{classData.students}</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Average Performance</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{classData.averagePerformance}%</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Difficulty Level</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{classData.averageLevel}</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Schedule</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{classData.calendar}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Class Information */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4">Class Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">School Year</span>
                <span className="text-foreground font-medium">{classData.schoolYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subject</span>
                <span className="text-foreground font-medium">{classData.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Grade</span>
                <span className="text-foreground font-medium">{classData.grade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Lesson</span>
                <span className="text-foreground font-medium">{classData.nextLesson || "—"}</span>
              </div>
              {classData.criticalTopic && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Critical Topic</span>
                  <span className="text-foreground font-medium text-red-500">{classData.criticalTopic}</span>
                </div>
              )}
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground">{classData.description}</p>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Students</h2>
              <Button variant="outline" size="sm">
                + Add Student
              </Button>
            </div>
            <StudentList students={students} />
          </div>

          {/* Recent Activities */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {classData.recentActivity && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{classData.recentActivity}</span>
                </div>
              )}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">Upcoming: {classData.nextLesson}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Critical Alerts */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Critical Alerts
            </h2>
            <div className="space-y-3">
              {alerts.slice(0, 3).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-xl ${
                    alert.severity === "critical"
                      ? "bg-red-500/10 border border-red-500/20"
                      : alert.severity === "warning"
                      ? "bg-yellow-500/10 border border-yellow-500/20"
                      : "bg-blue-500/10 border border-blue-500/20"
                  }`}
                >
                  <p className="text-sm text-foreground">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4">AI Recommendations</h2>
            <div className="space-y-3">
              {insights.slice(0, 3).map((insight) => (
                <div key={insight.id} className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm text-foreground mb-2">{insight.message}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {insight.action === "generate-lesson" && "Generate Lesson Plan"}
                    {insight.action === "generate-activity" && "Generate Activity"}
                    {insight.action === "generate-assessment" && "Generate Assessment"}
                    {insight.action === "view-analytics" && "View Analytics"}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Generate Lesson Plan
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Generate Activity
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Assessment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
