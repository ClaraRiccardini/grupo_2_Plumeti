const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
var profileController = require('../controllers/profileController');

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/avatars/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({storage:storage});


router.get('/', upload.any(), profileController.root);
router.post('/', upload.any(), profileController.avatar);

router.get('/personal-data', profileController.root);

router.get('/record', profileController.record);

router.get('/password', profileController.password);


module.exports = router