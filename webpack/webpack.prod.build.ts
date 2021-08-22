// Imports
// -------

// Libraries
import { merge } from 'webpack-merge'
// Utilities
import prod from './webpack.prod'
// Types
import { Configuration } from 'webpack'

// Internal
// --------

const config: Configuration = merge(prod, {
  externals: {
    react: 'React',
  },
})

// Exports
// -------

// Default
export default config
