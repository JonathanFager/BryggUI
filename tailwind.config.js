const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      //  backgroundImage: theme => ({
      //  "hero-pattern": "url('/img/hero-pattern.svg')"
      //}),
      colors: {
        'darkTrueGray': '#121212',
        blue: {
          450: '#5F99F7',
        },
        blueGray: {
          950: '#000000'
        },
        "blue-gray": colors.trueGray,
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar'),
  ]
};
