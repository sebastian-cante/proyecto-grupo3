var express = require('express');
var router = express.Router();

router.get('/detalle', function(req, res, next) {
    res.render('detalle');
  });

  router.get('/alta', function(req, res, next) {
    res.render('alta');
  });

  router.get('/carrito', function(req, res, next) {
    res.render('carrito');
  });


module.exports= router