const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = (options) => ({
  mode: options.mode,
  entry: {
    app: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        // CSS Loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // SCSS (SASS) Loader
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        // Assets loader
        test: /\.(svg|gif|jpe?g|tiff|png|webp|bmp|eot|ttf|woff|woff2)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  plugins: options.plugins.concat([
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[name].[chunkhash].chunk.css',
    }),
  ]),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~configs': path.resolve(__dirname, 'src/configs'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~layouts': path.resolve(__dirname, 'src/layouts'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~shared': path.resolve(__dirname, 'src/shared'),
      '~stores': path.resolve(__dirname, 'src/stores'),
      '~types': path.resolve(__dirname, 'src/types'),
      '~ultils': path.resolve(__dirname, 'src/ultils'),
    },
  },
  stats: 'minimal',
  devtool: options.devtool,
  devServer: {
    ...options.devServer,
  },
  target: 'web',
  optimization: {
    ...options.optimization,
  },
  performance: {
    //hints: "error",
    hints: false,
    maxAssetSize: 1000000,
  },
})
