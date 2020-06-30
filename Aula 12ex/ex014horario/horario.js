function cargar(){
    var mensaje = window.document.getElementById('mensaje')
    var img = window.document.getElementById('imagem') 
    var msg2 = window.document.getElementById('msg')
    var fecha = new Date()
    //var hora = fecha.getHours()
    hora = 10
    mensaje.innerHTML = (`<strong>Horario: ${hora} horas</strong>`)

    if (hora >= 0 && hora < 12){
        // buenos dias
        msg2.innerHTML = 'Buenos días!'
        img.src = 'fotomanha.png'
        document.body.style.background = "url('https://www.osmais.com/wallpapers/201211/casinha-praia-wallpaper.jpg') no-repeat"
        document.body.style.backgroundSize = 'cover'
    } else if(hora >= 12 && hora <= 18){
        // buenas tardes
        msg2.innerHTML = 'Buenas tardes!'
        img.src = 'fototarde.png'
        document.body.style.background = "url('https://s2.best-wallpaper.net/wallpaper/1920x1080/1311/Landscape-nature-autumn-trees-yellow-leaves-blue-sky_1920x1080.jpg')no-repeat"
        document.body.style.backgroundSize = 'cover'
    } else {
        // buenas noches
        msg2.innerHTML = 'Buenas noches!'
        img.src = 'fotonoite.png'
        document.body.style.background = "url('https://images8.alphacoders.com/851/thumb-1920-851579.jpg') no-repeat"
        document.body.style.backgroundSize = 'cover'
    }
}
