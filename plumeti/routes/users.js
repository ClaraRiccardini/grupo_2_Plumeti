var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController')
var usersMiddleware = require('../middlewares/usersMiddleware')
var {check, validationResult, body} = require('express-validator')

/* GET users listing. */
const db = require("../database/models");
let sequelize = db.sequelize

router.get('/login', usersMiddleware.guest, users.login);

router.post('/login', [
    check('usuario').isLength({min:1}).withMessage('El nombre es obligatorio'),
    check('contrasenia').isLength({min:6}).withMessage('La contraseña debe tener almenos 6 caracteres')
],users.processLogin);


router.get('/register', usersMiddleware.guest, users.register);

router.post('/register',  [
    check('nombre').isLength({min:1}).withMessage('El nombre es obligatorio'),
    check('usuario').isLength({min:1}).withMessage('El nombre es obligatorio'),
    check('contrasenia').isLength({min:6}).withMessage('La contraseña debe tener almenos 6 caracteres'),
    check('email').isEmail().withMessage('El email es obligatorio')
], users.creatUser); 

router.get('/logout', users.logout)

module.exports = router;