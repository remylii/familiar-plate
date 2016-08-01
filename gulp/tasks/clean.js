/**
 * clean task. build directoryを綺麗にする
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  del = require('del');

gulp.task('clean', function() {
  return del(config.dist_dir);
});
