var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
    res.render('products', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
    res.render('cart', { title: 'Express' });
});

module.exports = router;
