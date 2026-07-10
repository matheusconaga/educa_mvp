import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  Packer,
} from "docx";
import { saveAs } from "file-saver";
import type { GeneratedLessonPlan } from "@/types/LessonPlan";

export class DOCXExportService {
  exportLessonPlan(lessonPlan: GeneratedLessonPlan): void {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // EducAssist logo/header
            new Paragraph({
              text: "EducAssist",
              heading: HeadingLevel.HEADING_3,
              spacing: { after: 200 },
              color: "666666",
            }),

            // Title
            new Paragraph({
              text: lessonPlan.title,
              heading: HeadingLevel.HEADING_1,
              spacing: { after: 400 },
            }),

            // Metadata
            new Paragraph({
              children: [
                new TextRun({ text: "Grade: ", bold: true }),
                new TextRun(lessonPlan.grade),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Subject: ", bold: true }),
                new TextRun(lessonPlan.subject),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Duration: ", bold: true }),
                new TextRun(lessonPlan.duration),
              ],
              spacing: { after: 400 },
            }),

            // Learning Objectives
            new Paragraph({
              text: "Learning Objectives",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: lessonPlan.learningObjectives,
              spacing: { after: 400 },
            }),

            // Required Materials
            new Paragraph({
              text: "Required Materials",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: lessonPlan.requiredMaterials.join(", "),
              spacing: { after: 400 },
            }),

            // Teaching Methodology
            new Paragraph({
              text: "Teaching Methodology",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: lessonPlan.teachingMethodology.join(", "),
              spacing: { after: 400 },
            }),

            // Lesson Development
            new Paragraph({
              text: "Lesson Development",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),

            // Introduction
            new Paragraph({
              text: "Introduction",
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 100 },
            }),
            new Paragraph({
              text: lessonPlan.lessonDevelopment.introduction,
              spacing: { after: 300 },
            }),

            // Main Activities
            new Paragraph({
              text: "Main Activities",
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 100 },
            }),
            ...lessonPlan.lessonDevelopment.mainActivities.map(
              (activity) =>
                new Paragraph({
                  text: `• ${activity}`,
                  spacing: { after: 100 },
                })
            ),
            new Paragraph({ spacing: { after: 300 } }),

            // Practice
            new Paragraph({
              text: "Practice",
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 100 },
            }),
            new Paragraph({
              text: lessonPlan.lessonDevelopment.practice,
              spacing: { after: 300 },
            }),

            // Assessment
            new Paragraph({
              text: "Assessment",
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 100 },
            }),
            new Paragraph({
              text: lessonPlan.lessonDevelopment.assessment,
              spacing: { after: 300 },
            }),

            // Homework
            new Paragraph({
              text: "Homework",
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 100 },
            }),
            new Paragraph({
              text: lessonPlan.lessonDevelopment.homework,
              spacing: { after: 400 },
            }),

            // Adaptations (if present)
            ...(lessonPlan.adaptations && lessonPlan.adaptations !== "No special adaptations required."
              ? [
                  new Paragraph({
                    text: "Educational Adaptations",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400, after: 200 },
                  }),
                  new Paragraph({
                    text: lessonPlan.adaptations,
                    spacing: { after: 400 },
                  }),
                ]
              : []),

            // Teacher Notes
            new Paragraph({
              text: "Teacher Notes",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: lessonPlan.teacherNotes,
              spacing: { after: 400 },
            }),

            // AI Recommendations
            new Paragraph({
              text: "AI Recommendations",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            ...lessonPlan.aiRecommendations.map(
              (recommendation, index) =>
                new Paragraph({
                  text: `${index + 1}. ${recommendation}`,
                  spacing: { after: 100 },
                })
            ),
          ],
        },
      ],
    });

    // Generate and save the document
    Packer.toBlob(doc).then((blob) => {
      const filename = `lesson-plan-${this.sanitizeFilename(lessonPlan.title)}.docx`;
      saveAs(blob, filename);
    });
  }

  private sanitizeFilename(filename: string): string {
    return filename
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }
}

export const docxExportService = new DOCXExportService();
