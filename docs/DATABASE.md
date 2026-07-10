# DATABASE.md

# EducAssist Database Design

Version: MVP 1.0

---

# Overview

Although the MVP does not use a real database, the application must be designed as if one already exists.

The frontend architecture should mirror the future database structure, making it easy to replace mocked data with real API calls later.

Current data source:

- Mock JSON files
- Local Storage (optional)

Future data source:

- PostgreSQL
- Supabase
- Firebase
- Any REST API

---

# Database Philosophy

The data model follows these principles:

- Normalized structure
- UUID primary keys
- Soft relationships
- Future-ready
- AI-friendly
- Easy reporting

---

# Entity Relationship Diagram (Simplified)

```
Teacher
   │
   ├──────────────┐
   │              │
   ▼              ▼
Classes      Documents
   │              │
   ▼              ▼
Students   AI Analysis
   │
   ▼
Lesson Plans
   │
   ▼
Activities
   │
   ▼
Analytics
```

---

# Entities

The MVP should simulate the following entities.

- Teacher
- Class
- Student
- Document
- Document Analysis
- Lesson Plan
- Activity
- Analytics

Even if some entities are not fully implemented, they should already exist conceptually.

---

# teachers

Represents a teacher using EducAssist.

Future Table

```ts
Teacher {
  id: string
  name: string
  email: string
  avatar: string
  school: string
  createdAt: string
}
```

Mock file

```
src/data/teachers.ts
```

---

# classes

Represents a classroom.

```ts
Class {
  id: string
  name: string
  subject: string
  grade: string
  students: number
  averageLevel: "Low" | "Medium" | "High"
  difficulties: string[]
  calendar: string
  description: string
  createdAt: string
}
```

Example

```json
{
  "id": "class-001",
  "name": "9th Grade A",
  "subject": "Mathematics",
  "grade": "9th Grade",
  "students": 28,
  "averageLevel": "Medium",
  "difficulties": [
    "Fractions",
    "Equations"
  ],
  "calendar": "Morning",
  "description": "Regular classroom."
}
```

---

# students

Students belong to one class.

```ts
Student {
  id: string
  classId: string
  name: string
  performance: number
  engagement: number
  strengths: string[]
  weaknesses: string[]
}
```

---

# documents

Uploaded educational documents.

Supported types

- PDF
- DOCX
- PNG
- JPG

```ts
Document {
  id: string
  title: string
  type: string
  size: string
  uploadDate: string
  status:
    | "Pending"
    | "Processing"
    | "Completed"
    | "Error"
  analysisId: string
}
```

Example

```json
{
  "id": "doc-001",
  "title": "Annual Planning.pdf",
  "type": "PDF",
  "status": "Completed"
}
```

---

# document_analysis

Stores the AI-generated analysis.

```ts
DocumentAnalysis {
  id: string
  documentId: string

  topics: string[]

  skills: string[]

  competencies: string[]

  estimatedHours: number

  difficulty:
    | "Easy"
    | "Medium"
    | "Hard"

  complexity: number

  pedagogicalDensity: number

  riskLevel: string

  recommendations: string[]

  generatedAt: string
}
```

Example

```json
{
  "topics": [
    "Fractions",
    "Decimals",
    "Geometry"
  ],
  "difficulty": "Medium",
  "estimatedHours": 12
}
```

---

# lesson_plans

Generated lesson plans.

```ts
LessonPlan {
  id: string

  classId: string

  documentId: string

  title: string

  objective: string

  methodology: string

  activities: string[]

  materials: string[]

  assessment: string

  homework: string

  estimatedDuration: number

  createdAt: string
}
```

---

# activities

Generated classroom activities.

```ts
Activity {
  id: string

  lessonPlanId: string

  title: string

  difficulty:
    | "Easy"
    | "Medium"
    | "Hard"

  type:
    | "Multiple Choice"
    | "Essay"
    | "Interpretation"

  questions: number

  estimatedTime: number

  generatedAt: string
}
```

---

# analytics

Stores dashboard metrics.

```ts
Analytics {
  id: string

  totalClasses: number

  totalDocuments: number

  lessonPlans: number

  generatedActivities: number

  hoursSaved: number

  averagePerformance: number

  criticalSubjects: string[]

  monthlyProgress: number[]
}
```

---

# Relationships

```
Teacher

↓

Classes

↓

Students

↓

Lesson Plans

↓

Activities
```

Documents follow another flow.

```
Documents

↓

AI Analysis

↓

Lesson Plans
```

---

# Mock Files Structure

```
src/data/

teachers.ts

classes.ts

students.ts

documents.ts

documentAnalysis.ts

lessonPlans.ts

activities.ts

analytics.ts
```

Each file exports typed mock objects.

---

# Local Storage Keys

If persistence is required, use:

```
educassist-classes

educassist-documents

educassist-analysis

educassist-lesson-plans

educassist-activities

educassist-analytics
```

Never use random keys.

---

# UUID Pattern

IDs should mimic UUIDs.

Example

```
cls_a13f52bc

doc_83df12fa

plan_b73ca112

activity_98fa12bc
```

Avoid incremental numeric IDs.

---

# Status Enums

## Document Status

```
Pending

Uploading

Processing

Completed

Error
```

---

## AI Status

```
Waiting

Analyzing

Generating

Completed

Failed
```

---

## Difficulty

```
Easy

Medium

Hard
```

---

## Performance

```
Excellent

Good

Average

Needs Improvement
```

---

# Fake AI Responses

Every generated analysis should contain realistic educational information.

Example

```
Topics

Skills

Competencies

Estimated Teaching Time

Difficulty

Recommendations

Critical Concepts

Suggested Review Sessions

Pedagogical Insights
```

Avoid random placeholder text like:

```
Lorem Ipsum

Test

Example

Sample
```

Generate believable educational content.

---

# Future Database Migration

When replacing mocks with a real backend, only the Service Layer should change.

Current

```
Page

↓

Hook

↓

Service

↓

Mock Data
```

Future

```
Page

↓

Hook

↓

Service

↓

REST API

↓

Database
```

The UI must remain unchanged.

---

# Database Naming Convention

Use:

- camelCase for properties
- PascalCase for interfaces
- English names only

Examples

```
documentAnalysis

lessonPlan

estimatedHours

averagePerformance

criticalSubjects
```

Avoid abbreviations.

---

# Data Validation Rules

Every entity should include:

- Required fields
- Valid types
- Default values
- Predictable structure

Never leave undefined values.

Prefer:

```
[]

0

""

false
```

instead of

```
undefined

null
```

unless strictly necessary.

---

# Seed Data

The MVP should start with preloaded mock data.

Recommended minimum:

- 3 Classes
- 30 Students
- 5 Documents
- 5 AI Analyses
- 4 Lesson Plans
- 6 Activities
- Analytics populated with realistic values

This ensures the dashboard looks complete immediately after opening the application.

---

# Final Goal

The database design should simulate a real SaaS platform while remaining completely frontend-driven during the MVP.

When a real backend is introduced, the frontend should require minimal changes, with only the Service Layer being updated.