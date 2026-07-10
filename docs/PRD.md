# PRD.md

# Product Requirements Document

# EducAssist MVP

Version: 1.0

Status: MVP Validation

---

# 1. Product Overview

## Product Name

EducAssist

## Product Vision

EducAssist is an AI-powered educational assistant that helps teachers reduce repetitive work by automating lesson planning, document analysis, classroom activity generation and educational insights.

The product is designed to save teachers hours every week while improving planning quality.

The MVP exists only to validate the product concept through a fully interactive demonstration.

---

# 2. MVP Goals

The MVP should demonstrate that EducAssist can:

- Organize classes
- Analyze educational documents
- Generate lesson plans
- Generate classroom activities
- Display educational analytics
- Simulate AI-powered workflows

The MVP is **frontend only**.

There is:

- No authentication
- No backend
- No payment
- No AI API
- No OCR
- No database

Everything should work using mocked data.

---

# 3. Target Audience

Primary Users

- Elementary School Teachers
- Middle School Teachers
- High School Teachers

Future Users

- School Coordinators
- Educational Consultants
- Private Tutors

---

# 4. User Problem

Teachers spend a large amount of time performing repetitive tasks such as:

- Reading planning documents
- Organizing teaching schedules
- Creating lesson plans
- Producing activities
- Creating assessments
- Reviewing classroom progress

These tasks consume hours that could instead be spent teaching.

EducAssist automates these workflows using AI.

---

# 5. Core Value Proposition

> "Spend less time planning and more time teaching."

EducAssist becomes the teacher's AI assistant.

---

# 6. MVP Modules

---

# Module 1 — Landing Page

Purpose

Present the product.

Generate interest.

Explain benefits.

Features

- Hero Section
- Features
- Benefits
- How It Works
- Pricing (static)
- FAQ
- CTA

Status

Already implemented.

Must only be preserved.

---

# Module 2 — Dashboard

Purpose

Central hub of the application.

Main Widgets

- Total Classes
- Uploaded Documents
- Lesson Plans
- Generated Activities
- Hours Saved
- Average Performance

Charts

- Learning Progress
- Critical Topics
- Weekly Productivity

Quick Actions

- Upload Document
- Create Lesson Plan
- Generate Activity

Recent Items

- Documents
- Lesson Plans
- Activities

---

# Module 3 — Classes

Purpose

Manage classroom information.

Each class contains

- Name
- Subject
- Grade
- Number of Students
- Average Level
- Difficulties
- Schedule
- Description

Operations

- View
- Create
- Edit
- Delete

Data Source

Mock Data

---

# Module 4 — Document Upload

Purpose

Simulate educational document analysis.

Supported Files

- PDF
- DOCX
- PNG
- JPG

Flow

Upload

↓

Processing

↓

AI Analysis

↓

Completed

The upload should simulate real processing.

---

# Module 5 — AI Document Analysis

Purpose

Transform uploaded documents into educational insights.

Input

Educational document.

Output

Topics

Skills

Competencies

Estimated Teaching Time

Difficulty

Pedagogical Density

Recommendations

Risk Indicators

Generated Summary

Everything should use mocked responses.

---

# Module 6 — Lesson Plan Generator

Purpose

Automatically generate lesson plans.

Inputs

Class

Teaching Goal

Available Time

Reference Document

Output

Lesson Objective

Methodology

Activities

Materials

Assessment

Homework

Estimated Duration

The generated plan should look realistic.

---

# Module 7 — Activity Generator

Purpose

Generate classroom activities.

Inputs

Topic

Difficulty

Question Count

Activity Type

Outputs

Questions

Instructions

Expected Duration

Learning Objectives

Activity Types

- Multiple Choice
- Essay
- Interpretation
- Mixed

---

# Module 8 — Analytics

Purpose

Display educational metrics.

Metrics

Average Class Performance

Critical Subjects

Planning Time Saved

Documents Processed

Lesson Plans Generated

Activities Generated

Charts

Bar Chart

Area Chart

Pie Chart

Line Chart

---

# Module 9 — AI Experience

Every AI interaction must simulate a production system.

Flow

User Action

↓

Loading

↓

Processing

↓

Generating

↓

Completed

Animations are mandatory.

---

# 7. User Flow

Landing Page

↓

Dashboard

↓

Choose Feature

↓

Perform Action

↓

Fake AI Processing

↓

Result

↓

Return to Dashboard

The experience should feel seamless.

---

# 8. Dashboard Sections

Header

Welcome message

Current date

Quick Actions

Statistics Cards

Charts

Recent Activity

AI Recommendations

Recent Documents

Recent Lesson Plans

---

# 9. Statistics Cards

Cards should include

Uploaded Documents

Classes

Lesson Plans

Activities

Hours Saved

Average Performance

Cards should animate when loading.

---

# 10. Fake AI Behavior

The AI should never respond instantly.

Recommended delay

1500–3500ms

Status examples

Uploading...

Analyzing...

Reading Document...

Extracting Topics...

Generating Insights...

Almost Done...

Completed

The experience should feel believable.

---

# 11. Mock Data

The application starts with predefined data.

Recommended

3 Classes

30 Students

5 Documents

5 AI Analyses

5 Lesson Plans

6 Activities

Analytics already populated.

The Dashboard should never look empty.

---

# 12. UI Requirements

Modern SaaS interface.

Minimal.

Lots of whitespace.

Rounded cards.

Soft shadows.

Geist Variable typography.

TailwindCSS v4.

Shadcn UI.

Framer Motion animations.

Lucide Icons.

Must preserve the Landing Page identity.

---

# 13. Non-Functional Requirements

The application must

- Be responsive
- Load quickly
- Use reusable components
- Be fully typed with TypeScript
- Avoid duplicated code
- Follow SOLID principles
- Use TailwindCSS
- Use React 19
- Use Vite

---

# 14. Future Integrations (Out of Scope)

The architecture should allow future integration with

- OpenAI
- Anthropic
- Supabase
- PostgreSQL
- OCR
- PDF Parsing
- Authentication
- Cloud Storage
- Payment Systems

These features must NOT be implemented in the MVP.

---

# 15. Success Criteria

The MVP is successful if a user can:

- Navigate through every module
- Upload a document
- Watch the fake AI process
- Read a generated document analysis
- Generate a lesson plan
- Generate classroom activities
- Explore analytics
- Understand the product without explanations

---

# 16. Acceptance Criteria

The MVP is considered complete when:

- All pages are functional
- Every feature uses mocked data
- No screen is unfinished
- Navigation works correctly
- Responsive layout is complete
- AI interactions are believable
- Dashboard is populated
- No placeholder text exists
- Components are reusable
- Code is clean and modular

---

# 17. Future Roadmap

After validating the MVP:

Phase 2

- Authentication
- Backend
- Database
- Real file upload

Phase 3

- OCR
- PDF extraction
- OpenAI integration
- Anthropic integration

Phase 4

- School management
- Multi-user support
- Reports
- Calendar
- Notifications
- Real-time collaboration

---

# Final Product Vision

EducAssist should become the teacher's AI copilot.

Instead of spending hours preparing lessons and analyzing educational documents, teachers should be able to upload their planning materials and receive intelligent recommendations, complete lesson plans, classroom activities and educational insights in minutes.

The MVP exists to validate this vision through an elegant, interactive and realistic frontend experience that can later evolve into a full-scale AI SaaS platform.