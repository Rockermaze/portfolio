/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Techno Dark Theme - Re-refined
        'dark-bg': '#050505',
        'dark-surface': '#0a0a0a',
        'dark-card': '#111111',

        // Techno Accent Colors - More vibrant and "pro"
        'techno-cyan': '#00f3ff',
        'techno-blue': '#0066ff',
        'techno-magenta': '#ff00ff',
        'techno-purple': '#7000ff',
        'techno-lime': '#39ff14',
        'techno-matrix': '#00ff41',

        // Text Colors
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'text-muted': '#52525b',
      },
      fontFamily: {
        'heading': ['"Space Grotesk"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.4 },
        }
      },
      boxShadow: {
        'techno-glow': '0 0 20px rgba(0, 243, 255, 0.3)',
        'glow-cyan': '0 0 15px rgba(0, 243, 255, 0.5)',
        'glow-magenta': '0 0 15px rgba(255, 0, 255, 0.5)',
        'glow-lime': '0 0 15px rgba(57, 255, 20, 0.5)',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
    },
  },
  plugins: [],
}
