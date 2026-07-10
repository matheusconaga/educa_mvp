import jsPDF from "jspdf";
import type { GeneratedLessonPlan } from "@/types/LessonPlan";

export class PDFExportService {
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

  exportLessonPlan(lessonPlan: GeneratedLessonPlan): void {
    this.doc = new jsPDF();
    this.currentY = this.margin;

    // Add EducAssist logo placeholder
    this.addLogo();

    // Add title
    this.addTitle(lessonPlan.title);

    // Add metadata
    this.addMetadata(lessonPlan);

    // Add sections
    this.addSection("Learning Objectives", lessonPlan.learningObjectives);
    this.addSection("Required Materials", lessonPlan.requiredMaterials.join(", "));
    this.addSection("Teaching Methodology", lessonPlan.teachingMethodology.join(", "));

    // Add lesson development
    this.addLessonDevelopment(lessonPlan.lessonDevelopment);

    // Add adaptations if present
    if (lessonPlan.adaptations && lessonPlan.adaptations !== "No special adaptations required.") {
      this.addSection("Educational Adaptations", lessonPlan.adaptations);
    }

    // Add teacher notes
    this.addSection("Teacher Notes", lessonPlan.teacherNotes);

    // Add AI recommendations
    this.addAIRecommendations(lessonPlan.aiRecommendations);

    // Save the PDF
    const filename = `lesson-plan-${this.sanitizeFilename(lessonPlan.title)}.pdf`;
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

  private addMetadata(lessonPlan: GeneratedLessonPlan): void {
    this.doc.setFontSize(12);
    this.doc.setFont("helvetica", "normal");
    this.doc.setTextColor(60, 60, 60);
    
    this.doc.text(`Grade: ${lessonPlan.grade}`, this.margin, this.currentY);
    this.currentY += this.lineHeight;
    
    this.doc.text(`Subject: ${lessonPlan.subject}`, this.margin, this.currentY);
    this.currentY += this.lineHeight;
    
    this.doc.text(`Duration: ${lessonPlan.duration}`, this.margin, this.currentY);
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

  private addLessonDevelopment(development: GeneratedLessonPlan["lessonDevelopment"]): void {
    this.checkPageBreak(30);
    
    this.doc.setFontSize(14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setTextColor(0, 0, 0);
    this.doc.text("Lesson Development", this.margin, this.currentY);
    this.currentY += this.lineHeight;

    // Introduction
    this.addSubsection("Introduction", development.introduction);
    
    // Main Activities
    this.addSubsection("Main Activities", development.mainActivities.join("\n• "));
    
    // Practice
    this.addSubsection("Practice", development.practice);
    
    // Assessment
    this.addSubsection("Assessment", development.assessment);
    
    // Homework
    this.addSubsection("Homework", development.homework);
  }

  private addSubsection(title: string, content: string): void {
    this.checkPageBreak(20);
    
    this.doc.setFontSize(12);
    this.doc.setFont("helvetica", "bold");
    this.doc.setTextColor(0, 0, 0);
    this.doc.text(title, this.margin + 5, this.currentY);
    this.currentY += this.lineHeight;

    this.doc.setFontSize(11);
    this.doc.setFont("helvetica", "normal");
    this.doc.setTextColor(60, 60, 60);
    
    const lines = this.doc.splitTextToSize(content, this.pageWidth - this.margin * 2 - 5);
    this.doc.text(lines, this.margin + 5, this.currentY);
    this.currentY += lines.length * this.lineHeight + this.lineHeight;
  }

  private addAIRecommendations(recommendations: string[]): void {
    this.checkPageBreak(30);
    
    this.doc.setFontSize(14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setTextColor(0, 0, 0);
    this.doc.text("AI Recommendations", this.margin, this.currentY);
    this.currentY += this.lineHeight;

    recommendations.forEach((recommendation, index) => {
      this.checkPageBreak(15);
      
      this.doc.setFontSize(11);
      this.doc.setFont("helvetica", "normal");
      this.doc.setTextColor(60, 60, 60);
      
      const lines = this.doc.splitTextToSize(
        `${index + 1}. ${recommendation}`,
        this.pageWidth - this.margin * 2
      );
      this.doc.text(lines, this.margin, this.currentY);
      this.currentY += lines.length * this.lineHeight;
    });
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

export const pdfExportService = new PDFExportService();
