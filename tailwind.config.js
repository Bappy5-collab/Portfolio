/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark base — deeper, near-black for a premium feel
        surface: {
          950: '#060708',
          900: '#08090c',
          800: '#0e1014',
          700: '#14171d',
          600: '#1b1f27',
          500: '#252a35',
        },
        // Single accent — electric blue with cyan companion
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
        cyan: {
          glow: '#22d3ee',
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
        display: ['Space Grotesk', 'DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'section': ['0.75rem', { letterSpacing: '0.2em' }],
      },
      spacing: {
        'section': 'clamp(4.5rem, 9vw, 8rem)',
        'container': 'min(1280px, 92vw)',
      },
      maxWidth: {
        'prose': '65ch',
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'dot': 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '64px 64px',
        'dot': '24px 24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'aurora': 'aurora 18s ease-in-out infinite',
        'aurora-slow': 'aurora 28s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 32s linear infinite',
        'marquee-y': 'marqueeY 16s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
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
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(6%, -8%) scale(1.12)', opacity: '0.85' },
          '66%': { transform: 'translate(-5%, 6%) scale(0.95)', opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-hover': '0 18px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.15)',
        'glow': '0 0 0 1px rgba(59,130,246,0.2), 0 8px 40px -8px rgba(59,130,246,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
