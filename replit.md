# Tropica Pharmacy Web Application

## Overview

This is a full-stack web application for Tropica Pharmacy, a pharmacy located in Sri Thanu, Koh Phangan, Thailand. The application serves as a digital presence for the pharmacy, showcasing their services, products, and providing information to customers. It features a modern, tropical-themed design that reflects the pharmacy's location in a tropical paradise setting.

The application is built as a single-page application (SPA) with sections for services, products, about information, and contact details. It's designed to be responsive and user-friendly, targeting both local residents and tourists visiting Koh Phangan.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom tropical theme using CSS variables for consistent design
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: React Router for client-side navigation
- **Form Handling**: React Hook Form with Zod validation for robust form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for the REST API
- **Language**: TypeScript throughout the entire application for consistency
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Storage**: In-memory storage implementation for development/testing

### Project Structure
The application follows a monorepo structure with clear separation of concerns:
- `client/` - Frontend React application
- `server/` - Backend Express API
- `shared/` - Shared TypeScript types and database schema
- Component organization follows domain-driven design with reusable UI components

### Data Architecture
- **Schema Definition**: Centralized in `shared/schema.ts` using Drizzle ORM
- **Type Safety**: Full end-to-end TypeScript integration with Zod validation
- **Database Migrations**: Managed through Drizzle Kit with PostgreSQL dialect
- **Development Data**: Mock data structure for products and services during development

### Styling System
- **Design System**: Custom tropical-themed design with semantic color tokens
- **Theme**: Tropical paradise aesthetic with deep greens, golden accents, and ocean blues
- **Component Variants**: Consistent styling patterns using class-variance-authority
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

### Development Environment
- **Hot Module Replacement**: Vite-powered development with instant feedback
- **Error Handling**: Runtime error overlay for development debugging
- **Type Checking**: Continuous TypeScript compilation checking
- **Path Resolution**: Absolute imports configured for clean import statements

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **PostgreSQL**: Primary database engine with JSON support

### UI and Styling
- **Radix UI**: Headless, accessible UI component primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type system for JavaScript
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Frontend Libraries
- **TanStack Query**: Data fetching and caching library
- **React Router**: Declarative routing for React applications
- **React Hook Form**: Performance-focused form library
- **Zod**: TypeScript-first schema validation
- **Date-fns**: Modern date utility library

### Backend Dependencies
- **Express.js**: Web application framework for Node.js
- **Connect-pg-simple**: PostgreSQL session store for Express
- **Nanoid**: URL-safe unique string ID generator

### Replit Integration
- **Replit Vite Plugins**: Development environment integration including error overlay and cartographer for enhanced debugging experience