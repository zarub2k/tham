export default {
  publicRuntimeConfig: {
    subscribeUrl: process.env.ZAPIER_HOOK_SUBSCRIBE,
    inquiryUrl: process.env.ZAPIER_HOOK_INQUIRY
  },
  privateRuntimeConfig: {
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    // base: '/tham/'
    base: '/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tham.xyz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        // src: 'https://platform-api.sharethis.com/js/sharethis.js#property=5fd9f9692d39bc00140f8972&product=sop'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
    // '@aceforth/nuxt-optimized-images',
  ],
  // optimizedImages: {
  //   optimizeImages: true
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@nuxt/http',
    'vue-social-sharing/nuxt'
    // '@aceforth/nuxt-optimized-images',
  ],

  // http: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api/subscribe': 'https://hooks.zapier.com/hooks/catch/3810528/oca4bq4'
  // },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
