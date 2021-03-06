export default {
  buildDir: './functions/nuxt',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css'],
  // css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy'],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: [
      [
        'transform-runtime',
        {
          polyfill: true,
          regenerator: true
        }
      ]
    ]
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    publicPath: '/', // _nuxt から public に変更 パフォーマンスの最大化のため dist ディレクトリ内のファイルを CDN にアップロード
    vendor: ['axios', 'babel-polyfill'], // デフォルトでは各ページごとにライブラリが取り込まれてしまいます。ページごとではなく共通のJSファイルに取り込まれます
    extractCSS: true //  CSSをJSから分離。 個々のファイルサイズを小さく保つことはブラウザのキャッシュに留まりやすくする CSSがファイルに分けられてHTMLが見やすくなる
  }
}
