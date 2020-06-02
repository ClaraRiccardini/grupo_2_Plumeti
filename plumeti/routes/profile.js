const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('personal-data', { 
        userLogged: req.session.usuarioLogueado
    });
});

router.get('/personal-data', function(req, res, next) {
    res.render('personal-data', {
        userLogged: req.session.usuarioLogueado
    });
});

router.get('/record', function(req, res, next) {
    res.render('record', { 
        userLogged: req.session.usuarioLogueado
    });
});

router.get('/password', function(req, res, next) {
    res.render('password', { 
        userLogged: req.session.usuarioLogueado
    });
});

module.exports = router