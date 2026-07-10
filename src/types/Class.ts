export interface Class {
  id: string;
  name: string;
  subject: string;
  grade: string;
  students: number;
  averageLevel: "Low" | "Medium" | "High";
  difficulties: string[];
  calendar: string;
  description: string;
  createdAt: string;
}
