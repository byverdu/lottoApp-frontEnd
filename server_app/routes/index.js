
const express = require( 'express' );
const router = express.Router();
const controllers = require( '../controllers' );

module.exports = function ( app ) {
  app.use( '/', router );
};

// Routes for index
router.get( '/', controllers.homePage );
router.post( '/', controllers.postQueryToLotto );
//
// // routes for lotto
router.get( '/lotto', controllers.getLottoPage );
// router.get( '/statistics', (req, res) => {
//
// })
