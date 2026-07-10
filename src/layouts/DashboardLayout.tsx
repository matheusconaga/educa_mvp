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
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Classes", href: "/classes", icon: BookOpen },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Lesson Plans", href: "/lesson-plans", icon: ClipboardList },
    { name: "Activities", href: "/activities", icon: Sparkles },
    { name: "Analytics", href: "/analytics", icon: ChartColumn },
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
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:overflow-hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-border px-6 shrink-0">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src={logo} alt="EducAssist" className="h-40 w-40" />
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation - Scrollable */}
          <nav className="flex-1 overflow-y-auto space-y-1 px-3 py-4">
            <Button size="md" className="w-full shrink-0">
              <Plus className="h-4 w-4" />
              Gerar Novo Plano
            </Button>

            <div className="pt-4 pb-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* User Section - Pinned at bottom */}
          <div className="border-t border-border p-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-semibold text-primary">T</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Matheus</p>
                <p className="text-xs text-muted-foreground truncate">matheus@educassist.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-0 h-screen overflow-hidden">
        {/* Header - Sticky */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Landing Page
            </Link>
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
