// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};