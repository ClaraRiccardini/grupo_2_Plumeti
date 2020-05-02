const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const controller = {
	// Root - Show all products
	root: function(req, res, next){
		res.render('products', { title: 'Express' });   
	}
};

module.exports = controller;