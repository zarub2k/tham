module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            fontSize: '1.1rem',
            // h1: {
            //   // color: theme('colors.purple.500'),
            //   fontSize: '2.5rem',
            //   marginTop: '0em',
            //   marginBottom: '0em',
            //   fontWeight: '500'
            // },
            // h2: {
            //   marginTop: '0em',
            //   marginBottom: '0em'
            // }
          }
        }
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography') ({
      modifiers: ['md']
    }),
    // ...
  ],
  variants: {
    // typography: []
  }
}