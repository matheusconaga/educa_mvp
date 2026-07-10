import { mockClasses } from "@/data/classes";
import type { Class } from "@/types/Class";

export const classService = {
  async getAll(): Promise<Class[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockClasses;
  },

  async getById(id: string): Promise<Class | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockClasses.find((cls) => cls.id === id);
  },

  async create(data: Omit<Class, "id" | "createdAt">): Promise<Class> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newClass: Class = {
      ...data,
      id: `cls_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    mockClasses.push(newClass);
    return newClass;
  },

  async update(id: string, data: Partial<Class>): Promise<Class | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const index = mockClasses.findIndex((cls) => cls.id === id);
    if (index === -1) return undefined;
    mockClasses[index] = { ...mockClasses[index], ...data };
    return mockClasses[index];
  },

  async delete(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = mockClasses.findIndex((cls) => cls.id === id);
    if (index === -1) return false;
    mockClasses.splice(index, 1);
    return true;
  },
};
