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

  // broser-sync
  browser: {
    chk_conf: '.chk_browser',
    files: "./public/**/*",
    server: {
      baseDir: './public',
      middleware: function(req, res, next) {
        var timestamp = "[" + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + "] ";
        console.log(timestamp + req.method + " " + req.originalUrl + " - " +  req.connection.remoteAddress + " - " + req.headers['user-agent']);
        next();
      },
    },
    ui: {
      port: 3001,
    },
    ghostMode: {
      clicks: true,
      scroll: true,
      forms: {
        submit: true,
        inputs: true,
        toggles: true
      }
    },
    logLevel: "info",
    notify: false,
    open: false
  },

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
    },

    stylelint: {
      configFile: ".stylelintrc"
    },

    postcssReporter: {
      clearMessages: true
    }
  },

  // scss-lint
  scsslint: {
    config: 'scss-lint.yml',
    bundleExec: true
    // reporterOutputFormat: 'Checkstyle'
  },

  // sprite css and image  @todo  + new Date().getTime()
  sprite: {
    spritesmith: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '../img/sprite/sprite.png',
      cssFormat: 'scss_retina',
      retinaSrcFilter: ['src/img/sprite/retina/*@2x.png'],
      retinaImgName: 'sprite@2x.png',
      retinaImgPath: '../img/sprite/sprite@2x.png',
      cssOpts: {
        functions: true
      },
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

  // iconfont
  iconfont: {
    opt: {
      fontName: 'myfont',  // isRequired
      // prependUnicode: true,  // recommended option
      formats: ['ttf', 'eot', 'woff', 'svg'],
      timestamp: Math.round(Date.now()/1000)
    },
    consolidate: {
      fontName: 'myfont',
      fontPath: '../fonts/',
      className: 's'
    }
  },

  // gulp-imagemin options
  imagemin: {
    progressive: true,
    optimizatoinLevel: 7,
    interlaced: false
  },

  path: {
    html: {
      src: ['public/**/*.html', '!public/_iconfontGuide/**/*'],
      dest: 'public',
      watch: ['public/**/*.html', '!public/_iconfontGuide/**/*']
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

    iconfont: {
      src: ['src/icons/*.svg'],
      watch: ['src/icons/*.svg'],
      dest: {
        font: 'public/fonts',
        css: 'public/css',
        html: 'public/_iconfontGuide'
      },
      templates: {
        html: 'src/icons/templates/myfont.html',
        css: 'src/icons/templates/myfont.css'
      }
    },

    imagecopy: {
      src: ['src/img/**/*.{png,jpeg,jpg,gif}', '!src/img/sprite/**'],
      dest: 'public/img',
      watch: ['src/img/**/*.{png,jpeg,jpg,gif}', '!src/img/sprite/**']
    },

    imagemin: {
      src: ['public/img/**/*.{png,jpeg,jpg,gif}', '!src/img/sprite/**'],
      dest: 'public/img',
      watch: ['src/img/**/*.{png,jpeg,jpg,gif}', '!src/img/sprite/**']
    }
  }
};

module.exports = config;
