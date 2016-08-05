/**
 * Browser sync. use browser-sync.
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('server', function() {
  return $.browser.create().init(config.browser);
});
