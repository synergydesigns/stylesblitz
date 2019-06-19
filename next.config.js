const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  target: 'serverless',
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
