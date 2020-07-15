const fs = require('fs');
const path = require('path');


const db = require("../database/models");
let sequelize = db.sequelize

const { check, validationResult, body } = require('express-validator');
//const bcrypt = require('bcryptjs');


const controller = {
    // Root - Show all products
    root: function (req, res, next) {
        res.render("personal-data", {
            userLogged: req.session.usuarioALoguearse,
        }

        );
    },
    record: function (req, res, next) {
        res.render('record', {
            userLogged: req.session.usuarioALoguearse,

        });
    
    },
    password: function (req, res, next) {
        res.render('password', {
            userLogged: req.session.usuarioALoguearse,

        })},

    avatar: function (req, res) {
        console.log(req.files[0].filename)
        db.User.update({
            avatar: req.files[0].filename
        }, {
            where: {
                id: req.session.usuarioALoguearse.id
            }
        })
            .then(function (result) {
                res.redirect('/profile')
            })
            .catch(function (error) {
                console.log(error)
            })

    }

}
module.exports = controller;