# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All development is currently focused in the `frontend/` directory which contains a React + TypeScript + Vite application.

### Primary Commands (run from `frontend/` directory):
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

### Testing
No test framework is currently configured. Check project requirements before adding testing setup.

## Project Architecture

This is the J.A.R.V.I.S (Just A Rather Very Intelligent System) personal automation platform project. The current implementation is an early-stage chat interface prototype.

### Current Structure:
```
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── App.tsx          # Main app component with glassmorphic layout
│   │   ├── Chat.tsx         # Chat interface component
│   │   ├── main.tsx         # React app entry point
│   │   └── index.css        # Global styles with Tailwind
│   ├── package.json         # Dependencies and scripts
│   └── vite.config.ts       # Vite build configuration
├── JARVIS_PROJECT_PLAN.md   # Comprehensive project roadmap and architecture
└── [config files at root]   # Tailwind and PostCSS configuration
```

### Technology Stack:
- **Frontend**: React 19 + TypeScript + Vite
- **UI Framework**: Shadcn/UI + Radix UI primitives
- **Styling**: Tailwind CSS v4 with advanced glassmorphic design system
- **Icons**: Lucide React
- **Build**: Vite with standard React plugin
- **Linting**: ESLint with TypeScript, React Hooks, and React Refresh plugins
- **Utilities**: class-variance-authority, clsx, tailwind-merge for component variants

### Advanced Design System:
The application features a sophisticated glassmorphic design system with:

**Core Design Framework:**
- **Shadcn/UI Components**: Pre-built, accessible components with consistent styling
- **Radix UI Primitives**: Complex interactions (dialogs, dropdowns, tooltips, scroll areas, avatars)
- **Custom Glass Morphism System**: Multi-layered glass effects with advanced backdrop blur
- **Design Tokens**: HSL-based color system with CSS custom properties

**Visual Effects:**
- **Glass Classes**: `.glass-light`, `.glass-medium`, `.glass-heavy`, `.glass-advanced`
- **Advanced Backdrop Blur**: `backdrop-filter: blur(24px)` with saturation enhancement
- **Diamond Gradient Effects**: Multi-color animated gradients with shimmer animations
- **Message Bubble Hover Effects**: Smooth light refraction animations
- **Floating Animations**: Background elements with 6s ease-in-out cycles

**Color System:**
- **Primary Green**: `hsl(141, 81%, 40%)` for accent elements
- **Background**: Dark theme with `hsl(240, 15%, 4%)` base
- **Glass Overlays**: Semi-transparent white with varying opacity levels
- **Gradient Animations**: Diamond gradients across green, cyan, blue, and purple hues

**Typography:**
- **Primary Font**: Urbanist (Google Fonts) for body text and UI elements  
- **Secondary Font**: Montserrat (Google Fonts) for labels and metadata
- **Font Features**: Ligatures and contextual alternates enabled

**Component Architecture:**
- **Button Variants**: default, glass, gradient, outline, ghost, etc.
- **Message Bubbles**: Custom glass effects with hover animations
- **Avatars**: Glass-styled with icon fallbacks for user/assistant identification
- **Scroll Areas**: Enhanced with custom scrollbar styling
- **Input Fields**: Glass background with green accent focus rings

### Current Implementation Status:
- ✅ Basic chat interface with glassmorphic styling
- ✅ Message state management with TypeScript interfaces
- ✅ Responsive design and smooth scrolling
- 🚧 Static demo responses (no AI integration yet)
- 🚧 No backend or database connectivity
- 🚧 No authentication or user management

### Architecture Notes:
- The project plan indicates this will evolve into a comprehensive automation platform with backend services, databases (Supabase), MCP server integration, and Claude AI integration
- Current code is a UI prototype focusing on design and user experience
- No shared types or utilities are implemented yet
- Component structure is minimal and will need expansion for the full system

### Future Development Areas (from project plan):
- Backend API with Express/Fastify
- Supabase integration for data persistence
- Claude AI integration for intelligent responses
- MCP server for automation tools
- Webhook system for external integrations
- Mobile PWA capabilities
- Advanced workflow management