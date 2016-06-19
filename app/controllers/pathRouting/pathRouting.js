import { Helper } from '../../../config/helper';
const mongoose = require( 'mongoose' );
const Lotto = mongoose.model( 'Lotto' );
const helper = new Helper();

// Home page
exports.findLottoID = ( req, res, next ) => {
  Lotto.find(( err, lottos ) => {
    if ( !err ) {
      return res.render( 'index', {
        title: 'LottoApp',
        lottos: helper.extractLottoID(lottos)
      });
    } else {
      return next(err);
    }
  });
};

exports.postQueryToLotto = (req, res) => {
  let stringLottoID = Object.getOwnPropertyNames(req.body).toString();

  res.redirect(`/lotto/?lottoID=${stringLottoID}`);
};

// Lotto page
exports.getLottoPage = (req, res) => {
  res.render('lotto', {title: req.query.lottoID});
};
