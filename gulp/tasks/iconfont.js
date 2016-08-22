/**
 * create iconfont. Use iconfont.
 *
 * @version  1.0.0
 * @author   remyli
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('iconfont', function() {
  return gulp.src(config.path.iconfont.src)
    .pipe($.iconfont(config.iconfont.opt))
    .on('glyphs', function(glyphs, options) {

      // css of symbol-font
      var opt = config.iconfont.consolidate;
      opt['glyphs'] = glyphs.map(function(g) {
        return { name: g.name, codepoint: g.unicode[0].charCodeAt(0) };
      });

      gulp.src(config.path.iconfont.templates.css)
        .pipe($.consolidate('lodash', opt))
        .pipe($.rename({ basename: config.iconfont.consolidate.fontName }))
        .pipe(gulp.dest(config.path.iconfont.dest.css));

      // iconfont guide
      gulp.src(config.path.iconfont.templates.html)
        .pipe($.consolidate('lodash', opt))
        .pipe($.rename({ basename: 'index' }))
        .pipe(gulp.dest(config.path.iconfont.dest.html));
    })
    .pipe(gulp.dest(config.path.iconfont.dest.font));
});
