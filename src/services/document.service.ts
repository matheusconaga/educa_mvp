import { mockDocuments } from "@/data/documents";
import { mockDocumentAnalysis } from "@/data/documentAnalysis";
import type { Document, DocumentStatus } from "@/types/Document";
import type { DocumentAnalysis } from "@/types/DocumentAnalysis";

export const documentService = {
  async getAll(): Promise<Document[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockDocuments;
  },

  async getById(id: string): Promise<Document | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockDocuments.find((doc) => doc.id === id);
  },

  async upload(file: File): Promise<Document> {
    // Simulate upload process with status updates
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const newDocument: Document = {
      id: `doc_${Date.now()}`,
      title: file.name,
      type: file.name.split(".").pop()?.toUpperCase() || "UNKNOWN",
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadDate: new Date().toISOString(),
      status: "Completed",
    };
    
    mockDocuments.unshift(newDocument);
    return newDocument;
  },

  async analyze(documentId: string): Promise<DocumentAnalysis> {
    // Simulate AI analysis with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    const analysis: DocumentAnalysis = {
      id: `analysis_${Date.now()}`,
      documentId,
      topics: ["Topic 1", "Topic 2", "Topic 3"],
      skills: ["Skill 1", "Skill 2"],
      competencies: ["Competency 1", "Competency 2"],
      estimatedHours: 10,
      difficulty: "Medium",
      complexity: 65,
      pedagogicalDensity: 70,
      riskLevel: "Low",
      recommendations: ["Recommendation 1", "Recommendation 2"],
      generatedAt: new Date().toISOString(),
    };
    
    mockDocumentAnalysis.push(analysis);
    
    // Update document with analysis ID
    const docIndex = mockDocuments.findIndex((doc) => doc.id === documentId);
    if (docIndex !== -1) {
      mockDocuments[docIndex].analysisId = analysis.id;
    }
    
    return analysis;
  },

  async getAnalysis(documentId: string): Promise<DocumentAnalysis | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockDocumentAnalysis.find((analysis) => analysis.documentId === documentId);
  },

  async updateStatus(id: string, status: DocumentStatus): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = mockDocuments.findIndex((doc) => doc.id === id);
    if (index === -1) return false;
    mockDocuments[index].status = status;
    return true;
  },

  async delete(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = mockDocuments.findIndex((doc) => doc.id === id);
    if (index === -1) return false;
    mockDocuments.splice(index, 1);
    return true;
  },
};
