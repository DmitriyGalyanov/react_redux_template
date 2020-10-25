const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),

			'@components': path.resolve(__dirname, 'src', 'Components'),
			'@pages': path.resolve(__dirname, 'src', 'Pages'),

			'@stateSlices': path.resolve(__dirname, 'src', 'app', 'stateSlices'),

			'@imgs': path.resolve(__dirname, 'src', 'imgs')
		}
	}
}