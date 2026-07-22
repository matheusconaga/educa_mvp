import { Link } from "react-router-dom";
import { FileText, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Document } from "@/types/Document";
import { formatDate } from "@/utils/format";

interface DocumentHistoryProps {
  documents: Document[];
  onDelete?: (id: string) => void;
}

export function DocumentHistory({ documents, onDelete }: DocumentHistoryProps) {
  if (documents.length === 0) {
    return (
      <div className="rounded-3xl border border-border bg-card p-12 shadow-md text-center">
        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Nenhum documento ainda</h3>
        <p className="text-sm text-muted-foreground">
          Envie seu primeiro documento para começar com a análise alimentada por IA.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card shadow-md overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">Histórico de Documentos</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {documents.length} documento{documents.length !== 1 ? "s" : ""} enviado{documents.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="divide-y divide-border">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              <FileText className="h-5 w-5" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {doc.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">
                  {doc.type}
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(doc.uploadDate)}
                </span>
              </div>
            </div>

            {/* Status */}
            <div className="shrink-0">
              <span
                className={cn(
                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                  doc.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : doc.status === "Processing"
                    ? "bg-yellow-100 text-yellow-700"
                    : doc.status === "Error"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                )}
              >
                {doc.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {doc.status === "Completed" && (
                <Link to={`/documents/${doc.id}`}>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {onDelete && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(doc.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
