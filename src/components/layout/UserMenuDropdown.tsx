import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, LogOut, Globe, Palette, Shield, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserMenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserMenuDropdown({ isOpen, onClose }: UserMenuDropdownProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
    onClose();
  };

  const accountItems = [
    { icon: User, label: "Meu Perfil", action: () => {} },
    { icon: Settings, label: "Configurações da Conta", action: () => {} },
  ];

  const preferenceItems = [
    { icon: Globe, label: "Idioma", action: () => {} },
    { icon: Palette, label: "Aparência", action: () => {} },
    { icon: Shield, label: "Privacidade", action: () => {} },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute right-0 top-full mt-2 w-72 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-xl z-50 overflow-hidden"
      >
        {/* User Profile Header */}
        <div className="p-4 border-b border-border/50 bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/20">
              <span className="text-xl font-semibold text-primary">M</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">Matheus</p>
              <p className="text-xs text-muted-foreground truncate">matheus@educassist.com</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2">
          {/* Account Section */}
          <div className="mb-1">
            <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Conta</p>
            {accountItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-all duration-200 text-left group"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })}
          </div>

          {/* Preferences Section */}
          <div className="mb-1">
            <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Preferências</p>
            {preferenceItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-all duration-200 text-left group"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })}
          </div>

          {/* Logout */}
          <div className="pt-2 border-t border-border/50 mt-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-500/10 transition-all duration-200 text-left group"
            >
              <LogOut className="h-4 w-4 text-red-600 group-hover:text-red-700 transition-colors" />
              <span className="text-sm font-medium text-red-600 group-hover:text-red-700 transition-colors flex-1">Sair</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
