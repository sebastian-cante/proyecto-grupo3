var express = require('express');
var router = express.Router();
var {check, validationResult, body} = require('express-validator')
var usersController = require('../controllers/usersController')
/* GET users listing. */

router.get('/register', usersController.register);

router.post('/register', usersController.create)

router.get('/login', usersController.logIn);

router.post('/login', usersController.logued)

router.get('/contacto', usersController.contact);

module.exports = router;
