const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/bootstrap.tsx',
  mode: process.env.NODE_ENV ?? 'development',
  devtool: 'source-map',
  devServer: { port: 3002, historyApiFallback: true },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
    clean: true,
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, loader: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sm_profile',
      filename: 'remoteEntry.js',
      exposes: {
        './Routes': './src/routes',
      },
      shared: {
        react: { singleton: true, requiredVersion: 'auto' },
        'react-dom': { singleton: true, requiredVersion: 'auto' },
        'react-router-dom': { singleton: true, requiredVersion: 'auto' },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
}
