import { useState, useCallback } from "react";
import { documentService } from "@/services/document.service";
import type { ProcessingStep } from "@/components/documents/UploadProgress";

export function useDocumentUpload() {
  const [currentStep, setCurrentStep] = useState<ProcessingStep>("uploading");
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedDocumentId, setUploadedDocumentId] = useState<string | null>(null);

  const uploadDocument = useCallback(async (file: File) => {
    setIsUploading(true);
    setCurrentStep("uploading");
    setProgress(0);

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setProgress(i);
      }

      setCurrentStep("validating");
      setProgress(0);

      // Simulate validating document
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setProgress(i);
      }

      setCurrentStep("reading");
      setProgress(0);

      // Simulate reading document
      for (let i = 0; i <= 100; i += 15) {
        await new Promise(resolve => setTimeout(resolve, 400));
        setProgress(i);
      }

      setCurrentStep("extracting");
      setProgress(0);

      // Simulate extracting topics
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProgress(i);
      }

      setCurrentStep("mapping");
      setProgress(0);

      // Simulate mapping competencies
      for (let i = 0; i <= 100; i += 25) {
        await new Promise(resolve => setTimeout(resolve, 400));
        setProgress(i);
      }

      setCurrentStep("generating");
      setProgress(0);

      // Simulate generating insights
      for (let i = 0; i <= 100; i += 25) {
        await new Promise(resolve => setTimeout(resolve, 600));
        setProgress(i);
      }

      setCurrentStep("completed");
      setProgress(100);

      // Actually upload the document via service
      const document = await documentService.upload(file);
      setUploadedDocumentId(document.id);

      return document.id;
    } catch (error) {
      console.error("Upload failed:", error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setCurrentStep("uploading");
    setProgress(0);
    setIsUploading(false);
    setUploadedDocumentId(null);
  }, []);

  return {
    currentStep,
    progress,
    isUploading,
    uploadedDocumentId,
    uploadDocument,
    reset,
  };
}
