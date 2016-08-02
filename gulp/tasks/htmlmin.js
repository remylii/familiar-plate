/**
 * html compressor/minifier
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('htmlmin', function() {
  return gulp.src(config.path.html.src)
    .pipe($.htmlmin(config.htmlmin))
    .pipe(gulp.dest(config.path.html.dest));
});
