const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../') 
    }
  );
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias.globals = path.resolve(__dirname, '../platform/shared/global.ts')
  config.resolve.alias.platform = path.resolve(__dirname, '../platform')
  config.resolve.alias.shared = path.resolve(__dirname, '../platform/shared')
  config.resolve.alias.lib = path.resolve(__dirname, '../platform/shared/lib')
  return config;
};
