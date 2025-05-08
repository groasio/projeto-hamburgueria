/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
  'sans': ['Riboto', 'sans-serif']
},

extend: {
  backgroundImage: {
    "home": "url('/assets/bg.png')"
  }
},
  },
plugins: [],
}

