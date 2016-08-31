import helper from '../../config/helper';
// const mongoose = require( 'mongoose' );
// const Lotto = mongoose.model( 'Lotto' );

// Home page
exports.homePage = ( req, res, next ) => {
  helper.extractLottoID().then(( result ) => {
    console.log(result, 'promisr');
    res.render( 'index', {
      title: 'LottoApp',
      lottos: result
    });
  }).catch(() => {
    console.log( 'promisr errororoororororor');
  });
};

exports.postQueryToLotto = ( req, res ) => {
  const stringLottoID = Object.getOwnPropertyNames( req.body ).toString();

  res.redirect( `/lotto/?id=${stringLottoID}` );
};

// Lotto page
exports.getLottoPage = ( req, res ) => {
  const lottoID = req.query.id;
  const countBall = helper.getCountBalls( lottoID );
  const totalBalls = Array.from({ length: countBall }, ( v, k ) => k ).slice( 1 );
  totalBalls.push( countBall );

  res.render( 'lotto', {
    title: lottoID,
    balls: totalBalls
  });
};
