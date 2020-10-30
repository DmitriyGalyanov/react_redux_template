const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),

			'@fonts': path.resolve(__dirname, 'src', 'fonts'),

			'@contexts': path.resolve(__dirname, 'src', 'contexts'),

			'@propShapes': path.resolve(__dirname, 'src', 'propShapes'),

			'@components': path.resolve(__dirname, 'src', 'Components'),
			'@pages': path.resolve(__dirname, 'src', 'Pages'),

			'@routes': path.resolve(__dirname, 'src', 'routes'),

			'@stateSlices': path.resolve(__dirname, 'src', 'app', 'stateSlices'),

			'@imgs': path.resolve(__dirname, 'src', 'imgs')
		}
	}
}