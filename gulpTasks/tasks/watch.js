// Watch gulp task for when a file is saved
const paths = require( '../paths' );

module.exports = function ( gulp, plugins ) {
  return function () {
    plugins.livereload.listen();
    gulp.watch( paths.scss.source, ['scss']);
  };
};
