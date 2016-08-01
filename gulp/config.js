/**
 * Setting file.
 *
 * gulp/task系の設定はここに記述する
 */
var config = {
  // source directory path
  src_dir: 'src',
  // dist target directory path
  dist_dir: 'public',

  // gulp-jade options
  jade: {
    pretty: true
  },

  path: {
    jade: {
      src: ['src/view/**/*.jade', '!src/view/**/_*.jade'],
      dest: 'public',
      watch: ['src/view/**/*.jade']
    }
  }
};

module.exports = config;
