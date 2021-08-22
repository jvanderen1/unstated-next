// Imports
// -------

// Libraries
import { resolve } from 'path'
import { merge } from 'webpack-merge'
// Plugins
import HtmlWebpackPlugin = require('html-webpack-plugin') // https://github.com/microsoft/TypeScript/issues/27293#issuecomment-549047461
// Utilities
import dev from './webpack.dev'
// Types
import { Configuration } from 'webpack'

// Internal
// --------

const config: Configuration = merge(dev, {
  devServer: {
    hot: true,
  },
  entry: {
    example: {
      dependOn: 'unstated-next',
      import: resolve(__dirname, '../example'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Example of unstated-next',
      template: resolve(__dirname, '../example/index.html'),
    }),
  ],
})

// Exports
// -------

// Default
export default config
