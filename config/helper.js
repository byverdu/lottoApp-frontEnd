// global helper
const mongoose = require( 'mongoose' );
const Lotto = mongoose.model( 'Lotto' );
const lottoConfig = require( './lotto' );

module.exports = {
  extractLottoID() {
    return new Promise(( resolve, reject ) => {
      Lotto.find(( err, lottos ) => {
        if ( err ) {
          throw new Error( `${err}` );
        }
        if ( lottos.length > 0 ) {
          const result = lottos.map(( lotto ) => lotto.lottoID );
          resolve( result );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  },
  getCountBalls( lottoID ) {
    return lottoConfig[ lottoID ].countBall;
  }
};
