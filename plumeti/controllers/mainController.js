const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    root: function(req, res, next){
        let destacado = products.filter(function(prod){
           if (prod.category == "destacado")
           {return prod}
        })
        let nuevo = products.filter(function(prod){
            return prod.category == 'nuevo'
        })

        res.render('home', {
            destacado: destacado,
            nuevo: nuevo,
            userLogged: req.session.usuarioLogueado
        })
    }
};

module.exports = controller;