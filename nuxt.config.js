import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {

    script: [{
        src: 'gsap/TimelineMax.js'
      },
      {
        src: ' https://unpkg.com/applause-button/dist/applause-button.js'
      }
    ],

    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        iconSrc: 'static/icon.png',
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/applause-button/dist/applause-button.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fc3a52;',
    throttle: 0
  },

  /*
   ** Global CSS
   */
  css: ['@assets/css/main.css'],



  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/rellax',
      ssr: false
    },
    {
      src: "~/plugins/aos",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //     options: {
      //       fix: true
      //     }
      //   })
      // }
    }
  }
}
