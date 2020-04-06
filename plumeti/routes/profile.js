const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('personal-data', { title: 'Express' });
});

router.get('/personal-data', function(req, res, next) {
    res.render('personal-data', { title: 'Express' });
});

router.get('/record', function(req, res, next) {
    res.render('record', { title: 'Express' });
});

router.get('/password', function(req, res, next) {
    res.render('password', { title: 'Express' });
});

module.exports = router