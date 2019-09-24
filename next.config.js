const withCSS = require('@zeit/next-css')
const lessToJS = require('less-vars-to-js')
const path = require('path')
const fs = require('fs')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/themes/antd-defaults.less'), 'utf8')
)

module.exports = withCSS({
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.node = {
      fs: 'empty'
    }

    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }

    config.module.rules.push(
      {
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
        test: /\.js(x)?$/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'less-loader', options: { modifyVars: themeVariables } }
        ],
        include: /node_modules/
      }
    )

    config.resolve.alias.globals = path.resolve(__dirname, 'platform/shared/global.ts')
    config.resolve.alias.platform = path.resolve(__dirname, 'platform')
    config.resolve.alias.shared = path.resolve(__dirname, 'platform/shared')
    config.resolve.alias.lib = path.resolve(__dirname, 'platform/shared/lib')
    config.resolve.alias.interface = path.resolve(__dirname, 'platform/shared/interface')

    return config
  }
})
