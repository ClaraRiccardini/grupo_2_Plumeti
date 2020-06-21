const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = require("../database/models");
let sequelize = db.sequelize


const controller = {
  root: (req, res) => {
    db.Producto.findAll({
      where:{ 
       category:"nuevo"
      }
    })
    console.log(nuevo)
      .then((nuevo) => {
        db.Producto.findAll({
          where:{
            category:"destacado"
          }
        })
        console.log(destacado)
      })
      .then((destacado) => {
        res.render("home", {
          userLogged: req.session.usuarioLogueado,
          nuevo: nuevo,
          destacado: destacado,

        }
        )
      }
      
    )}



}

module.exports = controller;