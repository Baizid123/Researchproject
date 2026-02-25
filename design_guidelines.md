# Design Guidelines: Gen AI Movie Recommendation Dashboard

## Design Approach

**Selected Approach:** Design System - Material Design 3 (Dashboard variant)
**Theme:** Academic Tech Theme - Deep Blue + Soft Grey + White
**Justification:** This is a data-intensive analytics dashboard requiring clear information hierarchy, efficient data visualization, and consistent component patterns. The academic tech theme provides a professional, trustworthy appearance suitable for research and analysis applications.

**Core Design Principles:**
- **Clarity First:** Information density balanced with scannable layouts
- **Purposeful Hierarchy:** Visual weight guides users through complex data flows
- **Consistent Interaction:** Predictable patterns across all tabs reduce cognitive load
- **Professional Aesthetic:** Clean, academic look with subtle depth

---

## Color System

**Primary Palette:**
- **Primary (Deep Blue):** #1E3A8A / HSL(222, 65%, 33%) - Main actions, headers, sidebar
- **Secondary (Blue Accent):** #2563EB / HSL(217, 83%, 53%) - Highlights, links, interactive elements
- **Background (Off-White):** #F8FAFC / HSL(210, 40%, 98%) - Page background
- **Cards (White):** #FFFFFF - Card surfaces
- **Text (Dark Grey):** #111827 / HSL(222, 47%, 11%) - Primary text
- **Highlight/Success (Soft Green):** #10B981 / HSL(160, 84%, 39%) - Success states, AI-Assisted features

**Method-Specific Colors:**
- **Content-Based:** Blue-700 (#1D4ED8) / Blue-400 in dark mode - TF-IDF recommendations
- **Hybrid with AI:** Emerald-600 (#059669) / Emerald-400 in dark mode - TF-IDF + Metadata + Gemini AI

**Dark Mode:**
- Background: HSL(222, 40%, 8%)
- Cards: HSL(222, 35%, 12%)
- Text: HSL(210, 30%, 96%)
- Primary shifts to brighter blue HSL(217, 80%, 58%)

**Chart Colors:**
- Chart 1: Deep Blue (222, 65%, 33%)
- Chart 2: Blue Accent (217, 83%, 53%)
- Chart 3: Emerald (160, 84%, 39%)
- Chart 4: Purple (262, 60%, 55%)
- Chart 5: Amber (35, 90%, 52%)
- Chart 6: Rose (350, 70%, 55%)

---

## Typography System

**Font Stack:**
- **Primary:** Inter (via Google Fonts CDN) - excellent for UI and data readability
- **Monospace:** JetBrains Mono - for code snippets and numerical data

**Type Scale:**
- **Dashboard Title (H1):** 32px/40px, weight 700, letter-spacing -0.5px
- **Tab Headers (H2):** 24px/32px, weight 600
- **Section Headers (H3):** 18px/24px, weight 600
- **Card Titles (H4):** 16px/24px, weight 500
- **Body Text:** 14px/20px, weight 400
- **Small Text/Labels:** 12px/16px, weight 400
- **Code/Data:** 13px/18px, weight 400, monospace

---

## Layout System

**Spacing Primitives (Tailwind units):**
Primary spacing scale: **2, 4, 6, 8, 12, 16, 24**
- Micro spacing (gaps, padding): 2, 4
- Component spacing: 6, 8
- Section spacing: 12, 16, 24

**Grid Structure:**
- **Container:** max-w-7xl with px-6 on mobile, px-8 on desktop
- **Tabs Content Area:** Full width within container
- **Cards:** Grid layout - grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-6
- **Data Tables:** Full width with horizontal scroll on mobile

**Dashboard Layout (5 Main Tabs):**
```
[Sidebar Navigation: Logo + Tab Links + Theme Toggle]
[Main Content Area: Tab content with consistent padding]
```

**Tab Structure:**
1. Dashboard - Interactive overview with quick navigation
2. Data & Features - Merged preprocessing + feature engineering with sub-tabs
3. Visualization - Interactive charts with correlation heatmap
4. Recommendations - Unified tab with 2 sub-tabs (Content-Based, Hybrid with AI)
5. Evaluation - Model metrics with sub-tabs (Overview, Method Comparison, Detailed Metrics)

---

## Component Library

### Core Dashboard Components

**Tab Navigation:**
- Sidebar navigation with icons + text labels
- Active tab: Deep blue background accent
- Smooth transition animations (150ms ease)
- Collapsible on mobile

**Stat Cards (Metrics Display):**
- Card structure: p-6, rounded-lg
- Layout: Icon (48px) + Label (small text) + Value (large, bold)
- Grid: 3-4 cards per row on desktop, 1-2 on tablet, 1 on mobile
- Shadow: subtle elevation (shadow-sm in light, shadow-md in dark)

**Data Table Component:**
- Sticky header row
- Alternating row backgrounds for scanability
- Column sorting indicators
- Responsive: horizontal scroll on mobile with fixed first column
- Pagination controls at bottom

**Chart Containers:**
- Aspect ratio: 16:9 for large charts, 4:3 for smaller visualizations
- Recharts library for all visualizations
- Legend placement: bottom for horizontal charts, right for vertical
- Interactive tooltips with hover states
- Consistent padding: p-6 inside chart cards
- Use Academic theme colors for data series

**Code Output Viewer:**
- Collapsible accordion pattern
- Syntax highlighting
- Copy-to-clipboard button (top-right corner)
- Line numbers for code blocks
- Max height with scroll

**Form Components (Recommendations Tab):**
- Input fields: Standard height, rounded-md
- Select dropdowns: Full width with chevron indicator
- Buttons: Standard shadcn sizing, rounded-md
- Genre badges: Toggle-able with toggle-elevate class
- Slider for number of recommendations

**Movie Recommendation Cards:**
- Poster thumbnail (if available): 120px × 180px aspect ratio
- Title: Font weight 600, 16px
- Genre tags: Inline flex with gap-2, small badges
- Rating/Score: Prominent display with star icon
- Similarity/Match score: Displayed as percentage or progress bar
- AI reason (for AI-Assisted): Italic text, truncated at 2-3 lines

### Recommendation Method Indicators

**Content-Based (TF-IDF):**
- Icon: Search
- Color: Blue-700/Blue-400
- Description: Pure text similarity using TF-IDF vectorization

**Hybrid with AI:**
- Icon: BrainCircuit/Sparkles
- Color: Emerald-600/Emerald-400
- Description: 40% TF-IDF + 30% Genre + 20% Rating + 10% Popularity with Gemini AI contextual analysis and explanations

---

## Interaction Patterns

**Loading States:**
- Skeleton screens for data tables (shimmer effect)
- Spinner for API calls (centered, 40px)
- Progress bar for data processing steps
- AI loading: Special message "AI is enhancing recommendations..."

**Empty States:**
- Centered icon (96px) + Message + Action button
- Used when no data/recommendations available

**Error States:**
- Alert banner at top of relevant section
- Icon (warning/error) + Message + Retry button
- Non-blocking for most errors

**Hover States:**
- Use hover-elevate and active-elevate-2 utility classes
- Cards: subtle elevation increase
- Buttons: Built-in shadcn hover states
- Table rows: background change for scanability

---

## Animations

**Use Very Sparingly:**
- Tab switching: fade transition (200ms)
- Card appearances: stagger effect with 50ms delay between items
- Chart rendering: smooth draw-in animation (800ms, ease-out)
- NO scroll-triggered animations
- NO decorative motion

---

## Accessibility

- **Focus indicators:** 2px outline, high contrast
- **Color contrast:** All text meets WCAG AA standards against backgrounds
- **Keyboard navigation:** Full tab order through all interactive elements
- **ARIA labels:** All charts, buttons, and interactive elements properly labeled
- **Screen reader:** Table headers properly marked, row/column counts announced
- **Dark/Light mode:** Full support with appropriate contrast in both modes

---

## Tab-Specific Guidelines

**Dashboard Tab:**
- Quick search bar for movies
- Mini pie chart for genre distribution
- Movie spotlight with refresh button
- Mood/genre selector buttons
- Recent recommendations feed

**Data & Features Tab:**
- Sub-tabs: Data Overview, Preprocessing, Feature Engineering
- Summary stats in stat cards
- Data preview table with pagination
- TF-IDF visualization

**Visualization Tab:**
- 2×2 grid of charts on desktop, stacked on mobile
- Genre distribution: Bar chart
- Rating distribution: Histogram
- Popularity trends: Line chart
- Correlation matrix: Heatmap

**Recommendations Tab (Unified):**
- Sub-tabs: Content-Based (TF-IDF), Hybrid with AI
- Each sub-tab has info card explaining the method
- Content-Based: Movie search with TF-IDF similarity
- Hybrid with AI: Mood query, seed movie, genre preferences + Gemini contextual analysis
- Number of recommendations slider
- Results grid showing movie cards with similarity/match scores
- Code viewer showing algorithm (collapsible)

**Evaluation Tab:**
- Sub-tabs: Overview, Method Comparison, Detailed Metrics
- Overview: 2 method summary cards + incremental improvement chart
- Comparison: Bar charts and radar chart comparing Content-Based vs Hybrid with AI
- Details: Complete metrics table + method strengths cards + hybrid component weights
- Export report button

---

This dashboard prioritizes **information clarity, efficient workflows, and data-driven decision making** over decorative elements. The Academic Tech theme creates a professional, trustworthy analytics environment suitable for exploring and evaluating movie recommendations.
