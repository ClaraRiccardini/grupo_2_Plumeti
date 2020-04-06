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

router.get('/profile', function(req, res, next) {
    res.render('profile', { title: 'Express' });
});

router.get('/detail', function(req, res, next) {
    res.render('Detail', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.get('/admproducts', function(req, res, next) {
    res.render('admproducts', { title: 'Express' });
});

module.exports = router;
