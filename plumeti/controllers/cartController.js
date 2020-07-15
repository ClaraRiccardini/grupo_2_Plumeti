const fs = require('fs');
const path = require('path');

const db = require("../database/models");
let sequelize = db.sequelize

const controller = {
	root: (req, res) => {
		db.Cart.findOne(
			{
				where: { user_id: req.session.usuarioALoguearse.id },
				include: ["productos"]
			}

		)
			.then(function (products) {
				if(products != undefined){
				let numeros = [];
				
				for (var i = 0; i < products.productos.length; i++) {

					numeros.push(products.productos[i].price)
				}
				let totalPrice;
				let numero
				if (numeros === []){
					return totalPrice = 0
				}else{
					numero = 0
					products.productos.forEach (result => {
   					numero += result.price
					});
				};

				//console.log(req.session.usuarioALoguearse)
				//console.log(totalPrice)

				console.log("aca viene los products")
				console.log(products.productos)
				res.render("cart.ejs", {
					userLogged: req.session.usuarioALoguearse,
					products: products.productos,
					totalPrice: numero
				})}else{
					res.render("cart", {
						userLogged:req.session.usuarioALoguearse,
						products: undefined,
						totalPrice: undefined
						
					})
				}

			})
			.catch(function (er) {
				console.log(er)
			})
	},
	add: function (req, res, next) {

		//console.log(req.session.usuarioALoguearse.id)

		db.Cart.findAll({

		where: { user_id: req.session.usuarioALoguearse.id }
		}).then(function (result) {

			db.Cart_product.create(
				{
					product_id: req.body.id,
					cart_id: result[0].id
				})
		}
		).then(
			res.redirect("/cart")
		)

	},
	delete: function (req, res, next) {
		db.Cart.findAll({
			where: {user_id: req.session.usuarioALoguearse.id }
		}).then(function (result) {
			db.Cart_product.destroy({
				where: {
					product_id: req.params.id
				}
			})
				.then(function (result) {
					res.redirect('/cart')
				})
				.catch(function (error) {
					console.log(error)
				})

		}
		)
	}
}


module.exports = controller;