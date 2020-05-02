var express = require('express');
var router = express.Router();
const multer = require('multer');

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

//Creacion de producto mediante formulario
router.post('/products', productsController.edity);

//Detalle de un producto particular
router.get('/detail/:id', productsController.detail);

//Editar un producto mediante formulario
router.put('/:id', upload.any(), productsController.update);

//Eliminar producto 
router.delete('/:id', productsController.destroy);

//formulario de edicion de productos
router.get('/:id/edit', upload.any(), productsController.editProd);

//Formulario para creacion de productos
router.get('/create', upload.any(), productsController.store);

module.exports = router;
