import type { AssessmentHistory } from "@/types/Assessment";

export const mockAssessmentHistory: AssessmentHistory[] = [
  {
    id: "assessment-1",
    title: "Activity: Photosynthesis",
    type: "activity",
    subject: "Biology",
    grade: "8th Grade",
    topic: "Photosynthesis",
    generatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "assessment-2",
    title: "Test: Quadratic Equations",
    type: "test",
    subject: "Mathematics",
    grade: "9th Grade",
    topic: "Quadratic Equations",
    generatedAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "assessment-3",
    title: "Assignment: World War II Research",
    type: "assignment",
    subject: "History",
    grade: "High School",
    topic: "World War II",
    generatedAt: "2024-01-13T09:15:00Z",
  },
  {
    id: "assessment-4",
    title: "Activity: Chemical Reactions",
    type: "activity",
    subject: "Chemistry",
    grade: "7th Grade",
    topic: "Chemical Reactions",
    generatedAt: "2024-01-12T11:45:00Z",
  },
  {
    id: "assessment-5",
    title: "Test: Reading Comprehension",
    type: "test",
    subject: "Portuguese",
    grade: "6th Grade",
    topic: "Reading Comprehension",
    generatedAt: "2024-01-11T16:00:00Z",
  },
];
