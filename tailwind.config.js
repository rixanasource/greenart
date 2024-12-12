/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-neon-blue': {
          textShadow: '0 0 4px #2b77e7, 0 0 10px #2b77e7, 0 0 20px #2b77e7',
        },
        '.text-neon-pink': {
          textShadow: '0 0 4px #ff007c, 0 0 10px #ff007c, 0 0 20px #ff007c',
        },
        '.text-neon-green': {
          textShadow: '0 0 4px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14',
        },
        '.text-neon-yellow': {
          textShadow: '0 0 4px #faff00, 0 0 10px #faff00, 0 0 20px #faff00',
        },
      });
    }),
  ],
};
