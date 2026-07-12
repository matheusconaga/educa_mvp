import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  Packer,
} from "docx";
import { saveAs } from "file-saver";
import type { GeneratedAssessment } from "@/types/Assessment";

export class AssessmentDOCXExportService {
  exportAssessment(assessment: GeneratedAssessment): void {
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
            }),

            // Title
            new Paragraph({
              text: assessment.title,
              heading: HeadingLevel.HEADING_1,
              spacing: { after: 400 },
            }),

            // Metadata
            new Paragraph({
              children: [
                new TextRun({ text: "Subject: ", bold: true }),
                new TextRun(assessment.subject),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Grade: ", bold: true }),
                new TextRun(assessment.grade),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Topic: ", bold: true }),
                new TextRun(assessment.topic),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Duration: ", bold: true }),
                new TextRun(assessment.estimatedTime),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Difficulty: ", bold: true }),
                new TextRun(assessment.difficulty),
              ],
              spacing: { after: 400 },
            }),

            // Instructions
            new Paragraph({
              text: "Instructions",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: assessment.instructions,
              spacing: { after: 400 },
            }),

            // Questions
            new Paragraph({
              text: "Questions",
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 400, after: 200 },
            }),
            ...assessment.questions.flatMap((question, index) => [
              new Paragraph({
                text: `Q${index + 1}. [${question.type}] (${question.points} pts)`,
                heading: HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 },
              }),
              new Paragraph({
                text: question.text,
                spacing: { after: 200 },
              }),
              ...(question.options
                ? question.options.map(
                    (option) =>
                      new Paragraph({
                        text: `  ${String.fromCharCode(65 + question.options!.indexOf(option))}. ${option}`,
                        spacing: { after: 100 },
                      })
                  )
                : []),
              new Paragraph({ spacing: { after: 300 } }),
            ]),

            // Answer Key (if present)
            ...(assessment.answerKey
              ? [
                  new Paragraph({
                    text: "Answer Key",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400, after: 200 },
                  }),
                  new Paragraph({
                    text: assessment.answerKey,
                    spacing: { after: 400 },
                  }),
                ]
              : []),

            // Evaluation Rubric (if present)
            ...(assessment.evaluationRubric
              ? [
                  new Paragraph({
                    text: "Evaluation Rubric",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400, after: 200 },
                  }),
                  new Paragraph({
                    text: assessment.evaluationRubric,
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
              text: assessment.teacherNotes,
              spacing: { after: 400 },
            }),
          ],
        },
      ],
    });

    // Generate and save the document
    Packer.toBlob(doc).then((blob) => {
      const filename = `assessment-${this.sanitizeFilename(assessment.title)}.docx`;
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

export const assessmentDOCXExportService = new AssessmentDOCXExportService();
