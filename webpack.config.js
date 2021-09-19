const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('path');

module.exports = (env) => {
  if (!env.mode) {
    env.mode = 'development';
  }
  return {
    mode: env.mode,
    plugins: [new MiniCssExtractPlugin()],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
      ]
    },



    devtool: 'source-map',
    devServer: {
      static: "./dist",
      // hot: true
    },
  };
};