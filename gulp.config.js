module.exports = function () {
	var client = './public/scripts/';
	var server = './server/';
	var clientApp = client;
	var report = './report/';
	var specRunnerFile = 'specs.html';
	var temp = './tmp/';
	var wiredep = require('wiredep');
	var bower = {
		json: require('./bower.json'),
		directory: './bower_components/',
		ignorePath: '../..'
	};
	var nodeModules = 'node_modules';

	var config = {
		build: './build/',
		temp: temp,
		report: report,
		client:client
	};

	/**
		* karma settings
		*/
	config.karmaConfig = getKarmaOptions;

	return config;

	////////////////

	function getKarmaOptions() {
		var bowerFiles = wiredep({devDependencies: true})['js'];
		var options = {
			files: [].concat(
				bowerFiles,
				clientApp + '**/*.module.js',
				clientApp + '**/*.js'
			),
			exclude: [],
			coverage: {
				dir: report + 'coverage',
				reporters: [
					// reporters not supporting the `file` property
					{type: 'html', subdir: 'report-html'},
					{type: 'lcov', subdir: 'report-lcov'},
					{type: 'json', subdir: 'report-json'}
				]
			},
			preprocessors: {}
		};
		options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
		return options;
	}
};