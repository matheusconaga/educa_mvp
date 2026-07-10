# EducAssist

> **AI-powered lesson planning and educational assistant for teachers.**

---

## Overview

EducAssist is a modern AI-powered platform designed to help teachers reduce the time spent on repetitive pedagogical tasks.

Instead of manually analyzing planning documents, creating lesson plans and preparing classroom activities, teachers can use EducAssist to streamline their workflow with AI-assisted tools.

The current version is a **Frontend MVP**, created to validate the product concept through an interactive demonstration.

The application simulates a complete AI SaaS experience using mocked data, making it ideal for product validation, user testing and investor presentations.

---

# Product Vision

EducAssist aims to become the teacher's daily AI assistant.

The long-term vision is to help educators spend less time planning and more time teaching.

The platform will eventually provide intelligent document analysis, lesson planning, educational insights and classroom activity generation powered by Artificial Intelligence.

---

# MVP Scope

This repository contains only the MVP.

Current implementation:

- Frontend only
- Mock AI responses
- Mock data
- Interactive user experience
- Responsive interface

Not included:

- Authentication
- Backend
- Database
- Payment System
- OCR
- AI APIs
- File Processing

The application behaves like a real SaaS while remaining completely self-contained.

---

# Target Audience

EducAssist is designed primarily for:

- Elementary School Teachers
- Middle School Teachers
- High School Teachers

Future versions may also support:

- School Coordinators
- Educational Consultants
- Private Tutors

---

# Core Features

## Dashboard

A modern teacher dashboard providing quick access to every major feature.

Includes:

- Statistics
- AI Insights
- Quick Actions
- Recent Documents
- Recent Lesson Plans
- Analytics

---

## Classes

Teachers can organize classroom information.

Each class contains:

- Subject
- Grade
- Number of Students
- Average Level
- Learning Difficulties
- Schedule

---

## Document Upload

Upload educational documents.

Supported types:

- PDF
- DOCX
- PNG
- JPEG

The upload process simulates real AI analysis.

---

## AI Document Analysis

After uploading a document, EducAssist generates:

- Topics
- Skills
- Competencies
- Difficulty
- Estimated Teaching Time
- Recommendations
- Educational Insights

All responses are mocked for the MVP.

---

## Lesson Plan Generator

Generate complete lesson plans based on:

- Classroom
- Subject
- Teaching Goal
- Available Time

The generated lesson plan includes:

- Objectives
- Methodology
- Activities
- Materials
- Assessment
- Homework

---

## Activity Generator

Generate classroom activities.

Supports:

- Multiple Choice
- Essay
- Interpretation
- Mixed Activities

---

## Analytics

Educational dashboard showing:

- Learning Progress
- Average Performance
- Critical Topics
- Planning Time Saved
- Generated Activities
- Uploaded Documents

---

# Tech Stack

## Framework

- React 19

## Language

- TypeScript

## Bundler

- Vite

## Styling

- TailwindCSS v4

## UI Components

- Shadcn UI

## Animations

- Framer Motion

## Icons

- Lucide React

## Typography

- Geist Variable

---

# Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── cards/
│   ├── charts/
│   ├── upload/
│   └── forms/
│
├── data/
├── hooks/
├── layouts/
├── pages/
├── services/
├── styles/
├── types/
├── utils/
│
├── App.tsx
└── main.tsx
```

---

# Design Principles

EducAssist follows a modern SaaS design language.

Core principles:

- Clean
- Minimal
- Spacious
- Responsive
- Accessible
- Friendly
- Professional

The Dashboard must always preserve the visual identity established by the Landing Page.

---

# Development Principles

The project follows:

- Clean Code
- SOLID
- DRY
- Component Composition
- Feature Organization
- Strong TypeScript Typing
- Reusable Components

---

# Mock-First Development

The MVP intentionally uses mocked data.

Reasons:

- Faster validation
- Faster development
- No backend required
- Easier demonstrations
- Easy future API integration

Every future API call should replace only the Service Layer.

The UI should remain unchanged.

---

# AI Simulation

The MVP does not integrate with real AI providers.

Instead, every AI interaction is simulated using:

- Fake delays
- Loading states
- Progress indicators
- Mock educational responses

The experience should feel identical to a production AI system.

---

# Future Integrations

The architecture is prepared for future integration with:

- OpenAI
- Anthropic
- Supabase
- PostgreSQL
- OCR
- PDF Processing
- Authentication
- Cloud Storage
- Payment Systems

These features are intentionally outside the MVP scope.

---

# Documentation

Project documentation is available inside the `/docs` folder.

- README.md
- PRD.md
- ARCHITECTURE.md
- DESIGN.md
- DATABASE.md
- STYLEGUIDE.md
- TASKS.md
- ROADMAP.md
- PROMPTS.md
- AI_RULES.md

Every AI coding agent should read these documents before implementing new features.

---

# Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Project Goals

The MVP aims to validate:

- User experience
- Product concept
- AI workflow
- Interface quality
- Teacher engagement

Success is measured by how realistically the application demonstrates the future product vision.

---

# Roadmap

Current Phase

- Frontend MVP
- Mock AI
- Product Validation

Future Phases

- Authentication
- Backend
- Database
- OCR
- Real AI APIs
- Cloud Storage
- Collaborative Features

---

# License

This project is intended for educational, portfolio and product validation purposes.

---

# Final Vision

EducAssist is not a traditional school management system.

It is an AI assistant built specifically for teachers.

The mission is simple:

> **Empower teachers by reducing repetitive work through intelligent educational tools, allowing them to focus on what truly matters: teaching and inspiring students.**