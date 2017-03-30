module.exports = {
  build: {
    // Customize babel configuration for JS and Vue files
    babel: {
      // presets: []
    },
    // Customize bundle filenames
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    },
    // Customize webpack loaders
    loaders:[
      {
        test: /\.svg$/,
        include: /assets\/svg/,
        loader: 'svg-sprite-loader?' + JSON.stringify({
          name: '[name]',
          prefixize: false
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        exclude: /assets\/svg/,
        options: {
          limit: 1000, // 1K limit
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ],
    // Add Webpack plugins (need to import or require webpack)
    plugins: [],
    // Customize postcss options
    postcss: [
      // require('postcss-nested')(),
      // require('postcss-responsive-type')(),
      // require('postcss-hexrgba')(),
      // require('autoprefixer')({
      //   browsers: ['last 3 versions']
      // })
    ],
    // Nuxt.js lets you upload your dist files to your CDN for maximum performances, simply set the publicPath to your CDN.
    // publicPath: 'https://cdn.nuxtjs.org'
    // Nuxt.js lets you add modules inside the vendor.bundle.js file generated to reduce the size of the app bundle. It's really useful when using external modules (like axios for example)
    vendor: ['axios'],
  },
  cache: {
    max: 1000,
    maxAge: 900000
  },
  css: [{src: '~assets/css/main.styl', lang: 'stylus'},
    // Load a node.js module
    // 'hover.css/css/hover-min.css',
    // node.js module but we specify the pre-processor
    // { src: 'bulma', lang: 'sass' },
    // Css file in the project
    // '~assets/css/main.css',
    // Sass file in the project
    // { src: '~assets/css/main.scss', lang: 'scss' } // scss instead of sass
  ],
  // Define the development or production mode of nuxt.js, will be overwritten by 'nuxt build', 'nuxt start' and 'nuxt generate'
  dev: (process.env.NODE_ENV !== 'production'),
  // Nuxt.js lets you create environment variables that will be shared for the client and server-side.
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  // Configure the generation of your universal web application to a static web application.
  // generate: {
  //   dir: 'dist',
  //   minify: {
  //     collapseBooleanAttributes: true,
  //     collapseWhitespace: true,
  //     decodeEntities: true,
  //     minifyCSS: true,
  //     minifyJS: true,
  //     processConditionalComments: true,
  //     removeAttributeQuotes: false,
  //     removeComments: false,
  //     removeEmptyAttributes: true,
  //     removeOptionalTags: true,
  //     removeRedundantAttributes: true,
  //     removeScriptTypeAttributes: false,
  //     removeStyleLinkTypeAttributes: false,
  //     removeTagWhitespace: false,
  //     sortAttributes: true,
  //     sortClassName: true,
  //     trimCustomFragments: true,
  //     useShortDoctype: true
  //   },
  //   routes: [
  //     '/users/1',
  //     '/users/2',
  //     '/users/3'
  //   ],
  // },
  // define all default meta for your application:
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  // Nuxt.js uses it's own component to show a progress bar between the routes. You can customize it, disable it or create your own component.
  loading: false,
  // performance options.
  performance: {
    gzip: true,
    prefetch: true
  },
  // The plugins property lets you add vue.js plugins easily to your main application.
  plugins: ['~plugins/svg-sprite-loader', '~plugins/i18n'],
  // Define the workspace (string)
  rootDir: process.cwd(),
  router: {
    base: '/',
    mode: 'history',
    // The scrollBehavior option lets you define a custom behavior for the scroll position between the routes. This method is called every time a page is rendered.
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    // Set the default(s) middleware for every pages of the application.
    middleware: ['i18n']
    // You may want to extend the routes created by nuxt.js. You can do it via the extendRoutes option.
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   });
    // }
  },
  // Define the source directory of your nuxt.js application
  // srcDir: '',
  transition: {
    name: 'fade',
  },
  // The watchers property lets you overwrite watchers configuration in your nuxt.config.js.
  // watchers: {
  //   chokidar: {},
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // }
};
