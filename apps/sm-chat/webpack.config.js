const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/bootstrap.tsx",
  mode: process.env.NODE_ENV ?? "development",
  devServer: { port: 3001 },
  output: { publicPath: "auto", clean: true },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sm_chat",
      filename: "remoteEntry.js",
      exposes: {
        "./Routes": "./src/routes" // phải export default React component
      },
      shared: {
        react: { singleton: true, requiredVersion: "auto" },
        "react-dom": { singleton: true, requiredVersion: "auto" }
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};