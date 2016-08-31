// clean/delete folders before every task is run
const paths = require( '../paths' );

module.exports = function ( cleanModule ) {
  return function () {
    return cleanModule([paths.scss.dest]);
  };
};
