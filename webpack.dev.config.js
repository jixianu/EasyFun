var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 打包css插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 编译后自动打开浏览器

var ROOT_PATH = path.resolve(__dirname); // 项目跟路径
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目开发目录src
var APP_FILE = path.resolve(APP_PATH, 'index.js'); // 项目入口的index.js

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    APP_FILE
  ],
  output: {
    path: APP_PATH,
    filename: 'bundle.js'
  },
  // 可以在sources里调试
  devtool: "cheap-module-eval-source-map",
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url'
      }
    ]
  }
  ,
// 其它解决方案配置
  resolve: {
    // 后缀
    extensions: ['', '.js', '.jsx', '.json', '.less']
  }
  ,
// 插件
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development') //定义生产环境
      }
    }),
    new OpenBrowserPlugin({url: 'http://localhost:8080/#/'}),
    new ExtractTextPlugin("app.css")
  ]
}
;