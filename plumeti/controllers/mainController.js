const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = require("../database/models");
let sequelize = db.sequelize

const controller = {
  root: (req, res) => {
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

  },
  how: (req,res) => {
    res.render("howTo", {userLogged: req.session.usuarioALoguearse})
  }
}

module.exports = controller;