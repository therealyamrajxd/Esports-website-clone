# Gacky Discord Bot Website

## Overview

This is a marketing and showcase website for Gacky, a Discord bot focused on esports tournament management and server moderation. The application presents bot features, pricing information, documentation, and a contact system. Built with React, Express, and TypeScript, it employs a modern tech stack with shadcn/ui components and a gaming-focused design aesthetic featuring purple-pink gradients and dark mode theming.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**: React SPA with Wouter for client-side routing. The application uses a simple route-based page structure (Home, About, Premium, Documentation, Vote, Contact) with a shared Navigation and Footer layout.

**UI Component System**: Built entirely on shadcn/ui (Radix UI primitives) with custom theming. Components follow the "New York" style variant with extensive customization for gaming aesthetics through Tailwind CSS.

**Styling Architecture**: 
- Tailwind CSS as the primary styling solution
- Custom CSS variables for theming (light/dark mode support)
- Design system based on purple-pink-blue gradient palette
- Gaming/tech aesthetic with neon-like accents
- Custom elevation system using `--elevate-1` and `--elevate-2` CSS variables
- Poppins font from Google Fonts for modern, geometric typography

**State Management**: React Query (@tanstack/react-query) for server state management. Form state handled by react-hook-form with Zod validation via @hookform/resolvers.

**Build System**: Vite as the build tool and dev server, configured with React plugin and development-specific Replit plugins (cartographer, dev-banner, runtime-error-modal).

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript. The server uses a middleware-based architecture with custom logging, JSON body parsing, and error handling.

**Development Setup**: Vite middleware integration in development mode for HMR and seamless client-server development experience. Production builds serve static files from dist/public.

**API Design**: RESTful API pattern with endpoints under `/api` prefix. Currently implements contact form submission and message retrieval endpoints.

**Data Validation**: Zod schemas defined in shared schema file, used for both runtime validation and TypeScript type inference.

### Data Storage

**Current Implementation**: In-memory storage using a Map-based storage class (MemStorage). This provides a simple IStorage interface with methods for users and contact messages.

**Schema Design**: Drizzle ORM schemas defined for PostgreSQL with:
- Users table: id (UUID), username, password
- Contact messages table: id (UUID), name, email, subject, message, submittedAt timestamp

**Database Configuration**: Drizzle Kit configured for PostgreSQL migrations, expecting DATABASE_URL environment variable. Migration files output to ./migrations directory.

**Storage Interface Pattern**: Abstract IStorage interface allows swapping between in-memory and database implementations without changing application logic.

### Build & Deployment

**Development**: `npm run dev` runs tsx server with NODE_ENV=development, enabling Vite middleware and HMR.

**Production Build**: Two-step process:
1. Vite builds React client to dist/public
2. esbuild bundles server code to dist/index.js as ESM module

**Type Safety**: TypeScript strict mode enabled across entire codebase with path aliases (@/, @shared/, @assets/) for clean imports.

## External Dependencies

### UI & Component Libraries
- **@radix-ui/***: Comprehensive set of unstyled, accessible React components (accordion, dialog, dropdown, select, toast, etc.)
- **shadcn/ui**: Component system built on Radix UI with custom styling
- **class-variance-authority**: Type-safe component variant management
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **lucide-react**: Icon library for UI elements
- **react-icons**: Additional icons (specifically SiDiscord for Discord branding)

### Forms & Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod resolver for react-hook-form
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod

### Database & ORM
- **drizzle-orm**: TypeScript ORM for SQL databases
- **drizzle-kit**: CLI tools for migrations and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon-compatible)

### State Management
- **@tanstack/react-query**: Server state management and data fetching

### Build Tools & Development
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: Vite plugin for React
- **@replit/vite-plugin-***: Replit-specific development tools (cartographer, dev-banner, runtime-error-modal)
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds

### Routing
- **wouter**: Lightweight React router (< 2KB)

### Additional UI Libraries
- **embla-carousel-react**: Carousel/slider component
- **cmdk**: Command palette component
- **date-fns**: Date utility library
- **vaul**: Drawer component library

### Session Management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used with current in-memory storage)

### Typography
- **Google Fonts**: Poppins (primary), Architects Daughter, DM Sans, Fira Code, Geist Mono (loaded via CDN in index.html)