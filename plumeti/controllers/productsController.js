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
			.then(function (result) {

				if (result) {
					res.render("detail.ejs", {
						userLogged: req.session.usuarioLogueado,
						prod: result,
						comments: comments
					})
				}

			})
			.catch(function (er) {
				console.log(er)
			})
	},
	// Create -  Method to store
	store: function (req, res, next) {
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
	// Delete - Delete one product from DB
	destroy: (req, res) => {

		db.Producto.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(function (result) {
				res.redirect('/admproducts')
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
				res.render("admproducts", {
					userLogged: req.session.usuarioLogueado,
					products: result
				})
			})
			.catch(function (error) {
				console.log(error)
			})



	},
	// Update - Method to update
	edity: (req, res, next) => {
		let nombre = req.body.nombre;
		let precio = req.body.precio;
		let descripcion = req.body.descripcion;
		let stock = req.body.stock;
		let dimensiones = req.body.dimensiones;

		let productoNuevo = {
			nombre: nombre,
			precio: precio,
			descripcion: descripcion,
			stock: stock,
			dimensiones: dimensiones,
		}

		products.push(productoNuevo);
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
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
	filtrarNuevos: function (req, res) {
		let productsCategoria = products.filter(function (element) {
			return element.category == "nuevo"
		})
		//Esta viniendo el producto que llamo?
		//console.log(productsNuevos)
		if (productsCategoria) {
			res.render("productsNuevos.ejs", {
				productsCategoria: productsCategoria,
				userLogged: req.session.usuarioLogueado
			});
		}
	},
	filtrarDestacados: function (req, res) {
		let productsCategoria = products.filter(function (element) {
			return element.category == "destacado"
		})
		//Esta viniendo el producto que llamo?
		//console.log(productsNuevos)

		if (productsCategoria) {
			res.render("productsNuevos.ejs", {
				productsCategoria: productsCategoria,
				userLogged: req.session.usuarioLogueado
			});
		}
	}
}

module.exports = controller;