# Compiladores_JS - News Application

A modern news application built with TypeScript, SCSS, and Gulp that consumes the News API to display and search for news articles.

## 📰 Features

- **News Display**: Fetches and displays news articles from News API
- **Search Functionality**: Search for specific news topics
- **Responsive Design**: Modern grid layout that adapts to different screen sizes
- **Real-time Updates**: Live search with instant results
- **Template Engine**: Uses Handlebars.js for dynamic content rendering

## 🛠️ Technologies Used

- **TypeScript** - Type-safe JavaScript development
- **SCSS/Sass** - Advanced CSS preprocessing
- **Gulp** - Task automation and build system
- **Axios** - HTTP client for API requests
- **Handlebars.js** - Template engine for dynamic content
- **News API** - External news data source

## 📁 Project Structure

```
Compiladores_JS/
├── assets/                 # Compiled assets
│   ├── scripts/           # Compiled JavaScript files
│   └── styles/            # Compiled CSS files
├── src/                   # Source files
│   ├── scripts/          # TypeScript source files
│   │   ├── main.ts       # Main application logic
│   │   └── news.ts       # News API service class
│   └── styles/           # SCSS source files
│       ├── _variables.scss
│       ├── _formatGrids.scss
│       └── styles.scss
├── gulpfile.js           # Gulp build configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
└── index.html           # Main HTML file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MikeGonzaBar/Compiladores_JS.git
cd Compiladores_JS
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the development server:
```bash
npm run serve
```

## 📜 Available Scripts

- `npm run build` - Compiles TypeScript and SCSS files
- `npm run styles` - Compiles only SCSS files
- `npm run tsc` - Compiles only TypeScript files
- `npm run scripts:watch` - Watches TypeScript files for changes
- `npm run serve` - Starts development server with file watching

## 🔧 Build Process

The project uses Gulp for automation:

- **TypeScript Compilation**: Transpiles `.ts` files to `.js` in the `assets/scripts/` directory
- **SCSS Compilation**: Compiles `.scss` files to `.css` in the `assets/styles/` directory
- **File Watching**: Automatically recompiles files when changes are detected

## 🎯 Usage

1. Open `index.html` in your browser
2. The application will automatically load news articles about Apple
3. Use the search bar to find news about specific topics
4. Click "Ver más" to read the full article

## 🔌 API Integration

The application integrates with the News API:
- **Base URL**: `https://newsapi.org/v2/everything`
- **Default Query**: Apple news from October 1, 2021
- **Sorting**: By popularity
- **API Key**: Included in the source code (Note: In production, this should be secured)

---

*Práctica 1 de Programación de Aplicaciones de Escritorio - Generar un proyecto para desplegar noticias consumiendo el servicio de News API*
