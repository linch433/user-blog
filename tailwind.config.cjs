/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-black': '#2f3e46',
        'main-bg-light': '#52796f',
        'secondary-bg-black': '#354f52',
        'secondary-bg-light': '#84a98c',
        'bg-light': '#cad2c5',
        'int-white-main': '#EDF1FD',
        'int-black-main': '#000011',
        'int-yellow': '#FFD84F',
        'int-grapefruit': '#FF4F66',
        'int-blue-link': '#284CCC',
        'int-green': '#47E273',
      },
      fontFamily: {
        'alegreyaSans': ['Alegreya Sans'],
      }
    },
  },
  plugins: [],
}