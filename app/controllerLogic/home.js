'use strict';
let mongoose = require('mongoose'),
Lotto = mongoose.model('Lotto');

exports.getIndex = (req, res, next) => {
  Lotto.find(function (err, lottos) {
    if (!err) {
      res.render('index', {
        title: 'LottoApp',
        lottos: lottos
      });
    } else {
      return next(err);
    }
  });
};
