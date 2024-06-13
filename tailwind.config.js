/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'black': '#111',
        'black': '#0A0A0A',
        'gray': '#33313B',
        // 'blue': '#4592AF',
        'green': '#d2eb79',
        'sand': '#F4DFC8',
        // 'white': '#FFF9',
        // 'white': '#F6F5F5',
        'orange': '#FF8132',
      }
    },
  },
  plugins: [],
}

