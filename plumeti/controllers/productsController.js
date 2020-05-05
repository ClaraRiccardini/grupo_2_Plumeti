const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const commentsFilePath = path.join(__dirname, '../data/comment.json');
const comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));

//Estan viniendo todos los productos?
//console.log(products)

//Estan viniendo todos los comentarios?
//console.log(comments)
const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render("products.ejs", {
			products : products,
		})
	},


	// Detail - Detail from one product
	detail: function (req, res) {
        let prod = products.find(function(element){
            return element.id == req.params.id
		})
		//Esta viniendo el producto que llamo?
		//console.log(prod)

        if(prod) {
			res.render("detail.ejs", {
			prod:prod,
			comments:comments});
        }
	},
	
	/*creatComment:(req,res,next)=>		
	{let ultimoComentario=comments[comments.length-1]
	let nuevoComentario ={}
	nuevoComentario.id=ultimoComentario.id+1
	nuevoComentario.pregunta=req.body.textarea
	nuevoComentario.respuesta=""

	comments.push(nuevoComentario)

	let commentsModificadosJSON = JSON.stringify(comments)
	fs.appendFileSync(commentsFilePath,commentsModificadosJSON)},*/
    
	// Create -  Method to store
	store: function(req, res, next) {
		res.render('admproducts');
	},

	// Update - Form to edit
	edit: (req, res, next) => {
        
	},
	// Update - Method to update
	update: function(req, res, next) {
		//Do the magic

		//res.redirect('')
	},

	// Delete - Delete one product from DB
	destroy : function(req, res, next) {
		//Do the magic

		//res.redirect('')
	},
	// Update - Method to update
	edity: (req, res, next) => {
        
	},
	editProd: function(req, res, next) {

	}
};

module.exports = controller;