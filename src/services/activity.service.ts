import { mockActivities } from "@/data/activities";
import type { Activity } from "@/types/Activity";

export const activityService = {
  async getAll(): Promise<Activity[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockActivities;
  },

  async getById(id: string): Promise<Activity | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockActivities.find((activity) => activity.id === id);
  },

  async getByLessonPlanId(lessonPlanId: string): Promise<Activity[]> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return mockActivities.filter((activity) => activity.lessonPlanId === lessonPlanId);
  },

  async generate(data: Omit<Activity, "id" | "generatedAt">): Promise<Activity> {
    // Simulate AI generation with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    const newActivity: Activity = {
      ...data,
      id: `activity_${Date.now()}`,
      generatedAt: new Date().toISOString(),
    };
    
    mockActivities.unshift(newActivity);
    return newActivity;
  },

  async delete(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = mockActivities.findIndex((activity) => activity.id === id);
    if (index === -1) return false;
    mockActivities.splice(index, 1);
    return true;
  },
};
