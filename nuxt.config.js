export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/reset.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins:[
    { mode: 'client', src: '~/plugins/vue-burger-menu.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // buildModules: [
  //   // https://go.nuxtjs.dev/eslint
  //   '@nuxtjs/eslint-module'
  // ],
  styleResources: {
    scss: ['./assets/scss/main.scss'],
    // css: ['./assets/css/reset.css']
  },
  modules: ['@nuxtjs/strapi', '@nuxtjs/style-resources'],
  strapi: {
    url: 'http://localhost:1337/headers',
    entities: ['headers']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['vue-burger-menu'],
  }
}
