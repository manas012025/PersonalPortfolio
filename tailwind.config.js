/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Syne"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'bg-dark': '#080C14',
        'surface': '#0D1420',
        'surface-2': '#111927',
        'border': '#1E2D42',
        'accent': '#00D4FF',
        'accent-2': '#0066FF',
        'accent-glow': 'rgba(0,212,255,0.15)',
        'text-primary': '#E8F0FE',
        'text-secondary': '#7A8BA8',
        'text-muted': '#3D5066',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,102,255,0.3), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(13,20,32,0.8) 0%, rgba(17,25,39,0.9) 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0,212,255,0.15)',
        'glow-strong': '0 0 60px rgba(0,212,255,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
