export const AI_DELAY_MIN = 1500;
export const AI_DELAY_MAX = 3500;
export const UPLOAD_DELAY = 1500;
export const ANALYSIS_DELAY = 2500;
export const GENERATION_DELAY = 3000;

export const MAX_UPLOAD_SIZE = 10 * 1024 * 1024; // 10MB

export const SUPPORTED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
] as const;

export const FILE_TYPE_EXTENSIONS = {
  PDF: "pdf",
  DOCX: "docx",
  PNG: "png",
  JPEG: "jpeg",
} as const;
