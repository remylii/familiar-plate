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

  // htmlhint
  htmlhint: '.htmlhintrc',

  // htmlmin options
  htmlmin: {
    collapseWhitespace: true
  },

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

  // sprite css and image  @todo  + new Date().getTime()
  sprite: {
    spritesmith: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '../img/sprite/sprite.png',
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
    html: {
      src: ['public/**/*.html'],
      dest: 'public',
      watch: ['public/**/*.html']
    },

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
    },

    imagecopy: {
      src: ['src/img/**/*.{png,jpeg,jpg,gif}', '!src/img/sprite/**'],
      dest: 'public/img',
      watch: ['src/img/**/*.{png,jpeg,jpg,gif}', '!src/img/sprite/**']
    }
  }
};

module.exports = config;
