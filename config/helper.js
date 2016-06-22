// global helper

const lottoConfig = require( './lotto');

module.exports = {
  extractLottoID( lottosDB ) {
    return lottosDB.map(( lotto ) => lotto.lottoID );
  },
  getCountBalls( lottoID ) {
    return lottoConfig[ lottoID ].countBall;
  }
};
