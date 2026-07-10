export type DocumentStatus = "Pending" | "Uploading" | "Processing" | "Completed" | "Error";

export interface Document {
  id: string;
  title: string;
  type: string;
  size: string;
  uploadDate: string;
  status: DocumentStatus;
  analysisId?: string;
}
