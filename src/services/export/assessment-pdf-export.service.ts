import jsPDF from "jspdf";
import type { GeneratedAssessment } from "@/types/Assessment";

export class AssessmentPDFExportService {
  private doc: jsPDF;
  private pageWidth: number;
  private pageHeight: number;
  private margin: number;
  private lineHeight: number;
  private currentY: number;

  constructor() {
    this.doc = new jsPDF();
    this.pageWidth = this.doc.internal.pageSize.getWidth();
    this.pageHeight = this.doc.internal.pageSize.getHeight();
    this.margin = 20;
    this.lineHeight = 7;
    this.currentY = this.margin;
  }

  exportAssessment(assessment: GeneratedAssessment): void {
    this.doc = new jsPDF();
    this.currentY = this.margin;

    // Add EducAssist logo placeholder
    this.addLogo();

    // Add title
    this.addTitle(assessment.title);

    // Add metadata
    this.addMetadata(assessment);

    // Add instructions
    this.addSection("Instructions", assessment.instructions);

    // Add questions
    this.addQuestions(assessment.questions);

    // Add answer key if present
    if (assessment.answerKey) {
      this.addAnswerKey(assessment.answerKey);
    }

    // Add evaluation rubric if present
    if (assessment.evaluationRubric) {
      this.addSection("Evaluation Rubric", assessment.evaluationRubric);
    }

    // Add teacher notes
    this.addSection("Teacher Notes", assessment.teacherNotes);

    // Save the PDF
    const filename = `assessment-${this.sanitizeFilename(assessment.title)}.pdf`;
    this.doc.save(filename);
  }

  private addLogo(): void {
    this.doc.setFontSize(10);
    this.doc.setTextColor(100, 100, 100);
    this.doc.text("EducAssist", this.margin, this.currentY);
    this.currentY += this.lineHeight;
  }

  private addTitle(title: string): void {
    this.doc.setFontSize(20);
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFont("helvetica", "bold");
    this.doc.text(title, this.margin, this.currentY);
    this.currentY += this.lineHeight * 2;
  }

  private addMetadata(assessment: GeneratedAssessment): void {
    this.doc.setFontSize(12);
    this.doc.setFont("helvetica", "normal");
    this.doc.setTextColor(60, 60, 60);
    
    this.doc.text(`Subject: ${assessment.subject}`, this.margin, this.currentY);
    this.currentY += this.lineHeight;
    
    this.doc.text(`Grade: ${assessment.grade}`, this.margin, this.currentY);
    this.currentY += this.lineHeight;
    
    this.doc.text(`Topic: ${assessment.topic}`, this.margin, this.currentY);
    this.currentY += this.lineHeight;
    
    this.doc.text(`Duration: ${assessment.estimatedTime}`, this.margin, this.currentY);
    this.currentY += this.lineHeight;
    
    this.doc.text(`Difficulty: ${assessment.difficulty}`, this.margin, this.currentY);
    this.currentY += this.lineHeight * 2;
  }

  private addSection(title: string, content: string): void {
    this.checkPageBreak(20);
    
    this.doc.setFontSize(14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setTextColor(0, 0, 0);
    this.doc.text(title, this.margin, this.currentY);
    this.currentY += this.lineHeight;

    this.doc.setFontSize(11);
    this.doc.setFont("helvetica", "normal");
    this.doc.setTextColor(60, 60, 60);
    
    const lines = this.doc.splitTextToSize(content, this.pageWidth - this.margin * 2);
    this.doc.text(lines, this.margin, this.currentY);
    this.currentY += lines.length * this.lineHeight + this.lineHeight;
  }

  private addQuestions(questions: GeneratedAssessment["questions"]): void {
    this.checkPageBreak(30);
    
    this.doc.setFontSize(14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setTextColor(0, 0, 0);
    this.doc.text("Questions", this.margin, this.currentY);
    this.currentY += this.lineHeight;

    questions.forEach((question, index) => {
      this.checkPageBreak(40);
      
      this.doc.setFontSize(12);
      this.doc.setFont("helvetica", "bold");
      this.doc.setTextColor(0, 0, 0);
      this.doc.text(`Q${index + 1}. [${question.type}] (${question.points} pts)`, this.margin, this.currentY);
      this.currentY += this.lineHeight;

      this.doc.setFontSize(11);
      this.doc.setFont("helvetica", "normal");
      this.doc.setTextColor(60, 60, 60);
      
      const questionLines = this.doc.splitTextToSize(question.text, this.pageWidth - this.margin * 2);
      this.doc.text(questionLines, this.margin, this.currentY);
      this.currentY += questionLines.length * this.lineHeight;

      if (question.options && question.options.length > 0) {
        this.currentY += this.lineHeight / 2;
        question.options.forEach((option, optIndex) => {
          this.checkPageBreak(10);
          this.doc.text(`  ${String.fromCharCode(65 + optIndex)}. ${option}`, this.margin, this.currentY);
          this.currentY += this.lineHeight;
        });
      }

      this.currentY += this.lineHeight;
    });
  }

  private addAnswerKey(answerKey: string): void {
    this.checkPageBreak(30);
    
    this.doc.setFontSize(14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setTextColor(0, 0, 0);
    this.doc.text("Answer Key", this.margin, this.currentY);
    this.currentY += this.lineHeight;

    this.doc.setFontSize(11);
    this.doc.setFont("helvetica", "normal");
    this.doc.setTextColor(60, 60, 60);
    
    const lines = this.doc.splitTextToSize(answerKey, this.pageWidth - this.margin * 2);
    this.doc.text(lines, this.margin, this.currentY);
    this.currentY += lines.length * this.lineHeight + this.lineHeight;
  }

  private checkPageBreak(requiredSpace: number): void {
    if (this.currentY + requiredSpace > this.pageHeight - this.margin) {
      this.doc.addPage();
      this.currentY = this.margin;
    }
  }

  private sanitizeFilename(filename: string): string {
    return filename
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }
}

export const assessmentPDFExportService = new AssessmentPDFExportService();
