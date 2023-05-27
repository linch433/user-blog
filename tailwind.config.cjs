/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-black': '#22223B',
        'main-bg-light': '#9A8C98',
        'secondary-bg-black': '#4A4E69',
        'secondary-bg-light': '#C9ADA7',
        'bg-light': '#F2E9E4',

        'int-white-main': '#EDF1FD',
        'int-black-main': '#081c15',
        'int-yellow': '#FFD84F',
        'int-blue-link': '#284CCC',
        'int-error': '#F81818'
      },
      fontFamily: {
        'barlow': ['Barlow'],
        'pacifico': ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}
