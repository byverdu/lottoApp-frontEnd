import helper from '../../../config/helper';
const mongoose = require( 'mongoose' );
const Lotto = mongoose.model( 'Lotto' );

// Home page
exports.findLottoID = ( req, res, next ) => {
  Lotto.find(( err, lottos ) => {
    if ( err ) {
      return next( err );
    }
    return res.render( 'index', {
      title: 'LottoApp',
      lottos: helper.extractLottoID( lottos )
    });
  });
};

exports.postQueryToLotto = ( req, res ) => {
  const stringLottoID = Object.getOwnPropertyNames( req.body ).toString();

  res.redirect( `/lotto/?lottoID=${stringLottoID}` );
};

// Lotto page
exports.getLottoPage = ( req, res ) => {
  res.render( 'lotto', {
    title: req.query.lottoID
  });
};
