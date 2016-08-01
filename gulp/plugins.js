/**
 * gulp-load-plugins.
 *
 * gulpのプラグイン系はこのモジュールでまとめて読み込む
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var loader = require('gulp-load-plugins');

var $ = loader({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[^-.]/
});

module.exports = $;
