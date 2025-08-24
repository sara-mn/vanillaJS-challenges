
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
    historyApiFallback: true,
  },
};

