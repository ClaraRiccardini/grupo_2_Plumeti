window.addEventListener('load', function () {
   let user = document.querySelector("input#user")

    let password = document.querySelector("input#password")

   let form = document.querySelector("form")

   let validacion = document.querySelector("div#validacion")

   form.addEventListener("submit", function(e){

      if(user.value.length < 6){
         e.preventDefault()
         validacion.innerHTML = "USUARIO DEBE SER MAYOR A 6 CARÁCTERES"
      }
      if(password.value.length < 6){
         e.preventDefault()
         validacion.innerHTML = "CONTRASEÑA INCORRECTA"
      }

    
  })
})