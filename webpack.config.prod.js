const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '', // برای GitHub Pages مهمه
  },
  devServer: {
    static: './dist',
    historyApiFallback: true, // اگر Routing داری
    open: true,
    hot: true,
  },
});
