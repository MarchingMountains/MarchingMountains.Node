var gulp = require('gulp');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var production = process.env.NODE_ENV === 'production';
var dependencies = [
  'underscore'
];
var del = require('del');
var config = require('./gulp.config')();
var appPath = 'src/client/app/**/*.js';
var $ = require('gulp-load-plugins')({lazy: true});
/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */
gulp.task('vendor', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-ui-router-title/angular-ui-router-title.js'
  ]).pipe(concat('vendor.js'))
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function() {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
    .pipe(gulp.dest('public/js'));
});



// JSHint task
gulp.task('lint', function() {
  gulp.src(appPath)
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});


gulp.task('browserify', ['browserify-vendor'], function () {
  gulp.src(['./src/client/app/app.module.js', './src/client/app/core/core.module.js', './src/client/app/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

/**
  * Remove all files from the build, temp, and reports folders
  * @param  {Function} done - callback when complete
  */
gulp.task('clean', function () {
  var delconfig = [].concat(config.build, config.temp, config.report);
  return clean(delconfig);
});

/**
  * Run specs once and exit
  * To start servers and run midway specs as well:
  *    gulp test --startServers
  * @return {Stream}
  */
gulp.task('test', ['vet'], function (done) {
  startTests(true /*singleRun*/, done);
});

/**
  * vet the code and create coverage report
  * @return {Stream}
  */
gulp.task('vet', function () {
  log('Analyzing source with JSHint and JSCS');

  return gulp
    .src(['gulpfile.js', 'karma.conf.js', 'server.js'].concat(config.alljs))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'));
});

/*
 |--------------------------------------------------------------------------
 | Compile LESS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function() {
  return gulp.src('bower_components/bootstrap/less/bootstrap.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulpif(production, cssmin()))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('bower_components/bootstrap/less/*.less', ['styles']);
  gulp.watch(appPath, ['browserify']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['lint', 'styles', 'vendor', 'browserify']);

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
