import { Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClassHeaderProps {
  onCreateClass: () => void;
  onFilter: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ClassHeader({ onCreateClass, onFilter, searchQuery, onSearchChange }: ClassHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Minhas Turmas</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie suas turmas, alunos e progresso educacional.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar turmas..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" onClick={onFilter}>
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          <Button onClick={onCreateClass}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Turma
          </Button>
        </div>
      </div>
    </div>
  );
}
