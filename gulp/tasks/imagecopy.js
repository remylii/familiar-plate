/**
 * copy images from soruce dir to dist directory.
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('imagecopy', function() {
  return gulp.src(config.path.imagecopy.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe(gulp.dest(config.path.imagecopy.dest));
});
