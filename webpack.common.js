const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'src/views', to: 'views'},
        {from: 'index.html', to: 'index.html'},
      ],
    }),
  ],
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
};
