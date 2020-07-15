var express = require('express');
var router = express.Router();
var main = require('../controllers/mainController')

/* GET home page. */
router.get('/', main.root);
router.get("/how", main.how);
router.get('/home', main.root);





module.exports = router;
