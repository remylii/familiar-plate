/**
 * Browser sync. use browser-sync.
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  fs = require('fs'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('server', function() {
  var chk = JSON.parse(fs.readFileSync(config.browser.chk_conf, 'utf8'));
  if (!chk || !chk.start) {
    return false;
  }
  if (!chk.live) {
    config.browser.files = '';
  }
  return $.browser.create().init(config.browser);
});
