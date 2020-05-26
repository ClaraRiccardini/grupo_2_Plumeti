var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController')
var usersMiddleware = require('../middlewares/usersMiddleware')
/* GET users listing. */

router.get('/login', usersMiddleware.login, users.login);
router.post('/login', users.processLogin);
router.get('/register', users.register);
router.post('/register', users.create);

module.exports = router;
