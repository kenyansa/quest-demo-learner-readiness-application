const { colorPalette } = require('./theme/colors.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colorPalette,
    },
  },
  plugins: [],
};
