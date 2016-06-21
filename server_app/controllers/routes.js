
const express = require( 'express' );
const router = express.Router();
const pathRouting = require( './pathRouting/pathRouting' );

module.exports = function ( app ) {
  app.use( '/', router );
};

// Routes for index
router.get( '/', pathRouting.findLottoID );
router.post( '/', pathRouting.postQueryToLotto );

// routes for lotto
router.get( '/lotto', pathRouting.getLottoPage );