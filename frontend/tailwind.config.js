/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: {
          DEFAULT: '#101014',
          glass: 'rgba(24, 24, 32, 0.7)',
        },
        accent: {
          DEFAULT: '#8b5cf6', // purple
          blue: '#2563eb',
          pink: '#ec4899',
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
}