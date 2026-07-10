# STYLEGUIDE.md

# EducAssist Frontend Style Guide

Version: 1.0

---

# Purpose

This document defines the coding, styling, component and project conventions used throughout EducAssist.

Every AI coding agent must follow these rules before creating or modifying code.

The goal is to keep the project consistent, readable and scalable.

---

# Tech Stack

Framework

- React 19

Language

- TypeScript

Bundler

- Vite

Styling

- TailwindCSS v4

Components

- Shadcn UI

Animations

- Framer Motion

Icons

- Lucide React

Typography

- Geist Variable

---

# General Principles

Always prioritize:

- Simplicity
- Readability
- Reusability
- Consistency
- Scalability

Never sacrifice readability for clever code.

---

# Code Style

Good code should be:

- Predictable
- Explicit
- Easy to read
- Easy to maintain

Avoid unnecessary abstractions.

---

# TypeScript

Always use strict typing.

Allowed:

```ts
interface Class {
  id: string;
  name: string;
}
```

Avoid

```ts
const data: any = {};
```

Never use

- any
- implicit any

Prefer interfaces over type aliases for domain models.

---

# Naming Convention

## Components

Use PascalCase.

Correct

```text
DashboardCard
DocumentUpload
LessonPlanCard
AnalyticsChart
```

Wrong

```text
dashboardCard
card
component1
```

---

## Files

Use kebab-case.

Correct

```text
dashboard-card.tsx
lesson-plan-card.tsx
document-upload.tsx
```

---

## Variables

Use camelCase.

Correct

```ts
lessonPlan
documentAnalysis
averagePerformance
```

---

## Constants

Use UPPER_SNAKE_CASE.

```ts
MAX_UPLOAD_SIZE
DEFAULT_ANIMATION_TIME
```

---

## Interfaces

Always begin with a capital letter.

```ts
interface Document {}

interface LessonPlan {}
```

---

# Folder Structure

```
src/

assets/

components/

hooks/

layouts/

pages/

services/

data/

types/

utils/

styles/
```

Never create unnecessary folders.

---

# Component Structure

Every component should follow this order.

```tsx
Imports

Types

Constants

Component

Helpers

Export
```

Example

```tsx
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
}

export function DashboardCard({ title }: Props) {
  return <div>{title}</div>;
}
```

---

# Component Size

Ideal

100–200 lines

Maximum

300 lines

Split components when they become too large.

---

# Imports

Order imports like this.

```tsx
React

Third-party libraries

Internal components

Hooks

Services

Types

Utils

Styles
```

Example

```tsx
import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { useUpload } from "@/hooks/use-upload";

import { uploadService } from "@/services/upload.service";

import type { Document } from "@/types/document";
```

---

# Component Philosophy

Always prefer:

Small components

Composable components

Reusable components

Avoid:

Huge pages

Duplicated UI

Nested complexity

---

# Hooks

Custom hooks belong in

```
hooks/
```

Examples

```
use-upload.ts

use-dashboard.ts

use-document-analysis.ts

use-local-storage.ts
```

Hooks should contain logic only.

Never UI.

---

# Services

Business logic belongs in

```
services/
```

Examples

```
analytics.service.ts

lesson-plan.service.ts

document.service.ts
```

Pages should never manipulate mock data directly.

---

# Mock Data

Store all mocked data inside

```
data/
```

Example

```
classes.ts

documents.ts

analytics.ts

activities.ts
```

Never place mock data inside components.

---

# Styling Rules

Use only:

TailwindCSS

Shadcn UI

Never use:

Inline CSS

Styled Components

Emotion

CSS Modules

---

# Tailwind Rules

Prefer utility classes.

Example

```tsx
<div className="rounded-xl border bg-card p-6 shadow-sm">
```

Avoid unnecessary wrappers.

Keep class lists organized.

Recommended order

```
Layout

Spacing

Sizing

Borders

Background

Typography

Effects

State
```

Example

```tsx
className="
flex
items-center
justify-between
rounded-xl
border
bg-card
p-6
text-foreground
shadow-sm
hover:shadow-md
"
```

---

# Color Palette

Use only project tokens.

```css
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
```

Never hardcode random colors.

---

# Typography

Font

```
Geist Variable
```

Hierarchy

```
Page Title

text-4xl

Section

text-2xl

Card

text-lg

Body

text-base

Caption

text-sm
```

---

# Cards

Every card should include

Rounded corners

Padding

Soft shadow

Consistent spacing

Cards are the primary layout component.

---

# Buttons

Button hierarchy

Primary

Secondary

Outline

Ghost

Danger

Do not create unnecessary button variants.

Reuse existing ones.

---

# Icons

Always use

Lucide React

Keep icon sizes consistent.

Default

```
16

18

20

24
```

---

# Animations

Use Framer Motion.

Allowed animations

Fade

Scale

Slide

Opacity

Avoid:

Bounce

Rotation

Large transitions

Long animations

Recommended duration

150–300ms

---

# Loading States

Every async feature must have

Loading

Success

Error

Empty

Never leave blank interfaces.

---

# Dashboard Layout

Recommended structure

```
Header

↓

Quick Actions

↓

Statistics

↓

Charts

↓

Recent Documents

↓

Recent Lesson Plans

↓

Insights
```

---

# Responsiveness

Desktop First

Support

Desktop

Tablet

Mobile

Never allow

Broken layouts

Horizontal scrolling

Overflowing cards

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

Visible focus.

ARIA labels when necessary.

Proper button elements.

---

# Error Handling

Show friendly messages.

Never expose technical errors.

Provide recovery actions whenever possible.

---

# Comments

Comment only when necessary.

Avoid commenting obvious code.

Good comments explain

Why

Not

What

---

# Reusability Checklist

Before creating anything ask

Can I reuse an existing component?

Can I extract a hook?

Can I extract a service?

Can this become reusable?

If yes

Refactor first.

---

# Performance

Avoid unnecessary re-renders.

Memoize only when needed.

Lazy load pages when appropriate.

Avoid premature optimization.

---

# AI Components

Every AI-generated screen should include

Progress

Status

Result

Recommendations

Never instantly display generated content.

Simulate processing.

---

# Code Review Checklist

Before finishing any feature verify

- No TypeScript errors
- No ESLint errors
- Responsive layout
- Clean component structure
- Strong typing
- No duplicated code
- Reusable components
- Correct design tokens
- Proper loading states
- Proper error states

---

# Definition of Done

A feature is considered complete only if

- It follows the architecture
- It follows the design system
- It follows this style guide
- It is responsive
- It uses reusable components
- It has clean code
- It has no TypeScript errors
- It matches the EducAssist visual identity

---

# Final Principle

Every line of code should make the project easier to maintain.

Every component should be reusable.

Every screen should feel like part of the same product.

Consistency is more important than creativity.