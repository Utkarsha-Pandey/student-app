# Student App

A modern, interactive language learning application built with React, TypeScript, and Tailwind CSS. The app provides personalized learning paths, interactive quizzes, peer connections, and AI-powered features to enhance language acquisition.

## How to Run the Project

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Assumptions Made

- **User Authentication**: The app assumes users are authenticated before accessing pages. Navigation components are available throughout the application without explicit login flows.
- **API Integration**: Data is currently hardcoded in components. In a production environment, this would be replaced with API calls to a backend server.
- **Image Assets**: Local images (Fountain.png, Choosing_path.png) are stored in the `src/` directory. Some story thumbnails use external URLs as placeholders.
- **Mobile-First Design**: The UI is optimized for mobile devices with a fixed bottom navigation bar. Responsive design follows mobile-first approach.
- **Responsive Layout**: All components are designed to work on screens as small as 320px and scale to larger displays.
- **Tailwind CSS 4**: Uses modern Tailwind CSS 4 with the `@tailwindcss/vite` plugin for optimal build performance.

## Folder Structure

```
student-app/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── BottomNav.tsx          # Fixed bottom navigation with 4 main routes
│   │   └── pages/
│   │       ├── Home.tsx               # Main landing page with stories & practice cards
│   │       ├── Quiz.tsx               # Challenge level selection & custom quiz creation
│   │       ├── Player.tsx             # Audio/content player page
│   │       └── [Other pages]          # Additional page components
│   ├── assets/                        # Static assets folder
│   ├── App.css                        # App-level styles
│   ├── App.tsx                        # Main app component with routing
│   ├── index.css                      # Global styles and Tailwind directives
│   ├── main.tsx                       # React DOM render entry point
│   ├── Fountain.png                   # Local image asset
│   └── Choosing_path.png              # Local image asset
├── public/                            # Static files served as-is
├── tailwind.config.js                 # Tailwind CSS configuration with custom colors
├── vite.config.ts                     # Vite build configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Project dependencies & scripts
├── eslint.config.js                   # ESLint configuration
├── postcss.config.js                  # PostCSS configuration
└── README.md                          # This file
```

### Key Directories Explained

- **`src/components/layout/`**: Contains layout components like navigation that wrap page content
- **`src/components/pages/`**: Contains page-level components representing different routes/screens
- **`src/assets/`**: Placeholder for images, icons, and other static assets
- **`public/`**: Public files that are served directly without processing

### Design System

- **Custom Colors**: 
  - `brand-green`: #10B981 (primary brand color)
  - `brand-light`: #D1FAE5 (light accent)
  - `brand-orange`: #F97316 (secondary accent)
- **Font**: Inter sans-serif
- **Styling**: Tailwind CSS utility classes with custom configuration
