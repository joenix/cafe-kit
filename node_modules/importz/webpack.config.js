const path = require('path');
const webpack = require('webpack');

module.exports = {

	entry: './index.js',

	output: {

		filename: '[name].js',

		path: path.resolve( __dirname, 'dist' ),

		libraryTarget: 'umd'

	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin(
			{
				compress: { warnings: false }
			}
		),
	],

	module: {

		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[ 'env', { 'modules': false } ],
						],
					},
				},
				exclude: /node_modules/
			}
		]

	},
};
