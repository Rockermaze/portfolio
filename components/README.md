# Components Structure

This directory contains all React components organized by their purpose.

## 📁 Directory Structure

```
components/
├── sections/          # Main page sections
│   ├── Hero.js
│   ├── StatsDashboard.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   └── Contact.js
│
├── layout/            # Layout & navigation components
│   ├── Navbar.js
│   ├── LoadingScreen.js
│   ├── CommandPalette.js
│   └── ScrollProgress.js
│
├── effects/           # Visual effects & animations
│   ├── AdvancedGrid.js
│   ├── EnhancedParticles.js
│   ├── ParticleBackground.js
│   └── EasterEggs.js
│
├── ui/                # Reusable UI components
│   ├── HolographicCard.js
│   └── ProjectCard.js
│
├── interactions/      # Interactive micro-components
│   ├── GlitchText.js
│   └── MagneticButton.js
│
└── archive/           # Unused components (kept for reference)
    ├── AnimatedGrid.js
    ├── SnowAnimation.js
    └── CursorSpotlight.js
```

## 🎯 Component Categories

### Sections
Main content sections of the portfolio page. Each represents a distinct area of the site.

### Layout
Components that provide structure, navigation, and global UI elements.

### Effects
Visual effects and animations that enhance the user experience.

### UI
Reusable UI components used across multiple sections.

### Interactions
Small interactive components that add micro-interactions.

### Archive
Components that are not currently in use but kept for potential future use.

## 🔗 Import Paths

When importing components, use relative paths from your location:

```javascript
// From app/page.js
import Hero from "../components/sections/Hero"
import Navbar from "../components/layout/Navbar"

// From components/sections/Projects.js
import ProjectCard from "../ui/ProjectCard"

// From components/sections/Hero.js
import ParticleBackground from "../effects/ParticleBackground"
import MagneticButton from "../interactions/MagneticButton"
```

## ✅ Active Components

All components in `sections/`, `layout/`, `effects/`, `ui/`, and `interactions/` are actively used in the application.

## 📦 Archived Components

Components in `archive/` are not currently imported but preserved for reference:
- **AnimatedGrid.js** - Alternative grid animation
- **SnowAnimation.js** - Snow particle effect
- **CursorSpotlight.js** - Spotlight cursor effect
