// SCSS file configuration for gulp task

const scssConfig = require( '../paths' ).scss;

module.exports = function ( gulp, plugins ) {
  return function () {
    return plugins.scss( scssConfig.source, { style: 'expanded' })
      .pipe( plugins.autoprefixer( scssConfig.autoprefixer ))
      .pipe( gulp.dest( scssConfig.dest ))
      .pipe( plugins.rename({ suffix: '.min' }))
      .pipe( plugins.minify())
      .pipe( gulp.dest( scssConfig.dest ))
      .pipe( plugins.notify( scssConfig.notify ));
  };
};
