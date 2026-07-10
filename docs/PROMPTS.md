# PROMPTS.md

# EducAssist AI Development Prompts

Version: MVP 1.0

---

# Purpose

This document contains the prompts that should be used by AI coding agents (Claude, Devin, Cursor, Windsurf, GPT, etc.) while developing EducAssist.

The objective is to ensure every implementation follows the same architecture, design language and coding standards.

Always read the following documents before generating code:

- README.md
- PRD.md
- ARCHITECTURE.md
- DESIGN.md
- STYLEGUIDE.md
- DATABASE.md
- AI_RULES.md
- TASKS.md

Never ignore those documents.

---

# MASTER PROMPT

You are a Senior Software Engineer and Product Designer responsible for building the MVP of EducAssist.

EducAssist is an AI-powered platform for teachers that automates lesson planning, document analysis, activity generation and educational insights.

Your goal is to build a polished frontend-only SaaS using mocked data.

The application must feel like a production-ready AI platform while requiring no backend.

Always preserve the existing Landing Page.

Never redesign the project.

Reuse every existing component whenever possible.

Follow every rule defined inside:

- AI_RULES.md
- DESIGN.md
- ARCHITECTURE.md

Use:

- React 19
- TypeScript
- Vite
- TailwindCSS v4
- Shadcn UI
- Framer Motion
- Lucide React

Never use:

- any
- duplicated components
- placeholder interfaces
- lorem ipsum
- unfinished screens

Every screen should be responsive.

Every AI interaction should simulate real AI behavior.

---

# PROJECT UNDERSTANDING PROMPT

Before writing any code:

Read the entire project.

Understand the folder structure.

Identify reusable components.

Understand the existing Landing Page.

Understand the design language.

Understand typography.

Understand spacing.

Understand colors.

Understand component hierarchy.

Do not create duplicate UI.

Only begin implementation after fully understanding the project.

---

# DESIGN PROMPT

The Dashboard must look like a continuation of the Landing Page.

Never redesign existing components.

Keep the interface:

Minimal

Modern

Elegant

Premium

Friendly

Use:

Large cards

Soft shadows

Rounded corners

Whitespace

Clear hierarchy

Subtle animations

Do not introduce a different design language.

The attached dashboard images are visual inspiration only.

Do not copy them exactly.

---

# COMPONENT PROMPT

Before creating any component ask:

Does a similar component already exist?

If yes:

Reuse it.

If no:

Create a reusable component.

Every component must have a single responsibility.

Avoid large components.

Prefer composition.

---

# PAGE PROMPT

Every page should contain:

Page Title

Description

Primary Action

Responsive Layout

Loading State

Empty State

Error State

Consistent spacing

Never leave unfinished sections.

---

# DASHBOARD PROMPT

Create a modern SaaS dashboard.

Include:

Statistics Cards

Charts

Recent Documents

Recent Lesson Plans

Recent Activities

Quick Actions

AI Insights

Everything should be responsive.

Animations should be subtle.

---

# CLASSES MODULE PROMPT

Create a complete Classes module.

Each class contains:

Name

Subject

Grade

Students

Difficulty

Average Level

Calendar

Description

Provide:

Listing

Details

Create

Edit

Delete

Use mocked data.

---

# DOCUMENT MODULE PROMPT

Create the document upload experience.

Supported files:

PDF

DOCX

PNG

JPEG

Flow:

Upload

↓

Processing

↓

Analyzing

↓

Completed

Use mocked processing.

Do not implement OCR.

Do not parse files.

The experience should feel real.

---

# AI ANALYSIS PROMPT

Generate realistic educational analysis.

Output:

Topics

Skills

Competencies

Estimated Time

Difficulty

Recommendations

Teaching Insights

Critical Concepts

Pedagogical Density

The generated information should look believable.

Never use Lorem Ipsum.

---

# LESSON PLAN PROMPT

Generate realistic lesson plans.

Include:

Objectives

Methodology

Materials

Activities

Assessment

Homework

Estimated Duration

Teaching Notes

The result should look professional.

---

# ACTIVITY GENERATOR PROMPT

Generate educational activities.

Support:

Multiple Choice

Essay

Interpretation

Mixed

Generate realistic educational content.

Avoid generic placeholder text.

---

# ANALYTICS PROMPT

Generate realistic dashboard analytics.

Include:

Average Performance

Learning Progress

Critical Subjects

Planning Time Saved

Generated Activities

Documents Processed

Lesson Plans Generated

Display everything using charts.

---

# FAKE AI PROMPT

Every AI interaction must simulate a real AI assistant.

Recommended flow:

Uploading Document...

↓

Reading Content...

↓

Analyzing Structure...

↓

Generating Insights...

↓

Building Recommendations...

↓

Completed

Recommended duration:

1500ms–3500ms

Always display progress indicators.

---

# MOCK DATA PROMPT

Store every dataset inside:

src/data/

Examples:

classes.ts

documents.ts

lessonPlans.ts

activities.ts

analytics.ts

Never hardcode mock objects inside components.

---

# RESPONSIVENESS PROMPT

Every page must support:

Desktop

Tablet

Mobile

No broken layouts.

No horizontal scrolling.

No overlapping elements.

---

# ANIMATION PROMPT

Use Framer Motion.

Allowed animations:

Fade

Scale

Slide

Opacity

Keep animations subtle.

Avoid excessive movement.

---

# TYPESCRIPT PROMPT

Use strict TypeScript.

Never use:

any

Prefer:

Interfaces

Enums

Utility Types

Reusable Types

Everything should be typed.

---

# CLEAN CODE PROMPT

Every implementation must follow:

SOLID

DRY

KISS

Single Responsibility

Meaningful naming

Readable code

Avoid unnecessary abstraction.

---

# PERFORMANCE PROMPT

Avoid unnecessary renders.

Split large components.

Lazy load pages when appropriate.

Optimize only where necessary.

---

# FINAL VALIDATION PROMPT

Before finishing any feature verify:

✓ Responsive

✓ No TypeScript errors

✓ No console errors

✓ No duplicated code

✓ Reusable components

✓ Loading states

✓ Empty states

✓ Error states

✓ Mock data working

✓ Animations working

✓ Design matches the Landing Page

Only after passing every validation should the feature be considered complete.

---

# FEATURE DEVELOPMENT PROMPT

Always develop one feature at a time.

Workflow:

Read requirements

↓

Understand architecture

↓

Identify reusable components

↓

Implement

↓

Validate

↓

Fix issues

↓

Refactor

↓

Complete

Never implement multiple unfinished features simultaneously.

---

# BUG FIX PROMPT

Before fixing a bug:

Understand the root cause.

Avoid quick patches.

Maintain architecture consistency.

Do not introduce technical debt.

Do not break existing features.

---

# REFACTOR PROMPT

When refactoring:

Preserve behavior.

Improve readability.

Reduce duplication.

Improve maintainability.

Never change the visual identity.

---

# FUTURE API PROMPT

Every service must be designed so that mocked data can later be replaced by a real API.

Pages must never depend directly on mocked files.

Use the service layer as the abstraction.

---

# FINAL GOAL

The final MVP should look indistinguishable from a production AI SaaS.

Although powered entirely by mocked data, every interaction should feel realistic.

The resulting codebase should be clean, modular, scalable and ready for future integration with:

- Authentication
- Database
- AI APIs
- OCR
- PDF Parsing
- Cloud Storage

while requiring minimal frontend changes.