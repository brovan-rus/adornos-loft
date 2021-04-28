const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    tour: "./src/tour.js",
    contacts: "./src/contacts.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|mp4)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "tour.html",
      chunks: ["tour"],
      template: "./src/tour.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contacts.html",
      chunks: ["contacts"],
      template: "./src/contacts.html",
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
