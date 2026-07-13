import { motion, AnimatePresence } from "framer-motion";
import { Book, Video, HelpCircle, MessageSquare, Bug, Info, ChevronRight, ExternalLink } from "lucide-react";

interface HelpDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpDropdown({ isOpen, onClose }: HelpDropdownProps) {
  const documentationItems = [
    { icon: Book, label: "Documentation", description: "Learn how to use EducAssist" },
    { icon: Video, label: "Tutorials", description: "Video guides and walkthroughs" },
    { icon: HelpCircle, label: "FAQ", description: "Frequently asked questions" },
  ];

  const supportItems = [
    { icon: MessageSquare, label: "Contact Support", description: "Get help from our team" },
    { icon: Bug, label: "Report a Bug", description: "Report issues or feedback" },
    { icon: Info, label: "About EducAssist", description: "Learn more about us" },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute right-0 top-full mt-2 w-80 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-xl z-50 overflow-hidden"
      >
        <div className="p-4 border-b border-border/50">
          <h3 className="font-semibold text-foreground">Help</h3>
        </div>

        <div className="p-2">
          {/* Documentation Section */}
          <div className="mb-1">
            <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Documentation</p>
            {documentationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={onClose}
                  className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-all duration-200 text-left group"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                </button>
              );
            })}
          </div>

          {/* Support Section */}
          <div className="pt-2 border-t border-border/50 mt-2">
            <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Support</p>
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={onClose}
                  className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-all duration-200 text-left group"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
