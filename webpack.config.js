
module.exports = (env) => {
  if (!env.mode) {
    env.mode = 'development';
  }
  return {
    mode: env.mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
      ]
    },

    devtool: 'source-map',
    devServer: {
      static: "./dist",
    },
  };
};