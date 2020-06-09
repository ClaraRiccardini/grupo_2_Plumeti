const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const commentsFilePath = path.join(__dirname, '../data/comment.json');
const comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));

const db = require("../database/models");
let sequelize = db.sequelize

//Estan viniendo todos los productos?
//console.log(products)

//Estan viniendo todos los comentarios?
//console.log(comments)
const controller = {
	// Root - Show all products


	root: (req, res) => {
		res.render("products.ejs", {
			userLogged: req.session.usuarioLogueado,
			products: products
		})
	},


	// Detail - Detail from one product
	detail: function (req, res) {
		let prod = products.find(function (element) {
			return element.id == req.params.id
		})
		//Esta viniendo el producto que llamo?
		//console.log(prod)

		if (prod) {
			res.render("detail.ejs", {
				userLogged: req.session.usuarioLogueado,
				prod: prod,
				comments: comments
			})
		}
	},

	// Create -  Method to store
	store: function (req, res, next) {
		let productos = products;
		res.render('admproducts', {
			productos: productos,
			userLogged: req.session.usuarioLogueado
		});
	},

	// Update - Method to update
	update: function (req, res, next) {
		products.forEach((prod) => {
			if (prod.id == req.params.id) {
				prod.name = req.body.nombre;
				prod.stock = req.body.stock;
				prod.price = req.body.precio;
				prod.composicion = req.body.composicion;
				prod.medidas = req.body.medidas;
				prod.aclaracion = req.body.aclaracion;
				prod.producto = req.body.tipo;
				prod.category = req.body.categoria;
				prod.description = req.body.descripcion;
			}
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products));

		let productos = products;
		res.render('admproducts', {
			productos: productos,
			userLogged: req.session.usuarioLogueado
		});
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let productsQueQuedan = products.filter(function (element) {
			return element.id != req.params.id
		})

		let productosModificadosJSON = JSON.stringify(productsQueQuedan)
		fs.writeFileSync(productsFilePath, productosModificadosJSON)

		let productos = productsQueQuedan;
		res.render('admproducts', {
			productos: productos,
			userLogged: req.session.usuarioLogueado
		});
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
	},

	creatComment: (req, res, next) => {
		//Estan viniendo todos los comentarios?
		//console.log(comments)

		let ultimoComment = comments[comments.length - 1]
		let nuevoComment = {}
		nuevoComment.id = ultimoComment.id + 1
		nuevoComment.pregunta = req.body.pregunta

		products.push(nuevoComment)
		console.log(nuevoComment)

		let commentsModificadosJSON = JSON.stringify(comments)
		fs.writeFileSync(commentsFilePath, commentsModificadosJSON)
		res.render("/detail",{
			userLogged: req.session.usuarioLogueado
		})


	},

	// Create -  Method to store
	store: function (req, res, next) {
		let productos = products;
		res.render('admproducts', {
			productos: productos,
			userLogged: req.session.usuarioLogueado
		});
	},

	// Update - Method to update
	update: function (req, res, next) {
		products.forEach((prod) => {
			if (prod.id == req.params.id) {
				prod.name = req.body.nombre;
				prod.stock = req.body.stock;
				prod.price = req.body.precio;
				prod.composicion = req.body.composicion;
				prod.medidas = req.body.medidas;
				prod.aclaracion = req.body.aclaracion;
				prod.producto = req.body.tipo;
				prod.category = req.body.categoria;
				prod.description = req.body.descripcion;
			}
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products));

		let productos = products;
		res.render('admproducts', {
			productos: productos,
			userLogged: req.session.usuarioLogueado
		});
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let productsQueQuedan = products.filter(function (element) {
			return element.id != req.params.id
		})

		let productosModificadosJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productosModificadosJSON)
		res.send(productsQueQuedan)
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
		let prod = products.filter(function (prod) {
			return prod.id == req.params.id
		})

		res.render('form-edit-prod', {
			product: prod,
			userLogged: req.session.usuarioLogueado
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
	},
	algo: function (req, res) {

		db.Producto.sequelize.query("SELECT * FROM productos")
		.then(function(result){
			console.log(result)
		})
		.catch(function(er){
			console.log(er)
		})
		

	},



};

module.exports = controller;
