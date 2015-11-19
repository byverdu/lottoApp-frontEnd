'use strict';

let express = require('express'),
  router = express.Router(),
  homeController = require('../controllerLogic/home');


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', homeController.getIndex);
