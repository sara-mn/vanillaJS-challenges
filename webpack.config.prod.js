const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: '/vanillaJS-challenges/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {from: 'src/views', to: 'views'},
        {from: 'src/assets/img', to: 'img'},
        {from: 'src/assets/css', to: 'css'},
        {from: 'src/assets/sounds', to: 'sounds'},
        {from: 'src/assets/icon.svg', to: 'icon.svg'},
        {from: 'favicon.ico', to: 'favicon.ico'},
        {from: 'src/assets/robots.txt', to: 'robots.txt'},
        {from: 'src/assets/icon.png', to: 'icon.png'},
        {from: '404.html', to: '404.html'},
        {from: 'src/assets/site.webmanifest', to: 'site.webmanifest'},
      ],
    }),
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: true } // این خط خیلی مهمه برای تصاویر داخل CSS
          }
        ],
        include: /node_modules|src/,
      },
      // SCSS (اختیاری اگه Sass هم استفاده کنی)
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        include: /node_modules|src/,
      },
      // عکس‌ها
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]',
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
}
