import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCircle, FileText, Sparkles, ClipboardList, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  timestamp: string;
  unread: boolean;
}

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      title: "Lesson Plan successfully generated",
      description: "Your lesson plan for Mathematics is ready.",
      timestamp: "2m ago",
      unread: true,
    },
    {
      id: "2",
      icon: <FileText className="h-4 w-4 text-blue-500" />,
      title: "Document analyzed",
      description: "Your document has been processed successfully.",
      timestamp: "15m ago",
      unread: true,
    },
    {
      id: "3",
      icon: <Sparkles className="h-4 w-4 text-purple-500" />,
      title: "Activity exported",
      description: "Your activity has been exported to PDF.",
      timestamp: "1h ago",
      unread: false,
    },
    {
      id: "4",
      icon: <ClipboardList className="h-4 w-4 text-orange-500" />,
      title: "Assessment completed",
      description: "Class 9A has completed the Fractions assessment.",
      timestamp: "2h ago",
      unread: false,
    },
    {
      id: "5",
      icon: <AlertTriangle className="h-4 w-4 text-red-500" />,
      title: "AI generated a new recommendation",
      description: "Students from Class 9A are struggling with Fractions.",
      timestamp: "3h ago",
      unread: false,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute right-0 top-full mt-2 w-96 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-xl z-50 overflow-hidden"
      >
        <div className="p-4 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                {unreadCount}
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
              <Check className="h-3 w-3 mr-1" />
              Mark all read
            </Button>
          )}
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "p-4 border-b border-border/50 hover:bg-muted/50 transition-colors cursor-pointer group",
                  notification.unread && "bg-primary/5 border-l-2 border-l-primary"
                )}
              >
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "flex-shrink-0 mt-0.5 p-2 rounded-lg",
                    notification.unread ? "bg-primary/10" : "bg-muted/50"
                  )}>
                    {notification.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground">{notification.title}</p>
                      {notification.unread && (
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{notification.description}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{notification.timestamp}</span>
                    </div>
                  </div>
                  {notification.unread && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-3 border-t border-border/50 bg-muted/30">
          <Button variant="ghost" className="w-full text-sm" onClick={onClose}>
            View All Notifications
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
