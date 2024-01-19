const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),	//указываем нашу папку
	entry: './script.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')       //resolve обьедеянет несоклько путей
	},

	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true
		},
		open : true
	}
}
