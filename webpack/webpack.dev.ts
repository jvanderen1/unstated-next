// Imports
// -------

// Libraries
import { merge } from 'webpack-merge'
// Utilities
import common from './webpack.common'
// Types
import { Configuration } from 'webpack'

// Internal
// --------

const config: Configuration = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
})

// Exports
// -------

// Default
export default config
