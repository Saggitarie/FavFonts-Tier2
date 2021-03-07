export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'googlefonts',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/lazyload.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      './assets/styles/abstracts/_variables.scss',
      './assets/styles/abstracts/_mixins.scss',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxt/http',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
