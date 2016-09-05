// clean/delete folders before every task is run
const cleanConfig = require( '../paths' ).clean;

module.exports = function ( gulp, plugins, cleanModule ) {
  return function () {
    gulp.src( '' )
      .pipe( plugins.notify( cleanConfig.notify ));
    return cleanModule([cleanConfig.dest]);
  };
};
