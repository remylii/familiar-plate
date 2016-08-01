/**
 * ファイル監視
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.path.jade.watch, ['jade']);
});
