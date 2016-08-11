const webpack = require('webpack')
const path = require('path')
const join = path.join
const public_dir = join(__dirname, 'public')

config = {
  devtool: 'eval-source-map',
  entry: join(__dirname, 'src/index.js'),
  output: {
    path: public_dir,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel', test: /\.jsx?$/, exclude: /node_modules/},
      { loader: 'style!css?modules!postcss', test: /\.css$/ },
    ]
  },
  postcss: [ require('autoprefixer') ],
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  devServer: {
    contentBase: public_dir,
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 4000,
  }
}

module.exports = config

