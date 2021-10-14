const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Task/Reward Timer',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader?limit:100000'],
      },
    ],
  },
};
