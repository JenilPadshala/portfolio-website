/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        gray: {
          900: '#1E1E1E',
          800: '#252526',
          700: '#333333',
          600: '#505050',
          500: '#6C6C6C',
          400: '#858585',
          300: '#D4D4D4',
        },
        purple: {
          400: '#BD93F9',
          300: '#C9A9FA',
        }
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};