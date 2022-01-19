const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
	{
		mode: 'development',
		entry: './dist/system/main.js',
		target: 'electron-main',
		output: {
			path: __dirname +"/cache",
			filename: 'main.js'
		},
		module: {
			rules: [
			  {
				test: /\.m?js$/,
				resolve: {
				  fullySpecified: false, // disable the behaviour
				},
			  },
			],
		  }
	},
	{
		mode: "development",
		entry: "./dist/index.js",
		target: "electron-renderer",
		devtool: "source-map",
		output: {
			path: __dirname+"/cache",
			filename: 'index.js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './assets/index.html'
			})
		],
		module: {
			rules: [
			  {
				test: /\.m?js$/,
				resolve: {
				  fullySpecified: false, // disable the behaviour
				},
			  },
			],
		  }
	}
]