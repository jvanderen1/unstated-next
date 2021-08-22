// Imports
// -------

// Libraries
import { merge } from 'webpack-merge'
// Utilities
import dev from './webpack.dev'
// Types
import { Configuration } from 'webpack'

// Internal
// --------

const config: Configuration = merge(dev, {
  externals: {
    react: 'React',
  },
})

// Exports
// -------

// Default
export default config
