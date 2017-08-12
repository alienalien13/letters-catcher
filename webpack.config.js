const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge'),
	UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
	module:{
		rules:[
			{
				test:/\.jsx?$/i,
				loader: 'babel-loader'
			}
		]
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
const prod = merge(
	common,
	{
		module:{
			rules:[
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader',
							'postcss-loader'
						]
					})					
				}
			]
		},
		plugins:[
			new HtmlPlugin({
				filename: 'index.html',
				template: PATHS.src + '/index.html',
				minify: {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new UglifyJSPlugin({
				comments: false
			})
		]
	}
)

module.exports = env=>{
	if(env === 'development') return dev
	if(env === 'production') return prod
}