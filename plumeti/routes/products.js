var express = require('express');
var router = express.Router();
const multer = require('multer');
var usersMiddleware = require('../middlewares/usersMiddleware')

var productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/img/avatars');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({storage:storage});

// listado de productos
router.get('/', productsController.root);

//Detalle de un producto particular
router.get('/detail/:id', productsController.detail);

//Filtrado categoria nuevo
router.get('/nuevo', productsController.filtrarNuevos);
router.get('/destacado', productsController.filtrarDestacados);

//Formulario para creacion de productos
router.get('/create', productsController.create);  //usersMiddleware.auth

//Creacion de producto mediante formulario
router.post('/create', upload.any(), productsController.store);

//formulario de edicion de productos
router.get('/:id/edit',  productsController.editProd); //usersMiddleware.auth, upload.any(),

//Editar un producto mediante formulario
router.put('/edit/:id', productsController.update);

//Eliminar producto 
router.delete('/:id', productsController.destroy); /* DELETE - Delete from DB */




module.exports = router;
