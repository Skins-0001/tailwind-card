const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./index.html"],
    theme: {
      maxWidth: {
        'test': '240px',
      },
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [],
  }