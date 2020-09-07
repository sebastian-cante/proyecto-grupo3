var express = require('express');
var router = express.Router();
var {check, validationResult, body} = require('express-validator')
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


router.get('/', productsController.listado);

router.get('/detalle/', productsController.detail);

router.get('/alta',authMiddleware, productsController.categoria)




router.post('/alta',upload.any(),[
      check('nombre').isLength({min : 1}).withMessage('El campo nombre no puede estar vacio'),
      check('detalle').isLength({min : 20}).withMessage('La descripción del producto debe contener al menos 20 caracteres'),
      check('precio').isInt({min : 0}).withMessage('El campo de precio debe ser completado'),
      check('stock').isInt({min : 0}).withMessage('El campo stock debe ser mayor a 0')

], productsController.create);



//a partir de acá agrego código nuevo para dropzone

//router.post('/alta', [upload.single('photos')], function(req, res){
  
//  res.json({url: '/uploads/' + req.filename})
//})





//hasta acá agrego código para dropzone

router.get('/carrito', authMiddleware, productsController.carrito);


module.exports= router