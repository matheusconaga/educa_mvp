import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUpload } from "@/components/documents/FileUpload";
import { UploadProgress } from "@/components/documents/UploadProgress";
import { DocumentHistory } from "@/components/documents/DocumentHistory";
import { useDocumentUpload } from "@/hooks/useDocumentUpload";
import { documentService } from "@/services/document.service";
import { mockDocuments } from "@/data/documents";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Documents() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documents, setDocuments] = useState(mockDocuments);
  const [showUpload, setShowUpload] = useState(true);

  const {
    currentStep,
    progress,
    isUploading,
    uploadDocument,
    reset,
  } = useDocumentUpload();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleClear = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const docId = await uploadDocument(selectedFile);

      // Refresh documents list
      const updatedDocs = await documentService.getAll();
      setDocuments(updatedDocs);

      setSelectedFile(null);
      reset();
      setShowUpload(false);

      // Navigate to analysis page
      navigate(`/documents/${docId}`);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await documentService.delete(id);
      const updatedDocs = await documentService.getAll();
      setDocuments(updatedDocs);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (isUploading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Enviando Documento</h1>
        </div>
        <UploadProgress currentStep={currentStep} progress={progress} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          
          <h1 className="text-4xl font-bold text-foreground">Documentos</h1>
        </div>
        {!showUpload && (
          <Button variant="primary" onClick={() => setShowUpload(true)}>
            Enviar Novo Documento
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch">
        {showUpload ? (
          <div className="space-y-6">
            <FileUpload
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              onClear={handleClear}
            />
            {selectedFile && (
              <div className="flex justify-end">
                <Button variant="primary" onClick={handleUpload}>
                  Enviar e Analisar
                </Button>
              </div>
            )}
          </div>
        ) : null}

        <DocumentHistory documents={documents} onDelete={handleDelete} />
      </div>
    </div>
  );
}
