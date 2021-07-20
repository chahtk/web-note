const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // app: ['babel-polyfill', './src/index.js'],
    main: './src/index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: './src/public/favicon_B_nobg.ico',
    }),
    new CleanWebpackPlugin(),
  ],
  // resolve: {
  //   extensions: ['*', '.js'],
  //   alias: {},
  // },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    hot: true,
    overlay: true,
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};
