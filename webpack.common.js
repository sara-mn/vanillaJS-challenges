const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: './src/app.js',
  },
  plugins: [
    new CleanWebpackPlugin(), // dist رو قبل از build پاک می‌کنه
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CopyPlugin({
      patterns: [
        {from: 'src/views', to: 'views'},
        {from: 'favicon.ico', to: 'favicon.ico'},
        {from: '404.html', to: '404.html'},
        {from: 'src/assets/img', to: 'img'},
        {from: 'src/assets/css', to: 'css'},
        {from: 'src/assets/sounds', to: 'sounds'},
        {from: 'src/assets/icon.svg', to: 'icon.svg'},
        {from: 'src/assets/robots.txt', to: 'robots.txt'},
        {from: 'src/assets/icon.png', to: 'icon.png'},
        {from: 'src/assets/site.webmanifest', to: 'site.webmanifest'},
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // برای تصاویر
      },
    ],
  },
};
