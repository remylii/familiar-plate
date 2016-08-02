/**
 * Image compressed. gulp task
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('imagemin', function() {
  return gulp.src(config.path.imagemin.src)
    .pipe($.imagemin(config.imagemin))
    .pipe(gulp.dest(config.path.imagemin.dest));
});
