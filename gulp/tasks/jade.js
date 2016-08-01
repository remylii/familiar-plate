/**
 * Jade are converted HTML. use gulp-jade.
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

 var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('jade', function() {
  return gulp.src(config.path.jade.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.jade(config.jade))
    .pipe(gulp.dest(config.path.jade.dest));
});
