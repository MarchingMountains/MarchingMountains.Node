var gulp = require('gulp');
var coveralls = require('gulp-coveralls');
var production = process.env.NODE_ENV === 'production';
var dependencies = [
  'underscore'
];
var del = require('del');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var jshint = require('gulp-jshint');

/**
  * Remove all files from the build, temp, and reports folders
  * @param  {Function} done - callback when complete
  */
gulp.task('clean', function() {
    var delconfig = [].concat(config.build, config.temp, config.report);
    return clean(delconfig);
});

gulp.task('jscs', function () {
  return gulp.src([ config.client + '**/!(*spec).js',  ])
    .pipe(jshint())                           // hint (optional) 
    .pipe(jshint.reporter('jshint-stylish')) // use any jshint reporter to log hint 
    .pipe(jshint.reporter('fail'))
    .pipe(jscs())                             // enforce style guide 
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));                                          // and style guide errors 
});

/**
  * Run specs once and exit
  * To start servers and run midway specs as well:
  *    gulp test --startServers
  * @return {Stream}
  */
gulp.task('test', [], function(done) {
    startTests(true /*singleRun*/, done);
});

gulp.task('coveralls', function() {
    return gulp.src('./report/coverage/report-lcov/lcov.info')
      .pipe(coveralls());
});

/**
  * Start the tests using karma.
  * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
  * @param  {Function} done - Callback to fire when karma is done
  * @return {undefined}
  */
function startTests(singleRun, done) {
    var Server = require('karma').Server;

    var myKarma = new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: !!singleRun
    }, done);
    myKarma.start();
}

/**
  * Delete all files in a given path
  * @param  {Array}   path - array of paths to delete
  * @return Promise that resolves into the files deleted.
  */
function clean(path) {
    log('Cleaning: ' + $.util.colors.blue(path));
    return del(path);
}

/**
  * Log a message or series of messages using chalk's blue color.
  * Can pass in a string, object or array.
  */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
