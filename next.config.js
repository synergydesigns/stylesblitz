const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript(withCSS({
  target: 'serverless',
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    }

    config.resolve.alias.globals = path.resolve(__dirname, 'platform/shared/global.ts')
    config.resolve.alias.platform = path.resolve(__dirname, 'platform')
    config.resolve.alias.shared = path.resolve(__dirname, 'platform/shared')
    config.resolve.alias.lib = path.resolve(__dirname, 'platform/shared/lib')

    return config
  },
}))
