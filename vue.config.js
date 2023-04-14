const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.BASE_URL,

  assetsDir: 'assets',

  transpileDependencies: true,

  productionSourceMap: false,

  chainWebpack (config) {
    config.resolve.alias
      .set('partita', '../partita/src')
  }
})
