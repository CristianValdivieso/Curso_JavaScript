function verificar(){
    var data = new Date()             //se recupera la fecha actual
    var ano = data.getFullYear()      // se recupera el ano actual. FULLYEAR pega los 4 dígitos del ano
    var anodelformulario = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    //Abajo, se verifica si la largura del valor del ano es igual a cero O si es mayor al ano actual
    if (anodelformulario.value.lengt == 0 || anodelformulario.value > ano){ //el ANO representa la fecha actual del sistema
        window.alert('[ERROR], ingrese nuevamente sus datos')
    } else{
        var generodelformulario = document.getElementsByName('radgenero')
        var edad = ano - Number(anodelformulario.value)
        var género = ''
        var imagen = document.createElement('img')
        imagen.setAttribute('id', 'foto')
        if (generodelformulario[0].checked){
            género = 'Hombre'
            if (edad >= 0 && edad < 10){
                //NINO
                imagen.setAttribute('src', 'n1.png')
            } else if (edad < 21){
                //JOVEN
                imagen.setAttribute('src', 'j1.png')
            } else if (edad < 50){
                //ADULTO
                imagen.setAttribute('src', 'a1.png')
            } else{
                //ANCIANO
                imagen.setAttribute('src', 'i1.png')
            }
        } else if(generodelformulario[1].checked){
            género = 'Mujer'
            if (edad >= 0 && edad < 10){
                //NINO
                imagen.setAttribute('src', 'n2.png')
            } else if (edad < 21){
                //JOVEN
                imagen.setAttribute('src', 'j2.png')
            } else if (edad < 50){
                //ADULTO
                imagen.setAttribute('src', 'a2.png')
            } else{
                //ANCIANO
                imagen.setAttribute('src', 'i2.png')
            }
        }
        resultado.style.textAlign = 'center' //centraliza el texto por medio de JS
        resultado.style.color = 'white'
        resultado.innerHTML= `Detectamos ${género} de ${edad} anos`
        resultado.appendChild(imagen)
    }
}
