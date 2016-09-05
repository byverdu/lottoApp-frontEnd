const serveConfig = require( '../paths' ).serve;

module.exports = function ( browserSync ) {
  return function ( done ) {
    browserSync(
      serveConfig, done
    );
  };
};
