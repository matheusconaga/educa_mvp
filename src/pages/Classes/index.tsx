import { useState } from "react";
import { ClassHeader } from "@/components/classes/ClassHeader";
import { ClassCard } from "@/components/classes/ClassCard";
import { CreateClassModal } from "@/components/classes/CreateClassModal";
import { ImportStudentsModal } from "@/components/classes/ImportStudentsModal";
import { mockClasses, mockAIInsights } from "@/data/classes";
import type { CreateClassFormData, ImportedStudent } from "@/types/Class";

export default function Classes() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [classes, setClasses] = useState(mockClasses);

  const filteredClasses = classes.filter((classItem) =>
    classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classItem.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classItem.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateClass = (data: CreateClassFormData) => {
    const newClass = {
      id: `cls_${Date.now()}`,
      ...data,
      description: data.description || "",
      students: 0,
      averageLevel: "Medium" as const,
      averagePerformance: 0,
      difficulties: [],
      calendar: "Morning",
      status: "healthy" as const,
      createdAt: new Date().toISOString(),
    };
    setClasses([...classes, newClass]);
    setShowCreateModal(false);
  };

  const handleImportStudents = (students: ImportedStudent[]) => {
    console.log("Imported students:", students);
    setShowImportModal(false);
  };

  const handleViewDetails = (classId: string) => {
    console.log("View details for class:", classId);
  };

  const handleEditClass = (classId: string) => {
    console.log("Edit class:", classId);
  };

  const handleDeleteClass = (classId: string) => {
    setClasses(classes.filter((c) => c.id !== classId));
  };

  const handleGenerateLesson = (classId: string) => {
    console.log("Generate lesson for class:", classId);
  };

  const handleGenerateActivity = (classId: string) => {
    console.log("Generate activity for class:", classId);
  };

  const handleGenerateAssessment = (classId: string) => {
    console.log("Generate assessment for class:", classId);
  };

  const handleViewAnalytics = (classId: string) => {
    console.log("View analytics for class:", classId);
  };

  return (
    <div className="space-y-6">
      <ClassHeader
        onCreateClass={() => setShowCreateModal(true)}
        onFilter={() => console.log("Filter clicked")}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredClasses.map((classItem) => {
          const aiInsight = mockAIInsights.find((insight) => insight.id === `insight_${classItem.id.slice(-1)}`);
          return (
            <ClassCard
              key={classItem.id}
              classData={classItem}
              aiInsight={aiInsight}
              onViewDetails={() => handleViewDetails(classItem.id)}
              onEdit={() => handleEditClass(classItem.id)}
              onDelete={() => handleDeleteClass(classItem.id)}
              onGenerateLesson={() => handleGenerateLesson(classItem.id)}
              onGenerateActivity={() => handleGenerateActivity(classItem.id)}
              onGenerateAssessment={() => handleGenerateAssessment(classItem.id)}
              onViewAnalytics={() => handleViewAnalytics(classItem.id)}
            />
          );
        })}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Nenhuma turma encontrada com sua pesquisa.
        </div>
      )}

      <CreateClassModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateClass}
      />

      <ImportStudentsModal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
        onImport={handleImportStudents}
      />
    </div>
  );
}
