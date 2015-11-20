'use strict';
import {Helper} from '../../../config/helper';

let mongoose = require('mongoose'),
  Lotto = mongoose.model('Lotto'),
  helper = new Helper();

// Home page
exports.findLottoID = (req, res, next) => {
  Lotto.find(function (err, lottos) {
    if (!err) {

      res.render('index', {
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
