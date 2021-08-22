// Imports
// -------

// Libraries
import { resolve } from 'path'
// Plugins
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { ProvidePlugin } from 'webpack'
// Types
import { Configuration } from 'webpack'

// Internal
// --------

const config: Configuration = {
  entry: {
    'unstated-next': resolve(__dirname, '../src'),
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },
  output: {
    path: resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}

// Exports
// -------

// Default
export default config
