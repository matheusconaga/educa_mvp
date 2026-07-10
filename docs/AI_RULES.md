# AI_RULES.md

# EducAssist AI Development Rules

## Purpose

This document defines the mandatory rules every AI coding agent (Claude, Devin, Cursor, Windsurf, GPT, etc.) must follow while developing the EducAssist project.

The objective is to keep the project consistent, maintainable, modular, scalable, and visually cohesive.

These rules have higher priority than implementation preferences.

---

# About EducAssist

EducAssist is an AI-powered platform built for teachers.

Its purpose is NOT to replace teachers.

Its purpose is to reduce repetitive work through AI-assisted educational tools.

EducAssist helps teachers:

- Analyze educational documents
- Generate lesson plans
- Create classroom activities
- Generate assessments
- Organize classes
- Visualize analytics
- Save planning time

This project is NOT:

- Google Classroom
- Moodle
- School Management System
- Student Portal
- ERP
- Attendance System

Avoid adding unrelated educational management features.

Stay focused on AI-assisted pedagogical planning.

---

# MVP Scope

This project is only an MVP.

The goal is validating the product through a demonstration video.

Therefore:

- No authentication
- No payment system
- No backend
- No database integration
- No real AI APIs
- No OCR
- No PDF extraction

Everything should work using mocked data.

The application should behave exactly like a real SaaS product.

---

# Tech Stack

Mandatory technologies:

- React 19
- TypeScript
- Vite
- TailwindCSS v4
- Shadcn UI
- Framer Motion
- Lucide React
- Geist Variable Font

Never replace these technologies.

Do not install unnecessary libraries.

Only add new dependencies when absolutely required.

---

# Existing Project

A Landing Page already exists.

It is the project's design foundation.

Never redesign the project.

Instead:

- Reuse components
- Extend components
- Adapt components

Do not create duplicate UI.

---

# Design Rules

Always preserve:

- Typography
- Color palette
- Border radius
- Shadows
- Layout spacing
- Component style

The Dashboard must feel like a continuation of the Landing Page.

Everything should look like one product.

Never mix multiple design styles.

---

# Component Rules

Prefer composition over duplication.

Always check whether a component already exists.

If a similar component exists:

Extend it.

Do not recreate it.

Every component should have a single responsibility.

---

# Folder Structure

Follow this structure.

src/

components/

pages/

layouts/

hooks/

services/

data/

types/

utils/

assets/

styles/

Never create random folders.

---

# State Management

Prefer:

React State

Context API (only when needed)

Avoid global state unless absolutely necessary.

Do not install Zustand, Redux or MobX for this MVP.

---

# Routing

Use React Router.

Organize routes by pages.

Keep routing simple.

---

# Mock Data

Every feature must use realistic mocked data.

Create mock files under:

src/data/

Examples:

classes.ts

documents.ts

analytics.ts

lessonPlans.ts

activities.ts

Do not hardcode JSON inside components.

---

# Fake AI

Every AI feature must simulate a real AI experience.

Example flow:

User uploads document

↓

Processing...

↓

Analyzing...

↓

Generating Insights...

↓

Completed

Never instantly return the result.

Simulate realistic processing.

Recommended delay:

1500ms–3500ms

---

# Loading States

Every asynchronous action must have:

Loading

Success

Error

Empty State

Never leave blank screens.

---

# Error Handling

Every feature must gracefully handle errors.

Always display friendly messages.

Never expose stack traces.

---

# Code Quality

Use strict TypeScript.

Never use:

any

unknown (unless necessary)

Avoid type assertions.

Create reusable interfaces.

Prefer utility types.

---

# Clean Code

Functions should be small.

Avoid long files.

Prefer readability over clever code.

Meaningful names only.

No abbreviations.

Bad:

btn

tmp

obj

Good:

lessonPlanCard

teacherDashboard

documentAnalysis

---

# SOLID Principles

Follow SOLID whenever possible.

Especially:

Single Responsibility

Open Closed

Dependency Inversion

---

# DRY

Do not duplicate code.

Extract reusable logic.

Extract reusable components.

Extract reusable hooks.

---

# Component Size

Ideal:

100–200 lines

Avoid components over 300 lines.

Split when necessary.

---

# Styling

Use TailwindCSS only.

Do not write inline styles.

Do not use CSS Modules.

Do not use Styled Components.

Use utility classes.

---

# Colors

Never invent colors.

Use only project tokens.

Background

#F0FEFD

Background2

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

Danger

#EF4444

---

# Icons

Always use:

Lucide React

Do not mix icon libraries.

---

# Animations

Use Framer Motion.

Animations must be subtle.

Avoid excessive movement.

Avoid distracting transitions.

---

# Dashboard

Dashboard should contain:

Overview Cards

Charts

Quick Actions

Recent Documents

Lesson Plans

Analytics

Everything responsive.

---

# AI Screens

Every AI screen must look believable.

Include:

Progress Bars

Status Indicators

Animated Loading

Generated Results

Insights

Recommendations

Metrics

---

# File Upload

Upload must support:

PDF

DOCX

PNG

JPEG

No real processing.

Use mocked responses.

---

# Charts

Use realistic educational metrics.

Examples:

Learning Progress

Average Performance

Critical Subjects

Planning Time Saved

Student Difficulties

---

# Responsiveness

Support:

Desktop

Tablet

Mobile

Never ignore responsiveness.

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

Visible focus states.

Proper aria labels.

---

# Performance

Lazy load heavy pages.

Avoid unnecessary renders.

Memoize only when needed.

Do not optimize prematurely.

---

# Comments

Do not comment obvious code.

Comment only:

Complex logic

Business rules

Important decisions

---

# Naming

Use English.

Examples:

LessonPlan

DocumentAnalysis

DashboardCard

LearningAnalytics

Never mix Portuguese and English.

---

# Commit Mentality

Develop one feature at a time.

Validate.

Fix.

Then continue.

Never implement multiple unfinished modules simultaneously.

---

# Before Creating Code

Always ask yourself:

Can I reuse an existing component?

Can I simplify this solution?

Can this be more modular?

Will this scale later?

If yes, improve before coding.

---

# Priority Order

Always prioritize:

1. Readability

2. Reusability

3. Consistency

4. User Experience

5. Performance

6. Scalability

7. Visual Polish

---

# Final Goal

The final application should look like a polished AI SaaS ready for investors and user validation.

The MVP should be fully navigable.

Every screen should feel functional.

Every AI interaction should appear real, even if powered by mocked data.

The codebase must be clean enough that replacing mocks with real APIs in the future requires minimal changes.