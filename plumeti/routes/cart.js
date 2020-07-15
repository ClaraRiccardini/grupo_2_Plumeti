var express = require('express');
var router = express.Router();
const multer = require('multer');

var cartController = require('../controllers/cartController');

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/img/avatars');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({storage:storage});

router.get('/', cartController.root);
router.post('/', cartController.add)
router.delete('/delete/:id', cartController.delete)


//Eliminar producto 
//router.delete('/delete/:id', upload.any(),cartController.destroy); /* DELETE - Delete from DB */

module.exports = router;