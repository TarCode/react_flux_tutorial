/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         webpack.config.js
 *  Description:  The webpack config file that bundles everything together into a nice
 *                client side script
 *
 ******************************************************************************************************/
var webpack = require("webpack");

const isProd = process.env.NODE_ENV == 'production' ? true : false;

module.exports = {
	entry: "./src/js/main.js",
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: "/"
	},
	devServer: {
		inline:true,
		contentBase: './dist'
	},
  plugins: isProd ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : [
    // no plugins so far, unless isProd
  ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:
        {
            presets:['es2015', 'react']
        }
			}
		]
	}
}
