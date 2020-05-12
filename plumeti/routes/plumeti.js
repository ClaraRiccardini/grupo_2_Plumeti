var express = require('express');
var router = express.Router();
var main = require('../controllers/mainController')

/* GET home page. */
router.get('/', main.root);
router.get('/home', main.root);
//router.get('/cart', main.cart);
router.get('/login', main.login);

module.exports = router;
