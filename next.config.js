const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withCSS({
  target: 'serverless',
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  }
}))
