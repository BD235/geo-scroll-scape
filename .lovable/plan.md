

# Personal Portfolio — Fixed Viewport, Vercel-Inspired

## Design System
- Background: `#FAFAFA` main, `#F3F4F6` cards
- Text: `#111827` headings, `#6B7280` body
- Borders: `#E5E7EB`, 1px subtle
- Font: Inter (geometric sans-serif)
- Rounded corners, hover-only soft shadows

## Layout (Desktop)
- Full viewport (`h-screen w-screen overflow-hidden`)
- **Top Navbar** (~80px): Logo left, nav center (Home/About/Works with active pill indicator), "Download CV" button right (black bg, white text, rounded)
- **Content Canvas** (`calc(100vh - 80px)`): State-driven view switching with `AnimatePresence` (fade out 0.15s, fade-in + slide-up 0.2s)

## Three Views

### Home
- Flexbox split: left side has large "Hello" greeting + intro text (Information Systems student, Frontend Dev & QA focus), right side has a placeholder image/illustration

### About (Bento Box)
- CSS Grid bento layout with cards for:
  - Education: Universitas Atma Jaya Yogyakarta
  - Tech Stack badges: React, Node.js, Python, Flask, Tailwind
  - Philosophy on clean UI building

### Works (Horizontal Carousel)
- Horizontally scrollable/swipeable project cards (no vertical scroll)
- Card 1: "Dorm Electricity Management" — OCR meter reading, Python/Flask
- Card 2: "Project bd02" — Self-hosted photo storage, React/Node.js/CockroachDB

## Mobile Responsiveness
- Below 768px: unlock vertical scrolling, stack navigation and content vertically, bento boxes stack single-column

## Tech
- React + Vite + TypeScript + Tailwind CSS
- `framer-motion` for AnimatePresence transitions
- shadcn/ui components where applicable
- State management via React `useState` for active tab

