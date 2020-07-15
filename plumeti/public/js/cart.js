window.addEventListener('load', function () {

    let botonFinalizar = document.querySelector("#botonFinalizar")

    let cantidad = document.querySelectorAll(".cantidad")
    let mas = document.querySelectorAll(".mas")
    let menos = document.querySelectorAll(".menos")
    let precio = document.querySelectorAll(".precio")
    let total = document.querySelector(".total")
    let contador = 1
    let lista = precio.forEach(pre => { return parseInt(pre) })

    console.log(parseInt(precio[0].innerHTML))

    cantidad.forEach(cant => {
        cant.innerHTML = contador
        mas.forEach(sumar => {
            sumar.addEventListener("click", function (e) {
                e.preventDefault()
                contador++
    
                cant.innerHTML= contador
                    precio.forEach(pre => {
                        pre.innerHTML = parseInt(pre.innerHTML) + 810
                    })
                
            })
        })
        menos.forEach(restar => {
            restar.addEventListener("click", function (e) {
                e.preventDefault()
                contador--
                if (contador <= 1) {
                    alert("no puedes comprar cantidad negativa")
                    contador = 1
                }
    
    cant.innerHTML= contador
                    precio.forEach(pre => {
                        pre.innerHTML = parseInt(pre.innerHTML) - 810
                    })
    
                
            })
    
    })
var totalFinal = 0
   
   precio.forEach(pre =>{
       return totalFinal+=parseInt(pre)

   })
   console.log(parseInt(totalFinal))
   total.innerHTML = totalFinal
        botonFinalizar.addEventListener("click", function () {
            let mensaje = alert("Gracias por comprar en Plumeti!")
        })


    })
});