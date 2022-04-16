import localeEn from './locales/en.json';

require('dotenv').config();

module.exports = {
  head: {
    title: 'HEdpAY',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Send Funds Worldwide Instantly and with no Fees E-Banking HEdpAY.' },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        type: 'text/javascript'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap' },
    ],
  },
  plugins: [
    '~plugins/global',
    '~plugins/bus',
    { src: '~plugins/notifications', ssr: false },
    { src: '~plugins/vee-validate', ssr: false },
    { src: '~plugins/avatar', ssr: false },
    { src: '~plugins/scrollmagic', ssr: false },
    { src: '~plugins/connection', ssr: false },
    '~plugins/axios',
    '~plugins/directives',
    '~mixins/globalMixin.js',
  ],
  modules: ['@nuxtjs/style-resources', 'portal-vue/nuxt', '@nuxtjs/axios', 'cookie-universal-nuxt', 'nuxt-i18n', '@nuxtjs/recaptcha', '@nuxtjs/markdownit'],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Lc1KqYZAAAAAFWZwW7adoEd02_x2dUNLioQyjgg', // Site key for requests
    version: 2, // Version
    size: 'normal', // Size: 'compact', 'normal', 'invisible' (v2)
  },
  css: [
    'normalize.css/normalize.css',
    '~assets/scss/global.scss',
    '~assets/scss/vars.scss',
  ],
  styleResources: {
    scss: [
      '~assets/scss/vars.scss',
      '~assets/scss/mixins.scss',
    ],
  },
  loading: { color: '#2DCCD3', failedColor: 'rgba(0, 0, 0, 0)' },
  build: {
    vendor: ['scrollmagic'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_WSS_URL: process.env.BASE_WSS_URL,
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  runtimeCompiler: true,
  generate: {
    devtools: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        en: localeEn,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },
  buildModules: [
    ['@nuxtjs/dotenv'],
  ],
  markdownit: {
    injected: true,
  },
};
