const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/presentacion/'
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/presentacion/' : '/'
// }
