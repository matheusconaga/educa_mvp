import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CurriculumCoverage } from "@/types/Analytics";

interface CurriculumCoverageProps {
  coverage: CurriculumCoverage;
  onTopicClick: (topic: string) => void;
}

export function CurriculumCoverage({ coverage, onTopicClick }: CurriculumCoverageProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-6">Curriculum Coverage</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="p-5 rounded-2xl border border-border bg-muted/30"
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Annual Planning Progress</h3>
          </div>
          <div className="text-4xl font-bold text-primary mb-2">{coverage.progressPercentage}%</div>
          <div className="w-full bg-border rounded-full h-2 mb-3">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${coverage.progressPercentage}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Estimated completion: {coverage.estimatedCompletion}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-5 rounded-2xl border border-border bg-muted/30"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">Topics Completed</span>
              </div>
              <span className="font-semibold text-foreground">{coverage.topicsCompleted}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-muted-foreground">Remaining Topics</span>
              </div>
              <span className="font-semibold text-foreground">{coverage.remainingTopics}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Upcoming Priority Topics */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Upcoming Priority Topics</h3>
        <div className="flex flex-wrap gap-2">
          {coverage.upcomingPriorityTopics.map((topic) => (
            <Button
              key={topic}
              variant="outline"
              size="sm"
              onClick={() => onTopicClick(topic)}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
