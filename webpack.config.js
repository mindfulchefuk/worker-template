const path = require('path');

const mode = 'development';

module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  mode,
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
