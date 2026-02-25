/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#8B5CF6',
        ground: '#F5C77A',
      },
      keyframes: {
        wave1: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(120px,80px)' },
        },
        wave2: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-100px,-60px)' },
        },
      },
      animation: {
        wave1: 'wave1 14s ease-in-out infinite',
        wave2: 'wave2 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
