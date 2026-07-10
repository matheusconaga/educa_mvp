# DESIGN.md

# EducAssist Design System

Version: MVP 1.0

---

# Overview

EducAssist is a modern AI-powered SaaS platform built for teachers.

The visual identity must communicate:

- Simplicity
- Trust
- Productivity
- Innovation
- Organization
- Intelligence

The application should feel premium while remaining approachable for teachers of all technology skill levels.

This document defines the visual language that every AI agent must follow when creating new interfaces.

---

# Design Philosophy

EducAssist is **not** a corporate ERP.

It is **not** a school management system.

It is **not** an LMS.

Instead, it should feel like a modern AI productivity platform similar to:

- Notion
- Linear
- Vercel Dashboard
- Stripe Dashboard
- Figma
- Perplexity
- ChatGPT

The interface should be:

- Clean
- Spacious
- Friendly
- Calm
- Minimalistic

Avoid visual noise.

---

# Existing Landing Page

The Landing Page is the foundation of the visual identity.

Do NOT redesign it.

Every new screen must look like a natural continuation of the existing Landing Page.

Reuse:

- Typography
- Buttons
- Cards
- Colors
- Border radius
- Shadows
- Icons
- Inputs
- Badges
- Spacing

Never create a second design language.

---

# Visual Identity

## Keywords

Modern

AI

Education

Minimal

Friendly

Professional

Elegant

Organized

Lightweight

Productive

---

# Colors

Only use the project's design tokens.

```css
Background
#F0FEFD

Background Secondary
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

Danger
#EF4444
```

Never invent new colors.

Avoid saturated colors.

Avoid colorful dashboards.

---

# Typography

Font

```
Geist Variable
```

Use:

Large titles

Medium subtitles

Readable body text

Clear hierarchy

Recommended sizes

```
Hero

text-6xl

Page Title

text-4xl

Section

text-2xl

Card Title

text-lg

Body

text-base

Caption

text-sm
```

Avoid tiny fonts.

---

# Spacing

Use generous spacing.

Recommended spacing scale

```
4

6

8

10

12

16

20

24
```

Avoid crowded interfaces.

White space is part of the design.

---

# Border Radius

Default

```
0.75rem
```

Cards

Rounded XL

Buttons

Rounded LG

Inputs

Rounded LG

Avoid sharp corners.

---

# Shadows

Use soft shadows only.

Example

```
shadow-sm

shadow-md
```

Avoid large floating shadows.

---

# Buttons

Buttons should feel modern.

Primary

Filled

Secondary

Outline

Ghost

Text

Large CTA buttons are allowed only on Landing Page.

Dashboard buttons should remain compact.

---

# Cards

Cards are the primary building block.

Every card should include:

Padding

Rounded corners

Soft shadow

Title

Optional description

Optional action

Example

```
┌──────────────────────┐

📄 Documents

23 Uploaded

View Details →

└──────────────────────┘
```

---

# Icons

Use only:

Lucide React

Icons should always communicate meaning.

Examples

Dashboard

Upload

Book

GraduationCap

FileText

Brain

Sparkles

ChartColumn

ClipboardList

Users

Calendar

Clock

Bot

Target

Lightbulb

---

# Dashboard

The Dashboard is the application's main screen.

Layout

```
Header

↓

Quick Actions

↓

Statistics Cards

↓

Charts

↓

Recent Activity

↓

AI Insights
```

Everything should remain balanced.

---

# Sidebar

The sidebar should always be visible on desktop.

Collapsed on tablet.

Drawer on mobile.

Suggested navigation

```
Dashboard

Classes

Documents

Lesson Plans

Activities

Analytics

Settings
```

Active page should be clearly highlighted.

---

# Navigation

Navigation should be simple.

Maximum 1 click to access any feature.

Avoid nested menus.

---

# Forms

Use Shadcn UI components.

Fields should include:

Label

Helper Text (when needed)

Validation

Error Message

Avoid long forms.

Split into sections.

---

# Tables

Use modern tables.

Features

Hover

Search

Filters

Badges

Actions

Rounded container

Soft borders

---

# Charts

Charts should be simple.

Recommended

Bar Chart

Area Chart

Line Chart

Pie Chart

Never overload charts.

Use no more than 4 colors.

---

# Upload Experience

Upload is the core feature.

The experience should feel premium.

Flow

```
Drop File

↓

Uploading...

↓

Analyzing Document...

↓

Generating AI Insights...

↓

Completed
```

Always include progress.

---

# AI Components

AI-generated content should always appear inside dedicated cards.

Example

```
AI Summary

Topics

Skills

Estimated Time

Difficulty

Recommendations
```

Generated content should never look like plain text.

---

# Status Badges

Use badges for:

Completed

Processing

Pending

Error

Success

Draft

Recommended colors

Green

Amber

Red

Gray

Using existing project tokens whenever possible.

---

# Empty States

Every empty screen should include:

Illustration or Icon

Friendly message

Primary action

Example

```
No documents uploaded yet.

Upload your first planning document to start generating AI insights.

[ Upload Document ]
```

Never leave empty white pages.

---

# Loading States

Every async action should include:

Skeleton

Spinner

Progress

Animated status

Examples

```
Uploading...

Analyzing...

Generating...

Almost Done...
```

Avoid static loaders.

---

# Animations

Use Framer Motion.

Recommended animations

Fade

Slide

Scale

Opacity

Keep durations between

```
150ms

300ms
```

Avoid excessive animation.

---

# Responsiveness

Desktop First

Support:

Desktop

Tablet

Mobile

The interface should never break.

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

Visible focus states.

Proper aria-label attributes.

Sufficient color contrast.

---

# Component Reuse

Before creating a new component ask:

Can an existing component be reused?

If yes

Reuse it.

Never duplicate UI.

---

# Future Screens

All future modules must follow this document.

Examples

Analytics

AI Chat

Calendar

Teacher Assistant

Reports

Settings

Everything should feel like part of the same application.

---

# Dashboard Reference Images

The attached dashboard screenshots are **visual inspiration only**.

Rules:

- Do NOT copy them exactly.
- Preserve EducAssist branding.
- Preserve EducAssist colors.
- Preserve EducAssist typography.
- Adapt layouts when necessary.
- Reuse existing project components.

The reference images define:

- Layout ideas
- Information hierarchy
- Card organization
- Dashboard composition

They do NOT define the visual identity.

---

# User Experience Principles

Every screen should answer three questions immediately:

1. Where am I?
2. What can I do here?
3. What should I do next?

The user should never feel lost.

---

# Final Goal

EducAssist should feel like a polished AI SaaS product that is ready for investor presentations and teacher demonstrations.

The experience should communicate confidence, simplicity and innovation while remaining lightweight and easy to understand.

Every new interface created by an AI agent must follow this document before introducing any new visual patterns.