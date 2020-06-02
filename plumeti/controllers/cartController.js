const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));


const controller = {
    root: (req, res) => {
		res.render("cart.ejs", {
			products : products,
			userLogged: req.session.usuarioLogueado
		})
	},

	contador: function(req, res, next) {
		let numero = 0;
		req.session.numero = numero;
		res.render("cart.ejs", {
			contador:numero,
			userLogged: req.session.usuarioLogueado
		})
	},
	sumar1: function(req, res, next) {
		let numero = "";
		if(typeof req.session.numero != "undefined")
		{numero = req.session.numero}
		else{numero = 0}
		numero++
		req.session.numero =numero
		res.render("cart.ejs",{
			contador:numero,
			userLogged: req.session.usuarioLogueado
		})
	},
	destroy: (req, res) => {   
		let productsQueQuedan = products.filter(function(element){
		return element.id != req.params.id
	})

	let productosModificadosJSON = JSON.stringify(products)
	fs.writeFileSync(productsFilePath,productosModificadosJSON)
	res.send(productsQueQuedan)
},
}


module.exports = controller;