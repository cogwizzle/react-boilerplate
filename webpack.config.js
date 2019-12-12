const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-typescript', { allExtensions:true, isTSX: true }],
                '@babel/preset-react',
                '@babel/preset-env',
              ],
            }
          },
          'source-map-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                require('postcss-nested'),
              ],
            },
          },
        ],
      },
    ],
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'jsx' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

