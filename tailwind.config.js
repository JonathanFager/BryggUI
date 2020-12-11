const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
        backgroundImage: theme => ({
         'hero-pattern': "url('/img/hero-pattern.svg')",
      }),
      colors: {
        'blue-gray': colors.blueGray,
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}
