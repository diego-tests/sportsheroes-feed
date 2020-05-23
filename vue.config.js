
const StyleLintPlugin = require('stylelint-webpack-plugin')
const styleLintConfig = new StyleLintPlugin({
  files: ['./src/**/*.{css,scss,vue}'],
  quiet: false,
  failOnError: false,
  fix: true,
})

const plugins = [
  styleLintConfig,
]

module.exports = {
  configureWebpack: {
    plugins,
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        return { ...options, fix: true, failOnError: true }
      })
  },
}
