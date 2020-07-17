var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

router.get('/', productsController.products);

router.get('/detalle', productsController.detail);

router.get('/alta', productsController.alta);

router.get('/carrito', productsController.carrito);


module.exports= router