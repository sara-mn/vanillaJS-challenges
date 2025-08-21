const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: 'vanillaJS-challenges',
  },
  devServer: {
    static: './dist',
    historyApiFallback: true, // اگر Routing داری
    open: true,
    hot: true,
  },
});
