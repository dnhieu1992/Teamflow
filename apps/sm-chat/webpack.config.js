const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

const deps = require('./package.json').dependencies || {}

module.exports = {
  entry: './src/bootstrap.tsx',
  mode: process.env.NODE_ENV ?? 'development',
  devServer: {
    port: 3003,
    historyApiFallback: true,
    hot: true, // or false temporarily if needed
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  optimization: {
    runtimeChunk: false,
  },
  output: { publicPath: 'auto', clean: true },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sm_chat',
      filename: 'remoteEntry.js',
      exposes: {
        './Routes': './src/routes', // phải export default React component
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: false,
          requiredVersion: false /* no eager */,
        },
        'react-dom': {
          singleton: true,
          strictVersion: false,
          requiredVersion: false,
        },
        'react-router-dom': {
          singleton: true,
          strictVersion: false,
          requiredVersion: false,
        },
        'react/jsx-runtime': {
          singleton: true,
          strictVersion: false,
          requiredVersion: deps.react,
        },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
}
