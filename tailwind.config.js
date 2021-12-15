const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
        skblack: {
          light: '#42403f',
          DEFAULT: '#282828',
          dark: '#32302f',
        },
        skred: {
          light: '#ff2828',
          DEFAULT: '#ff2828',
          dark: '#ff2828',
        },
        skwhite: {
          light: '#ebdbb2',
          DEFAULT: '#fbebc2',
          dark: '#cbcba2',
        },
        skblue: {
          light: '#84A87F',
          DEFAULT: '#84A87F',
          dark: '#84A87F',
        },
      },
    },
  },
}
