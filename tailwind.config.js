/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark base
        surface: {
          900: '#0a0b0d',
          800: '#111318',
          700: '#181b22',
          600: '#1e222b',
          500: '#252a35',
        },
        // Single accent — elegant blue (corporate, international)
        accent: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Muted text
        mute: {
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'section': ['0.75rem', { letterSpacing: '0.2em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
        'container': 'min(1280px, 92vw)',
      },
      maxWidth: {
        'prose': '65ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-hover': '0 12px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
