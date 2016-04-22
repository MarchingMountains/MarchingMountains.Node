module.exports = function () {
	var client = './public/scripts/';
	var server = './server/';
	var clientApp = client;
	var report = './report/';
	var root = './';
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
		/**
			* File paths
			*/
		// all javascript that we want to vet
		alljs: [
			//Uncomment when ready to clean up code
			'./public/scripts/**/*.js',
			'./server/**/*.js',
			'./*.js'
		],
		build: './build/',
		client: client,
		css: 'public/css/**/*.css',
		fonts: bower.directory + 'font-awesome/fonts/**/*.*',
		html: 'public/html**/*.html',
		htmltemplates: 'public/html/**/*.html',
		images: 'public/img/**/*.*',
		index: client + 'index.html',
		// app js, with no specs
		js: [
			clientApp + '**/*.module.js',
			clientApp + '**/*.js',
			'!' + clientApp + '**/*.spec.js'
		],
		jsOrder: [
			'**/app.module.js',
			'**/*.module.js',
			'**/*.js'
		],
		less: client + 'styles/app.less',
		lessFiles: [
			client + 'styles/app.less',
			clientApp + '**/*.less'
		],
		report: report,
		root: root,
		server: server,
		source: 'src/',
		stubsjs: [
			bower.directory + 'angular-mocks/angular-mocks.js',
			client + 'stubs/**/*.js'
		],
		temp: temp,

		/**
			* optimized files
			*/
		optimized: {
			app: 'app.js',
			lib: 'lib.js'
		},

		/**
			* plato
			*/
		plato: {js: clientApp + '**/*.js'},

		/**
			* browser sync
			*/
		browserReloadDelay: 1000,

		/**
			* template cache
			*/
		templateCache: {
			file: 'templates.js',
			options: {
				module: 'app.core',
				root: 'app/',
				standalone: false
			}
		},

		/**
			* Bower and NPM files
			*/
		bower: bower,
		packages: [
			'./package.json',
			'./bower.json',
			'./src/server/info.json'
		],

		/**
			* specs.html, our HTML spec runner
			*/
		specRunner: client + specRunnerFile,
		specRunnerFile: specRunnerFile,

		/**
			* The sequence of the injections into specs.html:
			*  1 testlibraries
			*      mocha setup
			*  2 bower
			*  3 js
			*  4 spechelpers
			*  5 specs
			*  6 templates
			*/
		testlibraries: [
			nodeModules + '/mocha/mocha.js',
			nodeModules + '/chai/chai.js',
			nodeModules + '/sinon-chai/lib/sinon-chai.js'
		],
		specHelpers: ['tests/test-helpers/*.js'],
		specs: [clientApp + '**/*.spec.js'],

		/**
			* Node settings
			*/
		nodeServer: server + 'app.js',
		defaultPort: '9001'
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
				config.specHelpers,
				clientApp + '**/*.module.js',
				clientApp + '**/*.js',
				temp + config.templateCache.file
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