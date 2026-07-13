import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Edit, Lock, FileText, Globe, Palette, Accessibility, Shield, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: "system",
    language: "english",
    emailNotifications: true,
    systemNotifications: true,
    lessonPlanAlerts: true,
    activityAlerts: true,
    documentProcessing: true,
    weeklySummary: true,
    marketingEmails: false,
    defaultExport: "pdf",
    animations: true,
    compactMode: false,
    fontSize: "medium",
    highContrast: false,
    reducedMotion: false,
    twoFactorAuth: false,
  });

  const handleSave = () => {
    console.log("Saving settings:", settings);
  };

  const handleCancel = () => {
    console.log("Cancelling changes");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your preferences, notifications and account.
        </p>
      </div>

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <Palette className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Appearance</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Theme</label>
            <div className="flex gap-3">
              {["light", "dark", "system"].map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSettings({ ...settings, theme })}
                  className={cn(
                    "px-4 py-2 rounded-xl border transition-colors",
                    settings.theme === theme
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted"
                  )}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Language */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Language</h2>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Language</label>
          <select
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="english">English</option>
            <option value="portuguese">Português</option>
            <option value="spanish">Español</option>
          </select>
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Notifications</h2>
        </div>

        <div className="space-y-4">
          {[
            { key: "emailNotifications", label: "Email Notifications" },
            { key: "systemNotifications", label: "System Notifications" },
            { key: "lessonPlanAlerts", label: "Lesson Plan Alerts" },
            { key: "activityAlerts", label: "Activity Alerts" },
            { key: "documentProcessing", label: "Document Processing" },
            { key: "weeklySummary", label: "Weekly Summary" },
            { key: "marketingEmails", label: "Marketing Emails" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <span className="text-sm text-foreground">{item.label}</span>
              <button
                onClick={() => setSettings({ ...settings, [item.key]: !settings[item.key as keyof typeof settings] })}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  settings[item.key as keyof typeof settings] ? "bg-primary" : "bg-border"
                )}
              >
                <span
                  className={cn(
                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                    settings[item.key as keyof typeof settings] ? "translate-x-6" : "translate-x-1"
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Account */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <User className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Account</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-semibold text-primary">M</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Matheus</p>
              <p className="text-sm text-muted-foreground">matheus@educassist.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Teacher Name</label>
              <input
                type="text"
                defaultValue="Matheus"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <input
                type="email"
                defaultValue="matheus@educassist.com"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">School</label>
              <input
                type="text"
                defaultValue="EducAssist School"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Role</label>
              <input
                type="text"
                defaultValue="Teacher"
                className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" className="flex-1">
              <Lock className="h-4 w-4 mr-2" />
              Change Password
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Application */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Application</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Default Export</label>
            <div className="flex gap-3">
              {["pdf", "docx"].map((format) => (
                <button
                  key={format}
                  onClick={() => setSettings({ ...settings, defaultExport: format })}
                  className={cn(
                    "px-4 py-2 rounded-xl border transition-colors",
                    settings.defaultExport === format
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted"
                  )}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Animations</span>
            <button
              onClick={() => setSettings({ ...settings, animations: !settings.animations })}
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                settings.animations ? "bg-primary" : "bg-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  settings.animations ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Compact Mode</span>
            <button
              onClick={() => setSettings({ ...settings, compactMode: !settings.compactMode })}
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                settings.compactMode ? "bg-primary" : "bg-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  settings.compactMode ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Accessibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <Accessibility className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Accessibility</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Font Size</label>
            <select
              value={settings.fontSize}
              onChange={(e) => setSettings({ ...settings, fontSize: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">High Contrast</span>
            <button
              onClick={() => setSettings({ ...settings, highContrast: !settings.highContrast })}
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                settings.highContrast ? "bg-primary" : "bg-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  settings.highContrast ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Reduced Motion</span>
            <button
              onClick={() => setSettings({ ...settings, reducedMotion: !settings.reducedMotion })}
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                settings.reducedMotion ? "bg-primary" : "bg-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  settings.reducedMotion ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Privacy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Privacy</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Two-factor Authentication</span>
            <button
              onClick={() => setSettings({ ...settings, twoFactorAuth: !settings.twoFactorAuth })}
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                settings.twoFactorAuth ? "bg-primary" : "bg-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  settings.twoFactorAuth ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Manage Sessions
            </Button>
            <Button variant="outline" className="flex-1 text-red-600 hover:bg-red-500/10">
              Delete Account
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex gap-3 justify-end"
      >
        <Button variant="outline" onClick={handleCancel}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </motion.div>
    </div>
  );
}
