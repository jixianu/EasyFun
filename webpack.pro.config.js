var webpack = require("webpack");
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].min.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=image/[name].[ext]'},
      {test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.less']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'redux',
    'react-redux': 'react-redux'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production') //定义生产环境
      }
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name].css"),
    /*new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),*/
    new HtmlWebpackPlugin({
      template: './src/template/template.html',
      htmlWebpackPlugin: {
        "files": {
          "css": ["app.css"],
          // "js": ["bundle.js", "vendors.js"]
          "js": ["bundle.js"]
        }
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      filename:'index.html'
    })
  ]
};