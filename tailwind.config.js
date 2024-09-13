/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'black': '#111',
        'black': '#1D242B',
        'secondary': '#C7EEFF',
        'white': '#FAFAFA',
        'primary': '#2185D5',
      }
    },
    fontFamily: {
      "suse": ["SUSE", "sans-serif"],
      "rubik": ["Rubik", "sans-serif"]
    }
  },
  plugins: [],
}

