const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: function(req, res, next){
		res.render('products', { title: 'Express' });   
	},

	// Detail - Detail from one product
	detail: function(req, res, next) {
		res.render('Detail', { title: 'Express' });
	},
    
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