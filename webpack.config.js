const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge')

const PATHS = {
	src: path.join(__dirname, "src"),
	dist: path.join(__dirname, "dist")
}

const common = {
	entry: [
		PATHS.src + "/index.js"
	],
	output: {
		filename: '[name].js',
		path: PATHS.dist
	},
	plugins: [
		new HtmlPlugin({
				filename: 'index.html',
				template: PATHS.src + '/index.html'
		}),
		new ExtractTextPlugin('./style.css')
	]
}

const dev = merge(
	common,
	{
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader'
						]
					})
				}
			]
		},
		devServer: {
			contentBase: path.join(__dirname, "dist"),
			compress: true,
			port: 9000
		}
	}
)

module.exports = ()=>{
	return dev
}