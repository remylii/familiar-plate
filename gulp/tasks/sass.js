/**
 * sass are converted stylesheets. use gulp-css, gulp-postcss
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('sass', function() {
  var autoprefixer = require('autoprefixer'),
    stylelint = require('stylelint'),
    postcssReporter = require('postcss-reporter');

  return gulp.src(config.path.sass.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.sass(config.style.sass))
    .pipe($.postcss([
      autoprefixer(config.style.autoprefixer),
      stylelint(config.style.stylelint),
      postcssReporter(config.style.postcssReporter)
    ]))
    .pipe(gulp.dest(config.path.sass.dest));
});
