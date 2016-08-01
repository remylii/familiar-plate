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

  // style
  style: {
    autoprefixer: {
      browser: ['last 3 version', 'ie >= 9', 'Android 4.0']
    },

    sass: {
      outputStyle: 'compressed'
    }
  },

  // sprite css and image
  sprite: {
    spritesmith: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '../img/sprite/sprite.png?' + new Date().getTime(),
      cssFormat: 'scss',
      cssVarMap: function(sprite) {
        sprite.name = 'sprite-' + sprite.name;
      }
    },
    img: {
      dest: 'public/img/sprite/'
    },
    css: {
      dest: 'src/style/sprite/'
    }
  },

  path: {
    jade: {
      src: ['src/view/**/*.jade', '!src/view/**/_*.jade'],
      dest: 'public',
      watch: ['src/view/**/*.jade']
    },

    sass: {
      src: ['src/style/**/*.{scss,sass}'],
      dest: 'public/css',
      watch: ['src/style/**/*.{scss,sass}']
    },

    sprite: {
      src: ['src/img/sprite/**/*.{png,jpg,jpeg}'],
      watch: ['src/img/sprite/**/*.{png,jpg,jpeg}']
    }
  }
};

module.exports = config;
