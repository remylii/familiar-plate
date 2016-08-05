/**
 * gulp-load-plugins.
 *
 * gulpのプラグイン系はこのモジュールでまとめて読み込む。
 * broser-syncも呼べるようにしておく
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var loader = require('gulp-load-plugins'),
  browser = require('browser-sync');

var $ = loader({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

$.browser = browser;
module.exports = $;
