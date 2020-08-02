var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
let multer = require("multer");
let path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/', productsController.products);

router.get('/detalle/', productsController.detail);

router.get('/alta', productsController.alta);

router.post('/alta', upload.any(), productsController.create);

router.get('/carrito', authMiddleware, productsController.carrito);


module.exports= router