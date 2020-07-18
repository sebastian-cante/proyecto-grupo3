var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', productsController.products);

router.get('/detalle', productsController.detail);

router.get('/alta', productsController.alta);

router.get('/carrito', authMiddleware, productsController.carrito);


module.exports= router