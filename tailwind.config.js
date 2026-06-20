/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e91e63',
          dark: '#a81d84',
          light: '#f48fb1',
        },
        secondary: {
          DEFAULT: '#2d3359',
          light: '#424976',
        },
        background: '#ffffff',
        surface: '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
