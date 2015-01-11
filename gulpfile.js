var gulp = require('gulp');
var gulpMocha = require('gulp-mocha');
var gulpConnect = require('gulp-connect');
var karma = require('karma').server;
var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var path = require('path');

var specFiles = [
  './spec/*.js'
];

var sourceFiles = [
  './lib/*.js',
  './*.html',
  './*.md'
];

gulp.task('connect', function() {
  gulpConnect.server({
    livereload: true,
    port: 8001,
    root: path.resolve('./')
  });
});

gulp.task('reload', function() {
  gulp.src(sourceFiles)
    .pipe(gulpConnect.reload());
});

gulp.task('browserify', function() {
  browserify({
    entries: ['./lib/research.js']
  })
  .bundle()
  .pipe(sourceStream('index.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(sourceFiles, ['browserify', 'reload']);
});

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(done) {
    gulp.src(specFiles)
    .pipe(gulpMocha({reporter: 'spec'}));
  }, done);
});

gulp.task('default', ['watch', 'connect']);
