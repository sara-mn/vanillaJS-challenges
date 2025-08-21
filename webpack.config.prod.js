const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    ...,
    publicPath: 'vanillaJS-challenges', // برای GitHub Pages مهمه
  },
  devServer: {
    static: './dist',
    open: true,
    hot: true,
  },
});
