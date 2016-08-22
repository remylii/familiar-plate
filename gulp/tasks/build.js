/**
 * build task.
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
   runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence(
    'clean',
    'sprite',
    ['imagecopy', 'sass', 'jade', 'iconfont'],
    'htmlhint',
    ['htmlmin', 'imagemin']
  );
});
