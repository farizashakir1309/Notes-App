# Notes App

## Overview

A React-based notes application that allows users to create, edit, and manage personal notes. The application is built with modern web technologies including React 18, Vite for build tooling, and a clean, responsive user interface. The project is configured for easy deployment and development with hot module replacement support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with modern hooks and functional components
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: CSS modules with a clean, modern design system
- **Component Structure**: Single-page application with component-based architecture

### Development Environment
- **Hot Module Replacement**: Configured for instant development feedback
- **TypeScript Support**: Type definitions included for React components
- **Development Server**: Configured to run on host 0.0.0.0:5000 for accessibility in container environments

### Build and Deployment
- **Module System**: ES modules with modern JavaScript features
- **Production Build**: Optimized bundling through Vite
- **Preview Mode**: Production preview capability on the same port configuration

### UI/UX Design Decisions
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Color Scheme**: Clean, professional color palette with blue accents (#007bff)
- **Typography**: System fonts for optimal performance and native feel
- **Layout**: Centered container with maximum width of 800px for optimal readability

## External Dependencies

### Runtime Dependencies
- **react**: ^18.2.0 - Core React library for component rendering and state management
- **react-dom**: ^18.2.0 - DOM-specific methods for React components

### Development Dependencies
- **@vitejs/plugin-react**: ^4.0.3 - Vite plugin for React support with fast refresh
- **vite**: ^4.4.5 - Build tool and development server
- **@types/react**: ^18.2.15 - TypeScript type definitions for React
- **@types/react-dom**: ^18.2.7 - TypeScript type definitions for ReactDOM

### Build System
- **Vite Configuration**: Optimized for development with HMR and production builds
- **Plugin Architecture**: React plugin for JSX transformation and fast refresh
- **Server Configuration**: Host and port settings optimized for container deployment