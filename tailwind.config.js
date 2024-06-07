/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#121314',
        'gray': '#222831',
        'blue': '#4592AF',
        'sand': '#E3C4A8',
        'white': '#F6F5F5',
      }
    },
  },
  plugins: [],
}

