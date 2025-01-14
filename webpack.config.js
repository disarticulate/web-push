const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'web-push-browser.js',
    library: {
      name: 'WebPushApi',
      type: 'var',
      export: 'default',
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
      crypto: 'crypto-browserify'
    })
  ],
  resolve: {
    alias: {
      buffer: 'buffer'
    },
    fallback: {
      "http": require.resolve("stream-http"),
      "assert": require.resolve("assert/"),
      buffer: require.resolve("buffer"),
      "stream": require.resolve("stream-browserify"),
      util: require.resolve("util-ex"),
      https: require.resolve("https-browserify"),
      crypto: require.resolve("crypto-browserify")
    }
  }
}