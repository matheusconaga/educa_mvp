import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Check, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ImportedStudent } from "@/types/Class";

interface ImportStudentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (students: ImportedStudent[]) => void;
}

export function ImportStudentsModal({ isOpen, onClose, onImport }: ImportStudentsModalProps) {
  const [step, setStep] = useState<"upload" | "preview" | "validate">("upload");
  const [importedStudents, setImportedStudents] = useState<ImportedStudent[]>([]);
  const [manualStudents, setManualStudents] = useState<ImportedStudent[]>([
    { name: "", email: "", studentId: "" },
  ]);

  const mockImportData: ImportedStudent[] = [
    { name: "Alice Johnson", email: "alice.johnson@school.edu", studentId: "STU001" },
    { name: "Bob Smith", email: "bob.smith@school.edu", studentId: "STU002" },
    { name: "Carol Davis", email: "carol.davis@school.edu", studentId: "STU003" },
    { name: "David Wilson", email: "david.wilson@school.edu", studentId: "STU004" },
    { name: "Emma Brown", email: "emma.brown@school.edu", studentId: "STU005" },
  ];

  const handleFileUpload = () => {
    // Mock file upload - in real implementation would parse Excel/CSV
    setImportedStudents(mockImportData);
    setStep("preview");
  };

  const handleAddManualStudent = () => {
    setManualStudents([...manualStudents, { name: "", email: "", studentId: "" }]);
  };

  const handleRemoveManualStudent = (index: number) => {
    setManualStudents(manualStudents.filter((_, i) => i !== index));
  };

  const handleManualStudentChange = (index: number, field: keyof ImportedStudent, value: string) => {
    const updated = [...manualStudents];
    updated[index][field] = value;
    setManualStudents(updated);
  };

  const handleRemoveImportedStudent = (index: number) => {
    setImportedStudents(importedStudents.filter((_, i) => i !== index));
  };

  const handleConfirmImport = () => {
    onImport(importedStudents);
    setImportedStudents([]);
    setManualStudents([{ name: "", email: "", studentId: "" }]);
    setStep("upload");
    onClose();
  };

  const handleManualImport = () => {
    const validStudents = manualStudents.filter(s => s.name.trim() !== "");
    onImport(validStudents);
    setManualStudents([{ name: "", email: "", studentId: "" }]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card rounded-3xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Import Students</h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {step === "upload" && (
            <div className="space-y-6">
              {/* Import Options */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleFileUpload}
                  className="p-6 rounded-2xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors text-left"
                >
                  <Upload className="h-8 w-8 text-muted-foreground mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Spreadsheet Import</h3>
                  <p className="text-sm text-muted-foreground">Import from Excel (.xlsx) or CSV (.csv)</p>
                </button>
                <button
                  onClick={() => setStep("validate")}
                  className="p-6 rounded-2xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors text-left"
                >
                  <Plus className="h-8 w-8 text-muted-foreground mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Manual Entry</h3>
                  <p className="text-sm text-muted-foreground">Add students one by one</p>
                </button>
              </div>
            </div>
          )}

          {step === "preview" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Preview Imported Students</h3>
                <span className="text-sm text-muted-foreground">{importedStudents.length} students</span>
              </div>

              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 text-sm font-medium text-foreground">Name</th>
                      <th className="text-left p-3 text-sm font-medium text-foreground">Email</th>
                      <th className="text-left p-3 text-sm font-medium text-foreground">Student ID</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {importedStudents.map((student, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-3 text-sm text-foreground">{student.name}</td>
                        <td className="p-3 text-sm text-muted-foreground">{student.email || "—"}</td>
                        <td className="p-3 text-sm text-muted-foreground">{student.studentId || "—"}</td>
                        <td className="p-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveImportedStudent(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("upload")}>
                  Back
                </Button>
                <Button onClick={() => setStep("validate")} className="flex-1">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === "validate" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm text-foreground">Data validated successfully</span>
              </div>

              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 text-sm font-medium text-foreground">Name</th>
                      <th className="text-left p-3 text-sm font-medium text-foreground">Email</th>
                      <th className="text-left p-3 text-sm font-medium text-foreground">Student ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importedStudents.map((student, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-3 text-sm text-foreground">{student.name}</td>
                        <td className="p-3 text-sm text-muted-foreground">{student.email || "—"}</td>
                        <td className="p-3 text-sm text-muted-foreground">{student.studentId || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("preview")}>
                  Back
                </Button>
                <Button onClick={handleConfirmImport} className="flex-1">
                  Confirm Import
                </Button>
              </div>
            </div>
          )}

          {step === "validate" && manualStudents.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Add Students Manually</h3>
                <Button variant="outline" size="sm" onClick={handleAddManualStudent}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Student
                </Button>
              </div>

              {manualStudents.map((student, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      placeholder="Student Name"
                      value={student.name}
                      onChange={(e) => handleManualStudentChange(index, "name", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={student.email}
                        onChange={(e) => handleManualStudentChange(index, "email", e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Student ID (optional)"
                        value={student.studentId}
                        onChange={(e) => handleManualStudentChange(index, "studentId", e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>
                  {manualStudents.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveManualStudent(index)}
                      className="mt-6"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("upload")}>
                  Cancel
                </Button>
                <Button onClick={handleManualImport} className="flex-1">
                  Add Students
                </Button>
              </div>
            </div>
          )}
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
