import { mockLessonPlans } from "@/data/lessonPlans";
import type { LessonPlan } from "@/types/LessonPlan";

export const lessonPlanService = {
  async getAll(): Promise<LessonPlan[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockLessonPlans;
  },

  async getById(id: string): Promise<LessonPlan | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockLessonPlans.find((plan) => plan.id === id);
  },

  async getByClassId(classId: string): Promise<LessonPlan[]> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return mockLessonPlans.filter((plan) => plan.classId === classId);
  },

  async generate(data: Omit<LessonPlan, "id" | "createdAt">): Promise<LessonPlan> {
    // Simulate AI generation with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const newLessonPlan: LessonPlan = {
      ...data,
      id: `plan_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    
    mockLessonPlans.unshift(newLessonPlan);
    return newLessonPlan;
  },

  async update(id: string, data: Partial<LessonPlan>): Promise<LessonPlan | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const index = mockLessonPlans.findIndex((plan) => plan.id === id);
    if (index === -1) return undefined;
    mockLessonPlans[index] = { ...mockLessonPlans[index], ...data };
    return mockLessonPlans[index];
  },

  async delete(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = mockLessonPlans.findIndex((plan) => plan.id === id);
    if (index === -1) return false;
    mockLessonPlans.splice(index, 1);
    return true;
  },
};
