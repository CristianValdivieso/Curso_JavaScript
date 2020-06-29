function calcular(){
function autos(){
    var valor = document.getElementById('valor')
    var mensaje = document.getElementById('msg')
    var imagen = document.getElementById('imagen')
    var imagen1 = document.getElementById('imagen1')
    var imagen2 = document.getElementById('imagen2')
    var precio = Number(valor.value)
    mensaje.innerHTML = `Autos diponibles`
    
    if(precio < 15000){
        //Mostrar autos baratos
        imagen.src = 'barato1.png'
        imagen1.src = 'barato2.png'
        imagen2.src = 'barato3.png'
    } else if(precio > 15000 && precio >= 35000){
        //Mostrar autos medios
        imagen.src = 'medio1.png'
        imagen1.src = 'medio2.png'
        imagen2.src = 'medio3.png'
    } else {
        //Mostrar autos caros
        imagen.src = 'costoso1.png'
        imagen1.src = 'costoso2.png'
        imagen2.src = 'costoso3.png'
    }
}
}