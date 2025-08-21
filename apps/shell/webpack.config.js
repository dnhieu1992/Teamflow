const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/main.tsx',
  mode: process.env.NODE_ENV ?? 'development',
  devtool: 'source-map',
  devServer: { port: 3000, historyApiFallback: true },
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
      name: 'shell',
      remotes: {
        sm_feed: `sm_feed@${
          process.env.FEED_URL ?? 'http://localhost:3001'
        }/remoteEntry.js`,
        sm_chat: `sm_chat@${
          process.env.CHAT_URL ?? 'http://localhost:3002'
        }/remoteEntry.js`,
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
