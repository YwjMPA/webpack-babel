

module.exports = {
	entry: 'index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loader: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}