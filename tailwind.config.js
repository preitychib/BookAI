/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-bg': 'linear-gradient(135deg, #1e0533, #110a1f)',
        'primary-bg-light': 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)',
      },
      colors: {
        'bright-purple': '#9b5de5', // Replace with your desired shade
      },
      fontFamily: {
        tomatoesfont: ['TomatoesFont', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
