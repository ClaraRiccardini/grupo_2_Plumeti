const path = require("path")
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));


module.exports = {
    auth: (req, res, next) => {
        if (req.session.usuarioLogueado != undefined) {
            next()
        } else {
            res.send('Esta pagina es solo para usuarios')
        }
    },
    guest: (req, res, next) => {
        if (req.session.usuarioLogueado == undefined) {
            next()
        } else {
            res.send('Ya iniciaste sesion')
        }
    },
    recordame: function(req,res, next){
        if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
            for( var i = 0; i < users.length; i++){
                if(users[i].id == req.cookies.recordame){
                    var usuarioALoguearse = users[i];
                    break;
                }
            }

            req.session.usuarioLogueado = usuarioALoguearse
        }
        next()
    }
}