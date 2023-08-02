const path = require('path');

module.exports = {
  entry: '../use-cdn/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chatbot.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
