const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
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
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ],

      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/about.html',
      inject: true,
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/project.html',
      inject: true,
      filename: 'project.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/blog.html',
      inject: true,
      filename: 'blog.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: "./dist",
    hot: true
  }
};