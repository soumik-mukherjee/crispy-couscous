const path = require("path");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const { InjectManifest } = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outputPath = path.resolve("./dist");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    services: "./src/services.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new Serve({
      static: [outputPath, path.resolve("./static")],
    }),
    new InjectManifest({
      swSrc: "./src/service-worker.js",
    }),
  ],
};
