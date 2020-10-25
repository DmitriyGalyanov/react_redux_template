const path = require('path');

module.exports = {
	webpack: {
		alias: {

			'@src': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src', 'Components'),
			'@stateSlices': path.resolve(__dirname, 'src', 'app', 'stateSlices'),
			'@initState': path.resolve(__dirname, 'src', 'app', 'initState'),

			'@imgs': path.resolve(__dirname, 'src', 'imgs')

		}
	}
}