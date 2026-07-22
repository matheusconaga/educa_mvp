import { Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalyticsFiltersProps {
  onExportReport: () => void;
  onFilterChange: (filters: any) => void;
}

export function AnalyticsFilters({ onExportReport, onFilterChange }: AnalyticsFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="flex flex-wrap gap-3">
        <select
          className="px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          onChange={(e) => onFilterChange({ dateRange: e.target.value })}
        >
          <option value="last-6-months">Últimos 6 Meses</option>
          <option value="last-3-months">Últimos 3 Meses</option>
          <option value="last-month">Último Mês</option>
          <option value="this-year">Este Ano</option>
        </select>
        <select
          className="px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          onChange={(e) => onFilterChange({ classId: e.target.value })}
        >
          <option value="">Todas as Turmas</option>
          <option value="cls_a13f52bc">9ª Série A</option>
          <option value="cls_b73ca112">1º Ano B</option>
          <option value="cls_98fa12bc">8ª Série C</option>
        </select>
        <select
          className="px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          onChange={(e) => onFilterChange({ subject: e.target.value })}
        >
          <option value="">Todas as Disciplinas</option>
          <option value="Mathematics">Matemática</option>
          <option value="Science">Ciências</option>
          <option value="History">História</option>
          <option value="Portuguese">Português</option>
        </select>
        <select
          className="px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          onChange={(e) => onFilterChange({ schoolYear: e.target.value })}
        >
          <option value="">Todos os Anos</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => onFilterChange({})}>
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
        <Button onClick={onExportReport}>
          <Download className="h-4 w-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>
    </div>
  );
}
