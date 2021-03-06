const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: colors.blue['400'],
        secondary: colors.pink['700'],
        success: colors.green['700'],
        danger: colors.red['700'],
        warning: colors.orange['700'],
      },
      boxShadow: {
        primary: "0 0 0 3px rgba(238, 157, 64, 0.5)"
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {},
  plugins: [],
};
