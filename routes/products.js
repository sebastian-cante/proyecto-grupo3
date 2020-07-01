var express = require('express');
var router = express.Router();

router.get('/detalle', function(req, res, next) {
    res.render('detalle');
  });

  router.get('/alta', function(req, res, next) {
    res.render('alta');
  });

module.exports= router