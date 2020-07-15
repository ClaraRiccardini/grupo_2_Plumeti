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
    check('user').isLength({min:6}).withMessage('El usuario es obligatorio'),
    check('password').isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caracteres')
],users.processLogin);


router.get('/register', usersMiddleware.guest, users.register);

router.post('/register',[
    check('name').isLength({min:4}).withMessage('El nombre es obligatorio'),
    check('user').isLength({min:6}).withMessage('El usuario es obligatorio'),
    check('password').isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('email').isEmail().withMessage('El email es obligatorio'),
    /*body("email").custom(function(value){
        db.User.findAll()
            where: {
                email: value
            }
            return false

    }).withMessage("Mail ya registrado")*/
]
 ,users.createUser); 

router.get('/logout', users.logout)

module.exports = router;