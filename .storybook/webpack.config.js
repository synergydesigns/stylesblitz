const path = require('path');
const lessToJS = require('less-vars-to-js')
const fs = require('fs')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, '../static/themes/antd-defaults.less'), 'utf8')
)

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../') 
    },
    {
      test: /\.less$/,
      use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader', options: {
              modifyVars: themeVariables,
              javascriptEnabled: true
            }
          },
      ],
      include: /node_modules/,
  },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias.globals = path.resolve(__dirname, '../platform/shared/global.ts')
  config.resolve.alias.platform = path.resolve(__dirname, '../platform')
  config.resolve.alias.shared = path.resolve(__dirname, '../platform/shared')
  config.resolve.alias.lib = path.resolve(__dirname, '../platform/shared/lib')
  config.resolve.alias.interface = path.resolve(__dirname, '../platform/shared/interface')
  config.resolve.alias['reset-styles'] = path.resolve(__dirname, '../platform/shared/components/head/HeadStyle')

  return config;
};
