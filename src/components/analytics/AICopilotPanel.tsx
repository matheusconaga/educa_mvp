import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AICopilotMessage } from "@/types/Analytics";

interface AICopilotPanelProps {
  messages: AICopilotMessage[];
  onAction: (message: AICopilotMessage, action: string) => void;
}

export function AICopilotPanel({ messages, onAction }: AICopilotPanelProps) {
  return (
    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Bot className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">AI Copilot</h2>
        <Sparkles className="h-4 w-4 text-primary animate-pulse" />
      </div>

      <div className="space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl bg-card border border-border"
          >
            <div className="flex items-start gap-3 mb-3">
              <Bot className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-foreground text-sm mb-2">{message.message}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {message.context}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {message.actions.map((action) => (
                <Button
                  key={action.action}
                  variant="outline"
                  size="sm"
                  onClick={() => onAction(message, action.action)}
                  className="text-xs"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
