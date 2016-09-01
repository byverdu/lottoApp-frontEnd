// build file configuration for gulp task
const buildConfig = require( '../paths' ).build;

module.exports = function ( gulp, plugins ) {
  return function () {
    return gulp.src( buildConfig.source, buildConfig.baseDir )
      .pipe( gulp.dest( buildConfig.dest ))
      .pipe( plugins.notify( buildConfig.notify ));
  };
};
