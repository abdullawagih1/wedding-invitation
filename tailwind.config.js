/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#b76e79',
        'rose-gold-light': '#d4a0a8',
        'rose-gold-pale': '#f5e6e8',
        'cream': '#fdf8f0',
        'parchment': '#f9f3e8',
        'blush': '#f8e8ea',
        'champagne': '#f7e7ce',
        'ivory': '#fffff0',
        'deep-rose': '#8b4a52',
        'warm-gold': '#c9a96e',
        'soft-sage': '#b8c5b0',
      },
      fontFamily: {
        'arabic': ['Cairo', 'serif'],
        'arabic-serif': ['Amiri', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
