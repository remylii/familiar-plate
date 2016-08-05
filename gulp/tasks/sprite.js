/**
 * create sprite img and stylesheet. use gulp.spritesmith
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */

var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('sprite', function() {
  // @see: https://github.com/twolfson/gulp.spritesmith#documentation
  var spriteData = gulp.src(config.path.sprite.src)
    .pipe($.spritesmith(config.sprite.spritesmith));

  // スプライト画像の保存先
  spriteData.img
    .pipe(gulp.dest(config.sprite.img.dest));

  // cssの保存先
  spriteData.css
    .pipe(gulp.dest(config.sprite.css.dest));

  return spriteData;
});
