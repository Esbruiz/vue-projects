import axios from 'axios'
export default {
  mode: 'universal',
  debug: true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['storyblok-nuxt', { accessToken: process.env.NODE_ENV === 'production' ? 'PzDn5n99kD2frTFOYxiZVQtt' : 'qiXbqI1bAg6l4xErw0RXGwtt', cacheProvider: 'memory' }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],

  generate: {
    routes () {
      return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=PzDn5n99kD2frTFOYxiZVQtt&starts_with=post&cv=' + Math.floor(Date.now() / 1e3))
        .then((response) => {
          const blogPosts = response.data.stories.map(post => post.full_slug);
          return [
            '/',
            '/post',
            '/about',
            ...blogPosts
          ]
        })
    }

  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
