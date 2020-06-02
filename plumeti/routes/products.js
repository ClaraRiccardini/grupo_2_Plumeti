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

// Agregar como segundo parametro a las rutas post 'upload.any()'


// listado de productos
router.get('/', productsController.root);
//router.post('/detail/:id', productsController.creatComment);

//Creacion de producto mediante formulario
router.post('/products', productsController.edity);

//Detalle de un producto particular
router.get('/detail/:id', productsController.detail);
router.post('/detail:id',upload.any(), productsController.creatComment);


//Filtrado categoria nuevo
router.get('/nuevo', productsController.filtrarNuevos);
router.get('/destacado', productsController.filtrarDestacados);


//Eliminar producto 
router.delete('/:id', productsController.destroy); /* DELETE - Delete from DB */


//formulario de edicion de productos
router.get('/:id/edit', usersMiddleware.auth, upload.any(), productsController.editProd);

//Editar un producto mediante formulario
router.put('/:id', upload.any(), productsController.update);

//Formulario para creacion de productos
router.get('/create', usersMiddleware.auth, upload.any(), productsController.store);


module.exports = router;
