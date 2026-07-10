import { mockAnalytics } from "@/data/analytics";
import type { Analytics } from "@/types/Analytics";

export const analyticsService = {
  async get(): Promise<Analytics> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockAnalytics;
  },

  async updateMetrics(): Promise<Analytics> {
    // Simulate real-time analytics update
    await new Promise((resolve) => setTimeout(resolve, 800));
    return mockAnalytics;
  },
};
