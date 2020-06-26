const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const commentsFilePath = path.join(__dirname, '../data/comment.json');
const comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));

const db = require("../database/models");
let sequelize = db.sequelize

const controller = {
	// Root - Show all products
	root: (req, res) => {

		db.Producto.findAll()
			.then(function (result) {
				let algo = result;

				res.render("products.ejs", {
					userLogged: req.session.usuarioLogueado,
					products: algo
				})

			})
			.catch(function (er) {
				console.log(er)
			})
	},
	// Detail - Detail from one product
	detail: function (req, res) {
		db.Producto.findByPk(req.params.id)
			.then(function (prod) {
				if (prod) {
					res.render("detail.ejs", {
						userLogged: req.session.usuarioLogueado,
						prod: prod,
						comments: comments
					})
				}

			})
			.catch(function (er) {
				console.log(er)
			})
	},
	// Create -  Method to store
	create: function (req, res, next) {
		db.Producto.findAll()
			.then(function (result) {

				res.render("admproducts", {
					userLogged: req.session.usuarioLogueado,
					products: result
				})
			})
			.catch(function (er) {
				console.log(er)
			})
	},
	// Update - Method to update
	store: function (req, res) {
		
		let newProduct = {
			name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price,
			medidas: req.body.medidas
		}
		
		console.log(newProduct)

        db.Producto.create(newProduct)

        res.redirect("/products/create")
    },	
	// Delete - Delete one product from DB
	destroy: (req, res) => {

		db.Producto.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(function (result) {
				res.redirect('/products/create')
			})
			.catch(function (error) {
				console.log(error)
			})
	},
	// Update - Method to update
	update: function (req, res, next) {
		console.log(req.body)
		db.Producto.update({
			name: req.body.nombre,
			stock: req.body.stock,
			price: req.body.precio,
			composicion: req.body.composicion,
			medidas: req.body.medidas,
			aclaracion: req.body.aclaracion,
			producto: req.body.tipo,
			category: req.body.categoria,
			description: req.body.descripcion
		}, {
			where: {
				id: req.params.id
			}
		})
			.then(function (result) {
				res.redirect('/products/create')
			})
			.catch(function (error) {
				console.log(error)
			})



	},
	editProd: function (req, res, next) {

		db.Producto.findByPk(req.params.id)
			.then(function (result) {
				console.log(result.name)

				res.render('form-edit-prod', {
					product: result,
					userLogged: req.session.usuarioLogueado
				})
			})
	},
	filtrarNuevos: (req, res) => {
		db.Producto.findAll({
			where: {
				category: "nuevo"
			}
		}
		)
			.then(function (products) {
				console.log(products)
				res.render("productsNuevos.ejs", {
					userLogged: req.session.usuarioLogueado,
					products: products
				})

			})
			.catch(function (er) {
				console.log(er)
			})
	},

	filtrarDestacados: (req, res) => {
		db.Producto.findAll({
			where: {
				category: "destacado"
			}
		}
		)
			.then(function (products) {
				console.log(products)
				res.render("productsNuevos.ejs", {
					userLogged: req.session.usuarioLogueado,
					products: products
				})

			})
			.catch(function (er) {
				console.log(er)
			})
	}
}

module.exports = controller;