'use strict';

var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Lotto = mongoose.model('Lotto');

module.exports = function (app) {
  app.use('/', router);
};

Lotto.find(function(err, lotto) {

  if (!err) {
    console.log(lotto);
  } else {
    console.log(err);
  }
});

router.get('/', function (req, res, next) {
  Lotto.find(function (err, articles) {
    if (err) {return next(err);}

    articles.forEach((el)=>{
      console.log(el.lottoID);
    });

    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
