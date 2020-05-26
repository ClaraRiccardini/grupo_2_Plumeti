const path = require("path")
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));


module.exports = {
    login : function(req,res,next){
            let usuario = req.body.usuario;
            let contrasenia = req.body.contrasenia
            
            let user = users.find(function (us) {
                return us.usuario == usuario && us.contrasenia == contrasenia
            })
            

        next()
    }
}