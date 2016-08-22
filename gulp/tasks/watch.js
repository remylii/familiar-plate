/**
 * ファイル監視
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config');

gulp.task('watch', ['server'], function() {
  gulp.watch(config.path.html.watch, ['htmlhint']);
  gulp.watch(config.path.jade.watch, ['jade']);
  gulp.watch(config.path.sass.watch, ['sass']);
  gulp.watch(config.path.sprite.watch, ['sprite']);
  gulp.watch(config.path.iconfont.watch, ['iconfont']);
  gulp.watch(config.path.imagecopy.watch, ['imagecopy']);
});
