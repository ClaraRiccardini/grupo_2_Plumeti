const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = require("../database/models");
let sequelize = db.sequelize

const {
    check,
    validationResult,
    body
} = require('express-validator');
//const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));


const controller = {
    // Root - Show all products
    root: function (req, res, next) {
        res.render('products', {
            userLogged: req.session.usuarioLogueado
        });
    },
    register: function (req, res, next) {
        res.render('register', {
            userLogged: req.session.usuarioLogueado
        })
    },
    creatUser: function (req, res, next) {

        var errors = validationResult(req);
        if (errors.isEmpty()) {

            console.log(req.body)

            req.session.usuarioLogueado = nuevoUsuario
            //res.redirect('/home')
            res.send(req.session.usuarioLogueado)

        }


    },
    login: function (req, res, next) {
        res.render('login', {
            userLogged: req.session.usuarioLogueado
        })
    },
    processLogin: function (req, res) {
        let {
            check,
            validationResult,
            body
        } = require('express-validator');

        var errors = validationResult(req);

        if (errors.isEmpty()) {

            for (var i = 0; i < users.length; i++) {
                if (users[i].usuario == req.body.usuario) {
                    //if(bcrypt.compareSync(req.body.password == userLog[i].contrasenia)){
                    if (req.body.contrasenia == users[i].contrasenia) {
                        var usuarioALoguearse = users[i];
                        break;
                    }
                }
            }

            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [{
                        msg: 'Credenciales inválidas'
                    }],
                    userLogged: req.session.usuarioLogueado
                })
            }


            let destacado = products.filter(function (prod) {
                if (prod.category == "destacado") {
                    return prod
                }
            })
            let nuevo = products.filter(function (prod) {
                return prod.category == 'nuevo'
            })

            req.session.usuarioLogueado = usuarioALoguearse
            let loggedUser = req.session.usuarioLogueado;


            let tiempoExpiracion = 60 * 1000 * 1000 * 1000 * 1000;

            if (req.body.recordame != undefined) {
                res.cookie('recordame', usuarioALoguearse.id, {
                    maxAge: tiempoExpiracion
                })
            }


            res.render('home', {
                destacado: destacado,
                nuevo: nuevo,
                userLogged: loggedUser
            })
        } else {
            return res.render('login', {
                errors: errors.errors
            })
        }
    },
    logout: function (req, res) {
        req.session.usuarioLogueado = undefined
        res.redirect('/home')
    }
};

module.exports = controller;