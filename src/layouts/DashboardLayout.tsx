import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  ClipboardList,
  Sparkles,
  ChartColumn,
  Menu,
  X,
  Plus,
  Bell,
  HelpCircle,
  Settings,
  LifeBuoy
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { NotificationDropdown } from "@/components/layout/NotificationDropdown";
import { HelpDropdown } from "@/components/layout/HelpDropdown";
import { UserMenuDropdown } from "@/components/layout/UserMenuDropdown";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Classes", href: "/classes", icon: BookOpen },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Lesson Plans", href: "/lesson-plans", icon: ClipboardList },
    { name: "Activities", href: "/activities", icon: Sparkles },
    { name: "Analytics", href: "/analytics", icon: ChartColumn },
  ];

  const bottomNavigation = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Support", href: "/support", icon: LifeBuoy },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card/95 backdrop-blur-sm border-r border-border/50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:overflow-hidden md:w-56",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-border/50 px-6 shrink-0">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src={logo} alt="EducAssist" className="h-40 w-40" />
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation - Scrollable */}
          <nav className="flex-1 overflow-y-auto space-y-1 px-3 py-4">
            <Button size="md" className="w-full shrink-0 rounded-xl">
              <Plus className="h-4 w-4 mr-2" />
              Gerar Novo Plano
            </Button>

            <div className="pt-4 pb-2 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <item.icon className={cn(
                      "h-5 w-5 transition-colors",
                      isActive(item.href) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                    <span className="flex-1">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Bottom Navigation - Settings & Support */}
          <div className="border-t border-border/50 p-3 shrink-0">
            <div className="space-y-1">
              {bottomNavigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 + 0.3 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <item.icon className={cn(
                      "h-5 w-5 transition-colors",
                      isActive(item.href) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                    <span className="flex-1">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-0 h-screen overflow-hidden">
        {/* Header - Sticky */}
        <header className="flex h-16 items-center justify-between border-b border-border/50 bg-card/95 backdrop-blur-sm px-4 lg:px-6 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px]"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="ml-auto flex items-center gap-1">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotificationOpen(!notificationOpen);
                  setHelpOpen(false);
                  setUserMenuOpen(false);
                }}
                className="hover:cursor-pointer relative p-2.5 rounded-xl hover:bg-muted/50 transition-all duration-200 text-muted-foreground hover:text-foreground group min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-card" />
              </button>
              <NotificationDropdown isOpen={notificationOpen} onClose={() => setNotificationOpen(false)} />
            </div>

            {/* Help */}
            <div className="relative">
              <button
                onClick={() => {
                  setHelpOpen(!helpOpen);
                  setNotificationOpen(false);
                  setUserMenuOpen(false);
                }}
                className="hover:cursor-pointer p-2.5 rounded-xl hover:bg-muted/50 transition-all duration-200 text-muted-foreground hover:text-foreground group min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0"
                aria-label="Help"
              >
                <HelpCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              </button>
              <HelpDropdown isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                  setNotificationOpen(false);
                  setHelpOpen(false);
                }}
                className="hover:cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-200 ring-2 ring-transparent hover:ring-primary/20 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0"
                aria-label="User menu"
              >
                <span className="text-sm font-semibold text-primary">M</span>
              </button>
              <UserMenuDropdown isOpen={userMenuOpen} onClose={() => setUserMenuOpen(false)} />
            </div>
          </div>
        </header>

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
