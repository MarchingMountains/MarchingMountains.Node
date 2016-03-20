module.exports = function(config) {
	var gulpConfig = require('./gulp.config')();
	gulpConfig.karma = gulpConfig.karmaConfig();

	config.set({

		plugins: [
			'karma-mocha',
			'karma-chai',
			'karma-sinon',
			'karma-chai-sinon',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-coverage',
			'karma-threshold-reporter'
		],

		// frameworks to use
		// some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],

		// list of files / patterns to load in the browser
		files: gulpConfig.karma.files,

		// list of files to exclude
		exclude: gulpConfig.karma.exclude,

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: gulpConfig.karma.preprocessors,

		// test results reporter to use
		// possible values: 'dots', 'progress', 'coverage'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage', 'threshold'],

		coverageReporter: {
			dir: gulpConfig.karma.coverage.dir,
			reporters: gulpConfig.karma.coverage.reporters
		},

		// the configure thresholds
		// Please set to integer values
		thresholdReporter: {
			statements: 100,
			branches: 100,
			functions: 100,
			lines: 100
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR ||
		// config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		//        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};