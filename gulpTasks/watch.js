// Watch gulp task for when a file is saved
const paths = require( '../config/gulp' );

module.exports = function ( gulp, plugins ) {
  return function () {
    plugins.livereload.listen();
    gulp.watch( paths.scss.source, ['scss']);
  };
};
