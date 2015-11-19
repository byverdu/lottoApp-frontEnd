'use strict';

let express = require('express'),
  router = express.Router(),
  homeController = require('../controllerLogic/home');

module.exports = function (app) {
  app.use('/', router);
};

// Routes for index
router.get('/', homeController.getIndex);
router.post('/', (req, res) => {
  let stringLottoID = Object.getOwnPropertyNames(req.body).toString();

  res.redirect(`/lotto/?lottoID=${stringLottoID}`);
});

// routes for lotto
router.get('/lotto', (req, res) => {
  res.render('lotto', {title: req.query.lottoID});
});
