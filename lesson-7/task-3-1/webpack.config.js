const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	output: {
		path: path.resolve(__dirname, 'review_build'),
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
}
