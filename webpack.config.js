const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }
          ,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],

      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/media", to: "./media" }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: "./dist",
    // hot: true
  }
};