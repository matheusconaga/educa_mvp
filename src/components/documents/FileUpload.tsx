import { useState, useCallback, useRef } from "react";
import { Upload, FileText, X, File, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClear: () => void;
}

export function FileUpload({ onFileSelect, selectedFile, onClear }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        if (isValidFile(file)) {
          onFileSelect(file);
        }
      }
    },
    [onFileSelect]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (isValidFile(file)) {
          onFileSelect(file);
        }
      }
    },
    [onFileSelect]
  );

  const isValidFile = (file: File): boolean => {
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const validExtensions = [".pdf", ".docx"];
    return (
      validTypes.includes(file.type) ||
      validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
    );
  };

  const getFileType = (file: File): string => {
    if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
      return "PDF";
    }
    if (file.name.endsWith(".docx")) {
      return "Word";
    }
    return file.type.split("/")[1]?.toUpperCase() || "FILE";
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleReplace = () => {
    onClear();
    fileInputRef.current?.click();
  };

  if (selectedFile) {
    return (
      <div className="rounded-3xl border-2 border-border bg-card p-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FileText className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground truncate">{selectedFile.name}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{getFileType(selectedFile)}</span>
              <span>•</span>
              <span>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReplace}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Replace
            </Button>
            <Button variant="ghost" size="sm" onClick={onClear}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "rounded-3xl border-2 border-dashed border-border bg-card p-12 shadow-md transition-all cursor-pointer",
        isDragging ? "border-primary bg-primary/5" : "hover:border-primary/50"
      )}
      onClick={handleButtonClick}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Upload className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-medium text-foreground">
            Drag & drop your document here
          </p>
          <p className="text-sm text-muted-foreground">
            or click to browse files
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
       
        <div className="space-y-2 ">
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-1">Supported formats:</p>
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <File className="h-4 w-4" />
                PDF (.pdf)
              </span>
              <span className="flex items-center gap-1">
                <File className="h-4 w-4" />
                Word (.docx)
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Maximum file size: 10 MB
          </p>
        </div>
      </div>
    </div>
  );
}
