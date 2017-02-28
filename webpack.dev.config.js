var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  // 可以在sources里调试
  devtool: "cheap-module-eval-source-map",
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url'}
    ]
  },
  // 其它解决方案配置
  resolve: {
    // 后缀
    extensions: ['', '.js', '.jsx', '.json', '.less']
  },
  // 插件
  plugins: [
    /*new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development') //定义编译环境
      }
    }),*/
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
  ]
};