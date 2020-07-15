const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = require("../database/models");
let sequelize = db.sequelize

const { check, validationResult, body } = require('express-validator');
//const bcrypt = require('bcryptjs');


const controller = {
    // Root - Show all products
    root: function (req, res, next) {
        res.render('products', {
            userLogged: req.session.usuarioALoguearse
        });
    },
    register: function (req, res, next) {
        res.render('register', {
            userLogged: req.session.usuarioALoguearse
        })
    },
    createUser: function (req, res) {

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let newUser = {
                name: req.body.name,
                user: req.body.user,
                password: req.body.password, 
                email: req.body.email
            };

            console.log(newUser)
            db.User.create(newUser)
            req.session.usuarioALoguearse = newUser


            db.Product.findAll()
                .then(products => {

                    let destacado = products.filter(prod => {
                        return prod.category == 'destacado'
                    })

                    let nuevo = products.filter(prod => {
                        return prod.category == 'nuevo'
                    })

                    res.render("home", {
                        userLogged: req.session.usuarioALoguearse,
                        nuevo: nuevo,
                        destacado: destacado,
                    })
                })
        } else {
            return res.render("register", {
                errors: errors.errors,
                userLogged: undefined
            })
        }


    },


    login: function (req, res, next) {
        res.render('login', {
            userLogged: req.session.usuarioLogueado
        })
    },

    processLogin: function (req, res) {

        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            db.User.findOne({
                where: { user: req.body.user }
            }).then(result => {
                console.log(result)
                req.session.usuarioALoguearse = result
                var usuarioALoguearse = req.session.usuarioALoguearse

                if (result == null) {
                    res.render('login', {
                        errors: [{
                            msg: 'Usuario inexistente'
                        }],
                        userLogged: undefined
                    })
                }
                
                if (bcrypt.compareSync(req.body.password, result.password)) {
                    usuarioALoguearse = result
                    console.log(result)
                 }
                    if (usuarioALoguearse == undefined) {
                        res.render('login', {
                            errors: [{
                                msg: 'Credenciales inválidas'
                            }],
                            userLogged: undefined
                        })
                    }
                //console.log("usuario a loguearse " + usuarioALoguearse)
                let destacado
                let nuevo
                db.Product.findAll()
                    .then(products => {
    
                        destacado = products.filter(prod => {
                            return prod.category == 'destacado'
                        })
    
                        nuevo = products.filter(prod => {
                            return prod.category == 'nuevo'
                        })
                            
                let tiempoExpiracion = 60 * 1000 * 1000 * 1000 * 1000;
    
                if (req.body.recordame != undefined) {
                    res.cookie('recordame', usuarioALoguearse.id, {
                        maxAge: tiempoExpiracion
                    })
                }
    
                res.render('home', {
                    destacado: destacado,
                    nuevo: nuevo,
                    userLogged: result
                })
                    })

    

            })

        } else {
            return res.render('login', {
                errors: errors.errors,
                userLogged: undefined
            })
        }

    },

    logout: function (req, res) {
    req.session.usuarioALoguearse = undefined
        res.redirect("/home")
    }

}
module.exports = controller;