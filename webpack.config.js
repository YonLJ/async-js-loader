const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'async-js-loader.js',
    library: 'asyncJSLoader',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        'ts-loader'
      ]
    }]
  },
  mode: 'production'
};