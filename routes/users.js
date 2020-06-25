var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/logIn', function(req, res, next) {
  res.render('logIn');
});
module.exports = router;
