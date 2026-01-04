# EventosYa 🎉

[![CI/CD Pipeline](https://github.com/BrayanML26/ticketmaster-events/actions/workflows/ci.yml/badge.svg)](https://github.com/BrayanML26/ticketmaster-events/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
[![Tests](https://img.shields.io/badge/Tests-Passing-success.svg)](https://github.com/BrayanML26/ticketmaster-events)

> Descubre los mejores eventos de música, deportes, teatro y más en tu ciudad

EventosYa es una aplicación web moderna y profesional para descubrir eventos en tiempo real usando la API de Ticketmaster. Construida con las últimas tecnologías y mejores prácticas de desarrollo.

## ✨ Características

### 🎯 Funcionalidades Core
- **Búsqueda Avanzada**: Filtra eventos por categoría, ubicación y fecha
- **Favoritos Persistentes**: Guarda tus eventos favoritos localmente
- **Vista de Detalles**: Información completa de cada evento
- **Eventos Relacionados**: Sugerencias basadas en categorías
- **Paginación Infinita**: Carga más eventos sin recargar la página

### 🚀 Características Técnicas Avanzadas
- **Progressive Web App (PWA)**: Instalable y funciona offline
- **Skeleton Loaders**: Mejor percepción de rendimiento
- **Dark Mode**: Soporte completo para modo oscuro
- **Responsive Design**: Optimizado para móviles, tablets y desktop
- **Testing Completo**: Tests unitarios con Vitest
- **CI/CD**: Pipeline automatizado con GitHub Actions

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI con hooks modernos
- **TypeScript** - Tipado estático para mayor confiabilidad
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animaciones fluidas

### Estado y Data Fetching
- **TanStack Query (React Query) v5** - Server state management
- **Zustand** - Client state management
- **React Router v6** - Navegación declarativa

### Testing
- **Vitest** - Test runner ultra-rápido
- **React Testing Library** - Testing de componentes
- **jsdom** - DOM environment para tests

### PWA
- **vite-plugin-pwa** - Service Worker y manifest
- **Workbox** - Estrategias de caché inteligentes

### DevOps
- **GitHub Actions** - CI/CD automatizado
- **ESLint** - Linting de código
- **TypeScript Compiler** - Type checking

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/BrayanML26/ticketmaster-events.git

# Instalar dependencias
cd ticketmaster-events
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y agregar tu VITE_API_KEY de Ticketmaster

# Iniciar servidor de desarrollo
npm run dev
```

## 🔑 Variables de Entorno

```env
VITE_API_KEY=tu_api_key_de_ticketmaster
VITE_COUNTRY_CODE=MX
```

Obtén tu API key en: [Ticketmaster Developer Portal](https://developer.ticketmaster.com/)

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests con UI
npm run test:ui

# Coverage report
npm run test:coverage
```

## 🏗️ Build

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

## 📱 PWA

La aplicación es una Progressive Web App completamente funcional:

- ✅ Instalable en dispositivos móviles y desktop
- ✅ Funciona offline con datos cacheados
- ✅ Iconos personalizados para iOS y Android
- ✅ Estrategias de caché optimizadas

## 🎨 Características de Diseño

- **Tipografía**: Montserrat para una apariencia moderna
- **Paleta de Colores**: Purple (#7C3AED) como color primario
- **Animaciones**: Transiciones suaves con Framer Motion
- **Glassmorphism**: Efectos de vidrio esmerilado
- **Skeleton Loaders**: Animación shimmer personalizada

## 🔄 CI/CD Pipeline

Cada push a `main` ejecuta automáticamente:

1. **Tests**: Todos los tests unitarios
2. **Lint**: Validación de código con ESLint
3. **Build**: Compilación de producción
4. **Coverage**: Reporte de cobertura de tests

## 📊 Estructura del Proyecto

```
ticketmaster-events/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── public/
│   ├── pwa-192x192.png     # PWA icons
│   └── pwa-512x512.png
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── hooks/             # Custom hooks
│   ├── routes/            # Configuración de rutas
│   ├── state/             # Zustand stores
│   ├── test/              # Testing utilities
│   ├── types/             # TypeScript types
│   └── views/             # Páginas principales
├── vitest.config.ts       # Configuración de Vitest
└── vite.config.js         # Configuración de Vite + PWA
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Brayan ML**

- GitHub: [@BrayanML26](https://github.com/BrayanML26)

## 🙏 Agradecimientos

- [Ticketmaster API](https://developer.ticketmaster.com/) por proporcionar los datos de eventos
- [Lucide Icons](https://lucide.dev/) por los iconos
- [Google Fonts](https://fonts.google.com/) por la tipografía Montserrat

---

⭐️ Si te gusta este proyecto, dale una estrella en GitHub!
