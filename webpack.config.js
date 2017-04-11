var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var plugins = [new HtmlWebpackPlugin()];
const svgDirs = [
  require
    .resolve('antd-mobile')
    .replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'eval',
  devServer: {
    proxy: {
      "/api/*": {
        target: "https://cnodejs.org",
        secure: false
      }
    },
    contentBase: './build',
    hot: true,
    port: 8888,
    inline: true,
    colors: true,
    open: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }, {
        test: /\.(svg)$/i,
        loader: 'svg-sprite',
        include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      }
    ]
  },
  plugins: plugins,
  postcss: [autoprefixer]
}
