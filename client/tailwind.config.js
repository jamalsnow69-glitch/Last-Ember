/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0d0d0d',
        'bg-panel': '#1a1a1a',
        'bg-card': '#1f1f1f',
        'border-color': '#333',
        'text-primary': '#c8c8c8',
        'text-bright': '#e8e8e8',
        'text-dim': '#888',
        accent: '#d4883c',
        'accent-glow': '#f0a050',
        danger: '#c0392b',
        success: '#27ae60',
        wardens: '#3a7ca5',
        freefolk: '#4a8c3f',
        remnant: '#8c5a3a',
        'rarity-common': '#888',
        'rarity-uncommon': '#4a9',
        'rarity-rare': '#48b',
        'rarity-epic': '#a4c',
        'rarity-legendary': '#d80',
        'rarity-mythic': '#ff2d55',
        'rarity-exotic': '#ff9500',
        'rarity-story': '#00c8ff',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Consolas', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow-legendary': 'glowLegendary 2s ease-in-out infinite',
        'glow-mythic': 'glowMythic 1.5s ease-in-out infinite',
        'glow-exotic': 'glowExotic 1.2s ease-in-out infinite',
        'glow-story': 'glowStory 2s ease-in-out infinite',
        'card-appear': 'cardAppear 0.4s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'damage-flash': 'damageFlash 0.6s ease-out',
      },
      keyframes: {
        glowLegendary: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(220,130,0,0.4)' },
          '50%': { boxShadow: '0 0 42px rgba(240,150,20,0.7)' },
        },
        glowMythic: {
          '0%, 100%': { boxShadow: '0 0 32px rgba(255,45,85,0.5)' },
          '50%': { boxShadow: '0 0 50px rgba(255,45,85,0.8)' },
        },
        glowExotic: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(255,149,0,0.6)' },
          '50%': { boxShadow: '0 0 60px rgba(255,200,0,0.9)' },
        },
        glowStory: {
          '0%, 100%': { boxShadow: '0 0 35px rgba(0,200,255,0.5)' },
          '50%': { boxShadow: '0 0 55px rgba(0,220,255,0.8)' },
        },
        cardAppear: {
          from: { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        damageFlash: {
          '0%': { background: 'rgba(255,0,0,0.2)' },
          '100%': { background: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};