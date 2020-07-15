window.addEventListener("load", function(){
    let apiKey = "TxL7oMoFlKuN0aGzoprr99ZZ3zjXAxCa"
    fetch("https://api.giphy.com/v1/gifs/search?api_key=TxL7oMoFlKuN0aGzoprr99ZZ3zjXAxCa&q=mask diy handkerchief&limit=5&offset=0&rating=g&lang=en")
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            console.log(result.data.length)
            let fila = document.querySelector('.row');
            console.log(result.data[0].images.original.url)
            for (var i = 1; i < result.data.length; i++) {
                fila.innerHTML += 
                    '<div class="col-3"><img class="w-100" src="'+result.data[i].images.original.url+'"></div>'
                
            }
        })
        .catch(function (error) {
            console.log(error)
        })



})

