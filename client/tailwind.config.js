/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d9bf0',
        secondary: '#71767b',
        white: {
          light: '#e7e9ea', // color-text
          DEFAULT: '#ffffff',
          dark: '#2f3336', // color-border
        },
      },
    },
  },
  plugins: [],
};
