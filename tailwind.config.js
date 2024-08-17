/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-bg': 'linear-gradient(135deg, #1e0533, #110a1f)',
      },
      colors: {
        'bright-purple': '#9b5de5', // Replace with your desired shade
      },
    },
  },
  plugins: [],
}
