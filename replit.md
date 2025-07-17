# Beauty Salon Application - Architecture Guide

## Overview

This is a full-stack web application for a beauty salon and academy business built with React, Express, and PostgreSQL. The application features a modern landing page showcasing beauty services, academy training programs, and includes a contact form for customer inquiries. The architecture follows a monorepo structure with clear separation between client, server, and shared components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom beauty salon color scheme (rose gold, soft pink, deep rose, cream)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express backend API
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with parallax background
   - Services showcase (skin care, hair care, massage)
   - Academy training programs
   - Image gallery
   - Customer testimonials
   - Contact form with service selection

2. **UI Framework**:
   - Complete shadcn/ui component library implementation
   - Custom theme with beauty salon branding
   - Responsive design for mobile and desktop
   - Form handling with React Hook Form and Zod validation

### Backend Components
1. **Express Server**:
   - Middleware for request logging and error handling
   - Route registration system
   - Development-only Vite integration for HMR

2. **Storage Layer**:
   - Interface-based storage design for flexibility
   - Current implementation using in-memory storage
   - Ready for PostgreSQL integration with Drizzle ORM

3. **Database Schema**:
   - User management system with username/password
   - Zod schemas for validation
   - Type-safe database operations with Drizzle

## Data Flow

### Client-Server Communication
1. **API Requests**: TanStack Query manages all server communication
2. **Error Handling**: Centralized error handling with toast notifications
3. **Form Submissions**: Contact form data processed through validated API endpoints
4. **Real-time Updates**: Query invalidation for dynamic content updates

### Database Operations
1. **ORM Layer**: Drizzle ORM provides type-safe database access
2. **Schema Management**: Centralized schema definitions in shared directory
3. **Migrations**: Drizzle Kit handles database schema migrations
4. **Validation**: Zod schemas ensure data integrity at API boundaries

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Forms**: React Hook Form with Hookform/resolvers for validation
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied by shadcn/ui setup)
- **Development Server**: Hot module replacement with Vite

### Replit Integration
- **Error Overlay**: @replit/vite-plugin-runtime-error-modal for development
- **Cartographer**: @replit/vite-plugin-cartographer for code mapping (development only)
- **Banner**: Replit development banner for external access

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema consistency

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development enables Vite middleware
- **Production**: NODE_ENV=production serves static files

### Scalability Considerations
- **Database**: Serverless PostgreSQL scales automatically
- **Storage**: Interface-based design allows easy migration to production database
- **Caching**: TanStack Query provides client-side caching
- **Static Assets**: Vite optimizes and bundles all static resources

### Development Workflow
1. **Database Setup**: `npm run db:push` applies schema changes
2. **Development**: `npm run dev` starts Express with Vite middleware
3. **Production**: `npm run build && npm start` for production deployment
4. **Type Safety**: `npm run check` validates TypeScript across entire project