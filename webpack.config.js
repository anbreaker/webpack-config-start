const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
          minimize: false,
        },
      },

      {
        test: /\.css$/i,
        exclude: /styles.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: 'assets/img/[name].[ext]',
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      // filename: './index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: 'assets/' }],
    }),
  ],
};
