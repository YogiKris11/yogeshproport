
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#0B0F14',
        foreground: '#E5E7EB',
        card: {
          DEFAULT: '#161B22',
          foreground: '#E5E7EB',
        },
        popover: {
          DEFAULT: '#111827',
          foreground: '#E5E7EB',
        },
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#111827',
          foreground: '#9CA3AF',
        },
        muted: {
          DEFAULT: '#1F2937',
          foreground: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#22D3EE',
          foreground: '#0B0F14',
        },
        border: '#1F2937',
        input: '#1F2937',
        ring: '#3B82F6',
        'bg-primary': '#0B0F14',
        'bg-secondary': '#111827',
        'surface': '#161B22',
        'border-subtle': '#1F2937',
        'electric-blue': '#3B82F6',
        'neural-cyan': '#22D3EE',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
