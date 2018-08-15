const config = require('./webpack.config')
const webpack = require("webpack")
const path = require('path')

config.mode = "development",
config.devtool = 'inline-source-map',
config.devServer = {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true
}
config.watchOptions =  {
    aggregateTimeout: 300,
    poll: 1000
}
config.output.publicPath = 'http://localhost:3000/'
config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

module.exports = config