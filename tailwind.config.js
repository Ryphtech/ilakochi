/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#eecd2b",
        "background-light": "#f8f8f6",
        "background-dark": "#0a1a11",
        "forest-accent": "#1a2e1a",
        "cream": "#f3f0e6",
        "gold-accent": "#d4af37",
      },
      fontFamily: {
        "display": ["Epilogue", "sans-serif"],
        "serif": ["Playfair Display", "serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out',
      }
    },
  },
  plugins: [],
}

