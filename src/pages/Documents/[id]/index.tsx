import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentAnalysisView } from "@/components/documents/DocumentAnalysis";
import { documentService } from "@/services/document.service";
import type { Document } from "@/types/Document";
import type { DocumentAnalysis } from "@/types/DocumentAnalysis";

export default function DocumentAnalysisPage() {
  const { id } = useParams<{ id: string }>();
  const [document, setDocument] = useState<Document | null>(null);
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!id) return;

      try {
        setLoading(true);
        const [docData, analysisData] = await Promise.all([
          documentService.getById(id),
          documentService.getAnalysis(id),
        ]);
        
        setDocument(docData || null);
        setAnalysis(analysisData || null);
      } catch (error) {
        console.error("Failed to load document:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Loading analysis...</p>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="rounded-3xl border border-border bg-card p-12 shadow-md text-center">
        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Document not found</h3>
        <p className="text-sm text-muted-foreground mb-4">
          The document you're looking for doesn't exist or has been deleted.
        </p>
        <Link to="/documents">
          <Button variant="primary">Back to Documents</Button>
        </Link>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/documents">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">{document.title}</h1>
        </div>
        <div className="rounded-3xl border border-border bg-card p-12 shadow-md text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Analysis not available</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This document hasn't been analyzed yet.
          </p>
          <Link to="/documents">
            <Button variant="primary">Back to Documents</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/documents">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-foreground">{document.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Uploaded on {new Date(document.uploadDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <DocumentAnalysisView analysis={analysis} />
    </div>
  );
}
