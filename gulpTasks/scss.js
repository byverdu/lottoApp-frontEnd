// SCSS file configuration for gulp task
module.exports = function ( gulp, plugins ) {
  return function () {
    return plugins.scss( './scss/style.scss', { style: 'expanded' })
      .pipe( plugins.autoprefixer( 'last 2 versions' ))
      .pipe( gulp.dest( './app/public/css/' ))
      .pipe( plugins.rename({ sufix: '.min' }))
      .pipe( plugins.minify())
      .pipe( gulp.dest( './app/public/css' ))
      .pipe( plugins.notify({ message: 'All scss files compiled' }));
  };
};
