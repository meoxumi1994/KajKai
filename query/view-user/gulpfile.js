var gulp = require('gulp');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');
var isparta = require('isparta');
var istanbul = require('gulp-istanbul');

gulp.task('test', function () {
  return gulp.src('tests/**/*.js', { read: false })
  .pipe(istanbul({
    // supports es6
    instrumenter: isparta.Instrumenter
  }))
  // .pipe(cover.instrument({
  //   pattern: ['services/**/*.js'],
  //   debugDirectory: 'debug'
  // }))
  .pipe(mocha())
  .pipe(cover.gather())
  .pipe(cover.format())
  .pipe(gulp.dest('reports'));
});
