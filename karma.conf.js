// Karma configuration
// Generated on Fri Apr 01 2016 14:18:06 GMT-0500 (CDT)

module.exports = function(config) {

    var gulpConfig = require('./gulp.config')();
    gulpConfig.karma = gulpConfig.karmaConfig();

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

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

    files: [
        'public/vendors/angular/angular.min.js',
        'public/vendors/angular-route/angular-route.min.js',
        'public/vendors/angular-material/angular-material.min.js',
        'public/vendors/angular-material/angular-material-mocks.js',
        'public/vendors/ang-accordion/js/ang-accordion.js',
        'public/vendors/angular-messages/angular-messages.min.js',
        'public/vendors/angular-password/angular-password.min.js',
        'public/vendors/angular-animate/angular-animate.min.js',
        'public/vendors/angular-aria/angular-aria.min.js',
        'public/vendors/ngstorage/ngStorage.min.js',
        'public/vendors/angular-smart-table/dist/smart-table.min.js',
        'public/vendors/angular-xeditable/dist/js/xeditable.min.js',
        'public/vendors/angular-mocks/angular-mocks.js',
        'public/scripts/**/*.js',
        'public/scripts/app.js',
        'public/vendors/bardjs/dist/bard.js',
        'public/vendors/sinon/lib/sinon.js'
    ],

    // list of files to exclude
    exclude: [
      'public/scripts/specs/account.controller.spec.js',
      'public/scripts/specs/instruments.factory.spec.js',
      'public/scripts/specs/modal.controller.spec.js',
      'public/scripts/specs/schools.controller.spec.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './public/scripts/**/!(*spec).js': 'coverage'
    },


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
            statements: 19,
            branches: 13,
            functions: 20,
            lines: 19
        },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });

};
