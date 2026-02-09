# Quest Learner Readiness Application

A **mobile-first React + TypeScript dashboard** that visualizes learner readiness, activities, and AI-driven insights using structured dummy data.

---

## Features Overview

- Readiness dashboard with score visualization and progress messaging
- Skill breakdown with per-skill scoring
- AI-generated insights derived from learner data (dummy)
- “Up Next” activity recommendations
- Centralized icon system
- Modular UI components with clear separation of concerns
- Mobile-first layout with responsive extension points
- Typed dummy data simulating real API responses

---

## 🛠 Tech Stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **lucide-react** (icons)
- Local JSON files as mock APIs

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Node.js ≥ 18
- npm or pnpm

### Installation

```bash
git clone git@github.com:kenyansa/quest-demo-learner-readiness-application.git
OR
git clone https://github.com/kenyansa/quest-demo-learner-readiness-application.git
cd quest-demo-learner-readiness-application
npm install

```

### Runnig Locally

```bash
npm run dev

Application will be at: http://localhost:5175

```

---

## 🎥 Project Walkthrough

▶️ [Watch the 3–5 minute Loom walkthrough](https://www.loom.com/share/f481e7981d5745219f4f9cfd664a9a17)

## 🧩 UI & Component Architecture

### UI Primitives (`components/ui`)

Reusable, stateless UI building blocks such as **Button**, **Card**, **Badge**, **Progress**, and **Avatar**.  
These components are style-driven and shared across the application to ensure visual consistency and reusability.

### Dashboard Components (`components/dashboard`)

Feature-level components responsible for composing UI primitives into meaningful dashboard sections:

- **Cards**: Readiness summary, AI insights, and “Up Next”
- **Skills**: Skill breakdown and per-skill rows
- Supporting visual components such as progress rings and contextual messages

### Layouts (`layouts`)

Shared application scaffolding:

- `AppLayout` composes the overall page structure
- `Sidebar`, `MobileNav`, and `Topbar` provide responsive navigation depending on screen size

### Pages (`pages`)

Route-level containers responsible for:

- Composing layout and feature components
- Selecting and passing data
- Acting as navigation boundaries

### Routing (`routes`)

Centralized routing configuration using React Router, including a fallback **NotFound** route for all invalid paths.

---

## Dummy Data & Data Flow

### Data Sources

Located in `src/json/`:

- `readiness.json` – readiness scores and skill metrics
- `activities.json` – learner activity history and upcoming items

### Usage Pattern

- Imported via helper functions in `utils/mock.ts`
- Strongly typed using shared interfaces from `types/`
- Treated as immutable API responses to mirror real backend integration

## Business Logic & Utilities

### Insights Computation (`lib/insights.ts`)

Encapsulates derived logic away from UI components:

- Sorts skills by score
- Identifies strongest and weakest areas
- Generates a contextual insight message based on score variance

This approach keeps components declarative and makes the logic easily testable or replaceable with server-side insights.

---

## Styling

- Tailwind CSS with a global stylesheet (`globals.css`)
- Neutral background color and full-height layout
- Mobile-first styling approach with responsive breakpoints

---

## Assumptions & Trade-offs

### Assumptions

- Data structure is stable and controlled
- Single-user context (no authentication or authorization)
- Client-side computation is sufficient for insights

### Trade-offs

- No global state management library (kept intentionally lightweight)
- No real backend or persistence layer
- Minimal animation to prioritize clarity and maintainability
- Planned to use Recharts library for trend visualization, but opted for a simpler implementation due to scope

---

## Extension Ideas

### Real API Integration

- Replace JSON files with REST or GraphQL endpoints
- Introduce data fetching libraries such as React Query or SWR

### Scalability

- Transition to a feature-based module structure as the app grows
- Add route guards and role-based layouts

### Responsiveness

- Enhanced tablet and large-screen layouts
- Progressive disclosure patterns for mobile views

### Performance

- Memoization for derived and expensive computations
- Code splitting at the route level

## Why these architectural decisions?

- Prioritized clarity, scalability, and maintainability over premature complexity
- Separated UI primitives from feature-level components to encourage reuse and consistent styling
- Extracted business logic (e.g. insight computation) into utility modules to keep components declarative
- Clearly delineated layouts, pages, and routing to mirror real-world application scaling
- Chose patterns that support team growth and feature expansion while remaining appropriate for the interview scope

---
