var webpack = require('webpack');

module.exports = {
  entry: {
    app: './_src/app.jsx',
    vendors: ['react', 'react-dom', 'react-addons-transition-group']
  },
  output: {
    path: './dist/js/',
    publicPath: '/js/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: '/node_modules/',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
      historyApiFallback: true
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
          minimize: true})
    ]
};