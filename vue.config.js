const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  assetsDir: 'assets',

  transpileDependencies: true,

  productionSourceMap: false,

  chainWebpack (config) {
    config.resolve.alias
      .set('partita', '../partita/src')
  }
})
