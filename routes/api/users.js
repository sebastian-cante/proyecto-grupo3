var express = require('express');
var router = express.Router();
var usersAPIController = require('../../controllers/api/usersController')

router.get('/', usersAPIController.list)
router.get('/:id', usersAPIController.find)

module.exports = router