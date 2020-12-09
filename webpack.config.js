const path = require('path');

module.exports = {
  entry: './client/src/components',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  mode: 'development',
};
