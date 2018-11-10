const path = require('path');

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, '../server/public/build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader' }
		]
	}
};


