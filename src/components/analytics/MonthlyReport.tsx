import { motion } from "framer-motion";
import { FileText, Download, CheckCircle, XCircle, TrendingUp, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MonthlyReport } from "@/types/Analytics";

interface MonthlyReportProps {
  report: MonthlyReport;
  onExportPDF: () => void;
  onExportDOCX: () => void;
}

export function MonthlyReport({ report, onExportPDF, onExportDOCX }: MonthlyReportProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Monthly AI Report</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onExportPDF}>
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
          <Button variant="outline" size="sm" onClick={onExportDOCX}>
            <Download className="h-4 w-4 mr-2" />
            DOCX
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Header */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">{report.month} {report.year}</h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Time Saved: {report.estimatedTimeSaved}</span>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Strengths
          </h4>
          <ul className="space-y-2">
            {report.strengths.map((strength, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="text-green-500 mt-1">•</span>
                {strength}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <XCircle className="h-4 w-4 text-red-500" />
            Weaknesses
          </h4>
          <ul className="space-y-2">
            {report.weaknesses.map((weakness, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="text-red-500 mt-1">•</span>
                {weakness}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-orange-500" />
              Most Difficult Topics
            </h4>
            <div className="space-y-2">
              {report.mostDifficultTopics.map((topic, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg bg-orange-500/10 text-orange-600 text-sm"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-green-500" />
              Most Successful Topics
            </h4>
            <div className="space-y-2">
              {report.mostSuccessfulTopics.map((topic, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg bg-green-500/10 text-green-600 text-sm"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Recommended Actions
          </h4>
          <ul className="space-y-2">
            {report.recommendedActions.map((action, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="text-primary mt-1">→</span>
                {action}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Educational Highlights */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            Educational Highlights
          </h4>
          <ul className="space-y-2">
            {report.educationalHighlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="text-yellow-500 mt-1">★</span>
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
