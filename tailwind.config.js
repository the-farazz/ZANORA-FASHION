/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zanora: {
          cream: '#F5F1EC',
          beige: '#E8DFD6',
          brown: '#8B6F5C',
          black: '#111111',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.5em',
        'wider-plus': '0.2em',
      },
      spacing: {
        'navbar': '80px',
      }
    },
  },
  plugins: [],
}
