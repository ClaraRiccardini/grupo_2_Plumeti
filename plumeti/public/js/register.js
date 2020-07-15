window.addEventListener('load', function () {
    let name = document.querySelector("input#name")
    let user = document.querySelector("input#user")
    let password = document.querySelector("input#password")
    let email = document.querySelector("input#email")
 
    let form = document.querySelector("form")
 
    let validacion = document.querySelector("div#validacion > ul")
    var errores = []

    form.addEventListener("submit", function(e){
    
       if(user.value.length < 6){
         
          errores.push("USUARIO DEBE SER MAYOR A 6 CARÁCTERES")
       }
       if(password.value.length < 6){
         
          errores.push("CONTRASEÑA INCORRECTA")
       }
       if(email.value.length < 6){
        
        errores.push("EMAIL INVÁLIDO")
        
        }
         if(name.value.length < 6){
     
        errores.push("NOMBRE INVÁLIDO")
         }
         if(errores.length > 0){
            e.preventDefault()
        errores.forEach(error =>{
        validacion.innerHTML +="<li>" + error + "</li>"
         
     })
     errores = null}
  
   })
  
 })