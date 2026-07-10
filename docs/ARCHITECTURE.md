# ARCHITECTURE.md

# EducAssist Architecture

Version: MVP 1.0

---

# Overview

EducAssist is an AI-powered educational platform designed to help teachers automate repetitive pedagogical tasks.

The MVP focuses on validating the product idea through a polished frontend experience using mocked AI responses.

There is **no backend** in this version.

There is **no authentication**.

There is **no real AI integration**.

The entire application must behave like a production SaaS while using mocked data internally.

---

# Architecture Philosophy

This project follows the following principles:

- Component-Based Architecture
- Feature-Oriented Organization
- Clean Code
- SOLID Principles
- Separation of Concerns
- Reusable UI
- Scalable Folder Structure
- Type Safety

The architecture must allow future migration to:

- Backend APIs
- AI Providers
- Authentication
- Database
- Cloud Storage

without requiring major frontend refactoring.

---

# High-Level Architecture

```
                    Landing Page
                          │
                          ▼
                React Router Navigation
                          │
     ┌────────────────────┼────────────────────┐
     ▼                    ▼                    ▼
 Dashboard            Documents            Classes
     │                    │                    │
     ├──────────────┬─────┴──────────────┐
     ▼              ▼                    ▼
 Lesson Plans   Activities        Analytics
     │
     ▼
 Mock AI Services
     │
     ▼
 Mock Data Layer
```

---

# Application Layers

The application is divided into independent layers.

```
Presentation

↓

Business Logic

↓

Services

↓

Mock Data

↓

Types
```

Each layer has a single responsibility.

---

# Project Structure

```
src/

assets/
│
components/
│   ui/
│   dashboard/
│   cards/
│   charts/
│   forms/
│   upload/
│
data/
│
hooks/
│
layouts/
│
pages/
│
services/
│
types/
│
utils/
│
styles/
│
App.tsx
main.tsx
```

---

# Folder Responsibilities

## assets/

Images

Icons

Illustrations

Static files

---

## components/

Reusable UI components.

Examples

```
Button

Card

Chart

Sidebar

Navbar

DocumentCard

LessonCard

UploadZone

StatCard

ProgressBar
```

Never place business logic inside components.

---

## pages/

Represents application screens.

Examples

```
Dashboard

Classes

Documents

Lesson Plans

Activities

Analytics
```

Pages compose components.

---

## layouts/

Application layouts.

Examples

```
DashboardLayout

LandingLayout
```

Responsible only for page structure.

---

## hooks/

Reusable React Hooks.

Examples

```
useUpload()

useFakeAI()

useAnalytics()

useLocalStorage()
```

Hooks should contain reusable logic only.

---

## services/

Business services.

Examples

```
document.service.ts

lesson.service.ts

activity.service.ts

analytics.service.ts
```

Services simulate future API calls.

Pages should never manipulate mock data directly.

---

## data/

Mocked application data.

Examples

```
documents.ts

classes.ts

analytics.ts

lessonPlans.ts

activities.ts
```

This layer replaces a backend during MVP.

---

## utils/

Utility functions.

Examples

```
date.ts

format.ts

helpers.ts

delay.ts

constants.ts
```

Avoid placing business logic here.

---

## types/

Application interfaces.

Examples

```
Document.ts

LessonPlan.ts

Activity.ts

Class.ts

Analytics.ts
```

Never use any.

Everything must be strongly typed.

---

# Routing

The application uses React Router.

Structure:

```
/

dashboard

/classes

/documents

/documents/:id

/lesson-plans

/activities

/analytics
```

Nested routing is recommended only when necessary.

---

# Data Flow

```
Page

↓

Hook

↓

Service

↓

Mock Data

↓

Response

↓

UI
```

Example

```
Dashboard

↓

useDashboard()

↓

analytics.service.ts

↓

analytics.ts

↓

Dashboard Cards
```

Pages should never import mock files directly.

---

# Fake AI Architecture

Real AI will be added in the future.

Current flow:

```
Upload Document

↓

Fake Processing

↓

Loading Animation

↓

Generate Mock Analysis

↓

Store Result

↓

Display Analysis
```

Every AI feature should use the same architecture.

---

# AI Modules

The following features simulate AI behavior.

## Document Analysis

Input

PDF

DOCX

Image

Output

Topics

Skills

Competencies

Difficulty

Estimated Time

Recommendations

---

## Lesson Plan Generator

Input

Class

Document

Teaching Goal

Output

Objectives

Methodology

Activities

Resources

Assessment

Homework

---

## Activity Generator

Input

Topic

Difficulty

Question Count

Output

Generated Classroom Activities

---

## Analytics Generator

Input

Classes

Documents

Activities

Output

Charts

Metrics

Insights

Suggestions

---

# State Management

For MVP:

React State

Context API only if needed

Local Storage when persistence is required

Avoid external state libraries.

---

# Mock Persistence

Persistent data should use Local Storage.

Example

```
localStorage

↓

Load Data

↓

Update UI

↓

Save Changes
```

This allows the demo to feel realistic.

---

# Styling Architecture

TailwindCSS v4

Shadcn UI

Framer Motion

Lucide React

No CSS Modules.

No Styled Components.

No inline styles.

---

# Design System

The Dashboard must inherit the Landing Page identity.

Never redesign existing components.

Reuse:

Buttons

Cards

Inputs

Spacing

Typography

Colors

Animations

---

# Color Tokens

```
Background

#F0FEFD

Background 2

#EFF4FF

Primary

#0D9488

Secondary

#006860

Foreground

#0F172A

Card

#FFFFFF

Muted

#DFFCFB

Border

rgba(15,23,42,.10)
```

Always use tokens.

Never invent colors.

---

# Component Hierarchy

```
Page

↓

Layout

↓

Sections

↓

Cards

↓

Widgets

↓

UI Components
```

Example

```
Dashboard

↓

DashboardLayout

↓

DashboardHeader

↓

StatCards

↓

Charts

↓

QuickActions

↓

RecentDocuments
```

---

# Error Handling

Every async action must support:

Loading

Success

Empty

Error

Never leave blank screens.

---

# Loading Strategy

Every fake AI request must:

Show loading

Animate progress

Delay response

Display realistic feedback

Recommended delay

1.5–3.5 seconds

---

# Animation Rules

Use Framer Motion.

Keep animations subtle.

Examples

Fade

Slide

Scale

Avoid excessive motion.

---

# Performance

Use lazy loading for pages.

Memoize only when necessary.

Keep components small.

Avoid unnecessary renders.

---

# Accessibility

Semantic HTML

Keyboard Navigation

Visible Focus States

ARIA Labels

Proper Button Roles

---

# Naming Convention

Use English only.

Examples

```
DocumentAnalysis

LessonPlan

DashboardCard

ActivityGenerator

TeacherAnalytics
```

Avoid abbreviations.

---

# Future Backend Integration

The architecture must allow replacing mocked services with real APIs.

Future flow:

```
Page

↓

Hook

↓

Service

↓

REST API

↓

AI Provider

↓

Database

↓

Response
```

No page should require changes when replacing mock services.

Only the service layer should change.

---

# Scalability

The architecture should support future integration with:

- Authentication
- Supabase
- Firebase
- PostgreSQL
- OpenAI
- Anthropic
- OCR
- PDF Parsing
- Cloud Storage

without restructuring the UI.

---

# Final Objective

EducAssist must look and behave like a production-ready AI SaaS.

Although powered by mocked data, every interaction should simulate a real product.

The architecture should prioritize:

1. Simplicity
2. Reusability
3. Scalability
4. Maintainability
5. User Experience
6. Clean Code
7. Future API Integration