
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')

// Required for Create React App Babel transform
process.env.NODE_ENV = 'production'

module.exports = {
  // Use all js files in project root (except
  // the webpack config) as an entry
  entry: slsw.lib.entries,
  target: 'node',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  // We are going to create multiple APIs in this guide, and we are 
  // going to create a js file to for each, we need this output block
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
}
