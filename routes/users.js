var express = require('express');
var router = express.Router();
var {check, validationResult, body} = require('express-validator')
var usersController = require('../controllers/usersController')
var fs = require('fs');
const guestMiddleware = require('../middlewares/guestMiddleware');
const db = require('../db/models');
const { promiseImpl } = require('ejs');
/* GET users listing. */

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', [
    check('user').isLength({min : 1}).withMessage('Debe tener un nombre de Usuario'),
    check('email').isEmail().withMessage('Se debe ingresar un email válido'),
    check('password').isLength({min : 8}).withMessage('La contraseña debe poseer 8 o más caracteres'),
    body('email').custom(function(value){
        return db.Users.findOne({
            where : {
                email: value
            }
        })
        //let result = await value;
        .then(function(user){
            console.log(user);
            if (user) {
                return Promise.reject();
                }
        })
    }).withMessage('Usuario ya existente') 
], usersController.create)

router.get('/login', guestMiddleware, usersController.logIn);

router.post('/login', usersController.logued)

router.get('/contacto', usersController.contact);

router.get('/logout', usersController.logout)

module.exports = router;
