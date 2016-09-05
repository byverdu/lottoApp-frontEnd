// Path folders for gulp
module.exports = {
  clean: {
    notify: {
      message: 'Clean task: All dist/ files deleted'
    },
    dest: './dist'
  },
  scss: {
    source: './scss/style.scss',
    dest: './app/public/css/',
    autoprefixer: 'last 2 versions',
    notify: {
      message: 'SCSS task: All scss files compiled'
    }
  },
  build: {
    source: './app/**/*',
    dest: './dist',
    baseDir: {
      baseDir: './app'
    },
    notify: {
      message: 'Build task: Dev files moved', onLast: true
    }
  },
  serve: {
    open: false,
    port: 9000,
    server: {
      baseDir: ['./dist', './'],
      middleware: ( request, response, next ) => {
        response.setHeader( 'Access-Control-Allow-Origin', '*' );
        next();
      }
    }
  }
};
