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
  mode: 'production',
  output: {
    filename: '[name].bundle.min.js',
  },
})

// Exports
// -------

// Default
export default config
