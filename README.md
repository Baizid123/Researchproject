# Movie Recommendation Dashboard

A full-stack movie recommendation system built with React, Express, and PostgreSQL. Features content-based filtering using TF-IDF vectorization and AI-powered recommendations through Google's Gemini API.

## Features

- **Content-Based Recommendations**: Pure text similarity using TF-IDF vectorization
- **Hybrid with AI Recommendations**: Combined approach using TF-IDF (40%), genre overlap (30%), rating quality (20%), popularity (10%), plus Gemini AI for contextual analysis
- **Trending Movies**: Dashboard section showing top movies by computed trend score
- **Method Comparison**: Side-by-side comparison of both recommendation methods with diversity scoring
- **Interactive Visualizations**: Charts for genre distribution, ratings, and correlation analysis
- **Dark/Light Theme**: Full theme support with system preference detection

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS
- Shadcn/ui components
- TanStack Query (React Query)
- Recharts (visualizations)

**Backend:**
- Express.js with TypeScript
- PostgreSQL with Drizzle ORM
- Google Gemini API

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Google Gemini API key

## Installation

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/movie_recommender
   GEMINI_API_KEY=your_gemini_api_key_here
   SESSION_SECRET=your_session_secret_here
   ```

4. **Set up the database:**
   ```bash
   npm run db:push
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   │   ├── tabs/       # Main tab components (Dashboard, Recommendations, etc.)
│   │   │   └── ui/         # Shadcn UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── pages/          # Page components
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage and recommendation logic
│   └── vite.ts             # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema and TypeScript types
├── attached_assets/        # Static assets and movie dataset
│   └── tmdb_5000_movies.csv  # Movie dataset (4800+ movies)
├── package.json            # Dependencies
└── README.md               # This file
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/movies` | GET | Get all movies |
| `/api/movies/search` | GET | Search movies by title |
| `/api/recommendations/content-based` | GET | Get content-based recommendations |
| `/api/recommendations/hybrid-ai` | GET | Get hybrid AI recommendations |
| `/api/analytics/trending` | GET | Get trending movies |
| `/api/analytics/compare` | GET | Compare both recommendation methods |
| `/api/preprocessing/stats` | GET | Get preprocessing statistics |
| `/api/visualization/genres` | GET | Get genre distribution data |

## Recommendation Algorithms

### Content-Based (TF-IDF)
Uses Term Frequency-Inverse Document Frequency to compute text similarity between movies based on:
- Movie overview/description
- Genres
- Keywords
- Cast and director

### Hybrid with AI
Combines multiple signals:
- **TF-IDF similarity (40%)**: Text-based matching
- **Genre overlap (30%)**: Shared genre scoring
- **Rating quality (20%)**: Vote average consideration
- **Popularity signal (10%)**: Popularity boost
- **Gemini AI**: Contextual analysis, re-ranking, and personalized explanations

### Trending Score
Computed as: `(popularity × 50%) + (vote_count × 30%) + (recency_boost × 20%)`

### Diversity Score
Shannon entropy-based calculation measuring genre variety in recommendations (0-1 scale).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run db:push` | Push database schema |

## Dataset

The application uses the TMDB 5000 Movies dataset containing:
- 4,800+ movies
- 22 unique genres
- Attributes: title, overview, genres, cast, crew, keywords, ratings, popularity, release date

## License

MIT License
