const fs = require('fs');
const path = require('path');
//const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
//const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const controller = {
    // Root - Show all products
    root: function (req, res, next) {
        res.render('products', { title: 'Express' });
    },
    login: function (req, res, next) {
        res.render('login')
    },
    register: function (req, res, next) {
        res.render('register')
    },
    create: function (req, res, next) {
        let nombre = req.body.nombre;
        let usuario = req.body.usuario;
        let contrasenia = req.body.contrasenia;
        let email = req.body.email;

        let newUser = {
            nombre: nombre,
            usuario: usuario,
            contrasenia: contrasenia,
            email: email
        }

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users))

        //console.log(dest)
        res.redirect('/')
    },
    processLogin: function(req, res){
        // Creamos la variable errores
        let errors = validationResult(req);
        
        //Verificamos si hay errores
        if(errors.isEmpty()){
            //si no hay errores
            let usersFile = fs.readFileSync('/data/users.json', {encoding: 'utf-8'});
            //definivimos la variable
            let users;
            //revisamos si el archivo está vacío
            if(usersFile == ""){
                users = [];
            } else {
                users = JSON.parse(usersFile);
            };
            
            //verificamos e-mail y contraseña
           let userToLogin
           console.log(req.body);
            for(var i = 0; i<users.length; i++){
                if(req.body.email == users[i].email){
                    if(bcrypt.compareSync(req.body.password, users[i].contrasenia)){
                        userToLogin = users[i];
                        //console.log(userToLogin);
                        break;
                    }
                }
            }

           // En caso de que el usuario esté indefinido hacemos nuestro propio mensaje de error
            if(userToLogin == undefined){
                res.render('login', {
                    title:'login',
                    errors: [
                    {msg: 'Credenciales inválidas'}
                ]});
            }

            //aplicamos session acá con el usuario encontrado
            //para que se puede "mantener vivo" la ejecución debería terminar en algún lado
            req.session.userLogged = userToLogin;

            //creando la cookie para la casilla "recuérdame"
            if(req.body.rememberMe != undefined){
                res.cookie('rememberMe', userToLogin.email, {maxAge: 60000})
            }
            console.log(req.session.userLogged)
            res.render('profile',{
                nombre: req.session.userLogged.nombre,
                avatar: req.session.userLogged.avatar,
                email: req.session.userLogged.email,

            });

        } else {
            res.render('login', {
                errors: errors.errors,
                title: "LOGIN"
            })
        }

    },



};

module.exports = controller;