/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f4fc',
          100: '#cce9f8',
          200: '#99d3f1',
          300: '#66bdea',
          400: '#33a7e3',
          500: '#006fbb',
          600: '#005996',
          700: '#004371',
          800: '#002c4b',
          900: '#001626',
        },
      },
    },
  },
  plugins: [],
};
