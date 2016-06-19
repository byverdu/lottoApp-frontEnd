// clean/delete folders before every task is run
const paths = require( '../config/gulp' );

module.exports = function ( cleanModule ) {
  return function () {
    return cleanModule([paths.scss.dest]);
  };
};
