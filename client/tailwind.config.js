/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // @media (min-width: ...) { ... }
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1600px',
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    extend: {
      colors: {
        primary: '#1d9bf0',
        secondary: '#71767b',
        black: {
          light: '#202327',
          DEFAULT: '#000000',
        },
        white: {
          light: '#e7e9ea', // color-text
          DEFAULT: '#ffffff', // color-white
          dark: '#2f3336', // color-border
        },
      },
    },
  },
  plugins: [],
};
