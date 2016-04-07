// Karma configuration
// Generated on Fri Apr 01 2016 14:18:06 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser

    files: [
        'public/vendors/angular.min.js',
        'public/vendors/angular-route.min.js',
        'public/vendors/angular-material.min.js',
        'public/vendors/ang-accordion.js',
        'public/vendors/angular-messages.min.js',
        'public/vendors/angular-password.min.js',
        'public/vendors/angular-animate.min.js',
        'public/vendors/angular-aria.min.js',
        'public/vendors/ngStorage.min.js',
        'public/vendors/sinon.js',
        'public/vendors/smart-table.min.js',
        'public/vendors/xeditable.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'public/scripts/**/*.js',
        'public/scripts/app.js',
        'public/scripts/controllers/accountController.js',
        'http://ngmaterial.assets.s3.amazonaws.com/svg-assets-cache.js',
        'http://cdn.wijmo.com/5.20161.138/controls/wijmo.min.js',
        'http://cdn.wijmo.com/5.20161.138/interop/angular/wijmo.angular.min.js'
    ],

    // list of files to exclude
    exclude: [
      'public/scripts/specs/account-spec.js',
      'public/scripts/specs/instruments-factory-spec.js',
      'public/scripts/specs/modal-controller-spec.js',
      'public/scripts/specs/schools-spec.js',
      'public/scripts/specs/test-spec.js',
      'public/scripts/specs/temp-test-controller.js',
      // 'public/scripts/specs/donors-controller-spec.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });

};
