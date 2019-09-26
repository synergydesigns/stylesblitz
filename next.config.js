const withCSS = require('@zeit/next-css')
const withLESS = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const path = require('path')
const fs = require('fs')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/themes/antd-defaults.less'), 'utf8')
)

module.exports = withCSS(withLESS({
  target: 'serverless',
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      const antStyles = /(antd|antd-mobile)\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }

    config.module.rules.push(
      {
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
        test: /\.js(x)?$/,
        use: [{ loader: 'babel-loader' }]
      }
    )

    config.resolve.alias.globals = path.resolve(__dirname, 'platform/shared/global.ts')
    config.resolve.alias.platform = path.resolve(__dirname, 'platform')
    config.resolve.alias.shared = path.resolve(__dirname, 'platform/shared')
    config.resolve.alias.lib = path.resolve(__dirname, 'platform/shared/lib')
    config.resolve.alias.interface = path.resolve(__dirname, 'platform/shared/interface')

    return config
  }
}))
