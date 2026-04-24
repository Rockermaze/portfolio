# 🚀 Rudra Ka.Patel - Portfolio

A modern, interactive portfolio built with Next.js, featuring advanced animations, particle effects, and a clean component architecture.

## ✨ Features

- **Modern Tech Stack** - Next.js 15, React 19, Tailwind CSS
- **Advanced Animations** - Framer Motion for smooth interactions
- **Particle Effects** - Dynamic particle systems and grid animations
- **Holographic UI** - Futuristic card designs with holographic effects
- **Interactive Elements** - Magnetic buttons, glitch text, easter eggs
- **Command Palette** - Keyboard shortcuts for quick navigation
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Image and font optimization

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
│
├── components/            # Organized components
│   ├── sections/         # Hero, Skills, Experience, Projects, Contact
│   ├── layout/           # Navbar, LoadingScreen, CommandPalette
│   ├── effects/          # Particles, Grid, EasterEggs
│   ├── ui/               # HolographicCard, ProjectCard
│   ├── interactions/     # GlitchText, MagneticButton
│   └── archive/          # Unused components
│
├── public/               # Static assets
└── [config files]        # Tailwind, Next.js, TypeScript configs
```

📖 **Detailed Structure**: See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS

### Animation & Effects
- **Framer Motion** - Animation library
- **Custom Particle Systems** - Canvas-based animations
- **CSS Animations** - Keyframe animations

### Fonts
- **Inter** - Body text
- **Space Grotesk** - Headings
- **JetBrains Mono** - Code/monospace

## 🎯 Component Architecture

### Sections (6 components)
Main content areas of the portfolio

### Layout (4 components)
Navigation, loading, and global UI elements

### Effects (4 components)
Visual effects and background animations

### UI (2 components)
Reusable card components

### Interactions (2 components)
Micro-interactions and effects

📖 **Component Details**: See [components/README.md](./components/README.md)

## 🎨 Design System

### Colors
- **Dark Theme** - #050505 background
- **Techno Cyan** - #00f3ff (primary accent)
- **Techno Blue** - #0066ff
- **Techno Magenta** - #ff00ff
- **Techno Lime** - #39ff14

### Effects
- Holographic cards
- Glitch text animations
- Magnetic hover effects
- Particle systems
- Grid animations
- Scanline overlay

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly** - Large tap targets, mobile-optimized interactions

## 🔧 Configuration

### Tailwind Config
Custom colors, animations, and utilities defined in `tailwind.config.js`

### Next.js Config
TypeScript support and optimization settings in `next.config.ts`

### Global Styles
CSS variables and base styles in `app/globals.css`

## 📝 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Complete project structure
- [components/README.md](./components/README.md) - Component documentation
- [DESIGN.md](./DESIGN.md) - Design specifications
- [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) - Implementation tracking

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel
```

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rudra Ka.Patel**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using Next.js and Tailwind CSS
