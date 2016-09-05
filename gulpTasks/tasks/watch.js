// Watch gulp task for when a file is saved
const paths = require( '../paths' );

module.exports = function ( gulp, plugins, reload ) {
  return function () {
    // gulp.watch( paths.scss.source, ['scss']);
    gulp.watch( paths.build.source, ['build']).on( 'change', reload );
  };
};
