module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            fontSize: '2.875rem',
            h1: {
              // color: theme('colors.purple.500'),
              fontSize: '2.5rem',
            }
          }
        }
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography') ({
      // modifiers: ['sm', 'md']
    }),
    // ...
  ],
  variants: {
    // typography: []
  }
}