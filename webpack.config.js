var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        pages: __dirname +'/webApp/src/main.js',
        vendors:['react','react-dom','react-router']  //抽取公共框架
    },
    output: {
    	publicPath: 'dist',
        filename: 'js/bundle.js'
    },
    // 可以在sources里调试
    devtool:"cheap-module-eval-source-map",
    module: {
		loaders:[
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style','css') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css!less')},
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0'] },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
		]
    },
    // 其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less']
    },
    // 插件
    plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors','js/vendors.js'), // 公共JS提取
        new OpenBrowserPlugin({url: 'http://localhost:8080/'}), // 自动打开浏览器插件
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new ExtractTextPlugin('css/bundle.css'), // 提取css打包
        new webpack.ProvidePlugin({}) // 挂在全局对象变量，内置插件
    ]
};