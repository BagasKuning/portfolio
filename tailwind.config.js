/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#111',
        'gray': '#33313B',
        'blue': '#4592AF',
        'sand': '#E3C4A8',
        // 'white': '#FFF9',
        'white': '#F6F5F5',
      }
    },
  },
  plugins: [],
}

