# Scenry 🎉

[![CI/CD Pipeline](https://github.com/BrayanML26/ticketmaster-events/actions/workflows/ci.yml/badge.svg)](https://github.com/BrayanML26/ticketmaster-events/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
[![Tests](https://img.shields.io/badge/Tests-Passing-success.svg)](https://github.com/BrayanML26/ticketmaster-events)

> Discover live experiences. Explore what's happening around you.

**Scenry** is a modern, professional web application for discovering live events in real-time using the Ticketmaster API. Built with the latest technologies and development best practices.

## ✨ Features

### 🎯 Core Functionality
- **Advanced Search**: Filter events by category, location, and date
- **Persistent Favorites**: Save your favorite events locally
- **Detail View**: Comprehensive information for every event
- **Related Events**: Smart suggestions based on categories
- **Infinite Pagination**: Seamlessly load more events without page reloads

### 🚀 Advanced Technical Features
- **Progressive Web App (PWA)**: Installable and offline-capable
- **Skeleton Loaders**: Enhanced perceived performance
- **Dark Mode**: Full support for dark theme
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Comprehensive Testing**: Unit tests with Vitest
- **CI/CD**: Automated pipeline with GitHub Actions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with modern hooks
- **TypeScript** - Static typing for reliability
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Fluid animations

### State & Data Fetching
- **TanStack Query (React Query) v5** - Server state management
- **Zustand** - Client state management
- **React Router v6** - Declarative navigation

### Testing
- **Vitest** - Blazing fast test runner
- **React Testing Library** - Component testing utils
- **jsdom** - DOM environment for tests

### PWA
- **vite-plugin-pwa** - Service Worker and manifest generation
- **Workbox** - Intelligent caching strategies

### DevOps
- **GitHub Actions** - Automated CI/CD
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/BrayanML26/ticketmaster-events.git

# Install dependencies
cd ticketmaster-events
npm install

# Configure environment variables
cp .env.example .env
# Edit .env and add your Ticketmaster VITE_API_KEY

# Start development server
npm run dev
```

## 🔑 Environment Variables

```env
VITE_API_KEY=your_ticketmaster_api_key
VITE_COUNTRY_CODE=MX
```

Get your API key at: [Ticketmaster Developer Portal](https://developer.ticketmaster.com/)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## 🏗️ Build

```bash
# Production build
npm run build

# Preview build
npm run preview
```

## 📱 PWA

The application is a fully functional Progressive Web App:

- ✅ Installable on mobile and desktop devices
- ✅ Works offline with cached data
- ✅ Custom icons for iOS and Android
- ✅ Optimized caching strategies

## 🎨 Design Features

- **Typography**: Montserrat for a modern look
- **Color Palette**: Purple (#7C3AED) as primary color
- **Animations**: Smooth transitions with Framer Motion
- **Glassmorphism**: Frosted glass effects
- **Skeleton Loaders**: Custom shimmer animation

## 🔄 CI/CD Pipeline

Every push to `main` automatically triggers:

1. **Tests**: All unit tests
2. **Lint**: Code validation with ESLint
3. **Build**: Production compilation
4. **Coverage**: Test coverage report

## 📊 Project Structure

```
ticketmaster-events/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── public/
│   ├── pwa-192x192.png     # PWA icons
│   └── pwa-512x512.png
├── src/
│   ├── components/         # Reusable components
│   ├── hooks/             # Custom hooks
│   ├── routes/            # Route configuration
│   ├── state/             # Zustand stores
│   ├── test/              # Testing utilities
│   ├── types/             # TypeScript types
│   └── views/             # Main pages
├── vitest.config.ts       # Vitest configuration
└── vite.config.js         # Vite + PWA configuration
```

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Brayan ML**

- GitHub: [@BrayanML26](https://github.com/BrayanML26)

## 🙏 Acknowledgements

- [Ticketmaster API](https://developer.ticketmaster.com/) for providing event data
- [Lucide Icons](https://lucide.dev/) for icons
- [Google Fonts](https://fonts.google.com/) for Montserrat typography

---

⭐️ If you like this project, give it a star on GitHub!
