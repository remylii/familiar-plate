/**
 * scss linter. use gulp-scss-lint.
 *
 * @dependence  ruby, gem scss_lint
 * @version  1.0.0
 * @branch   feature/scss_lint
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('scsslint', function() {
  return gulp.src(config.path.sass.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.scssLint(config.scsslint))
    .pipe($.scssLint.failReporter());
});
