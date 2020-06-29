function cargar(){
    var mensaje = window.document.getElementById('mensaje')
    var img = window.document.getElementById('imagem') 
    var msg2 = window.document.getElementById('msg')
    var fecha = new Date()
    //var hora = fecha.getHours()
    hora = 14
    mensaje.innerHTML = (`<strong>Horario: ${hora} horas</strong>`)

    if (hora >= 0 && hora < 12){
        // buenos dias
        msg2.innerHTML = 'Buenos días!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#ebc724'
    } else if(hora >= 12 && hora <= 18){
        // buenas tardes
        msg2.innerHTML = 'Buenas tardes!'
        img.src = 'fototarde.png'
        document.body.style.background = '#f69814'
    } else {
        // buenas noches
        msg2.innerHTML = 'Buenas noches!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#05295a'
        
    }

}
