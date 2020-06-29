function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){ //el value.l verifica si la caja está vacía, sin datos
        window.alert('[ERROR] Verifique los datos')
    } else{
        var fsex = document.getElementsByName('radsex')
        var edad = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'Hombre'
            if (edad >= 0 && edad < 5){
                // bebe
                img.setAttribute('src', 'bebe.png')
            } else  if (edad < 12){
                // nino
                img.setAttribute('src', 'nino.png')
            } else if (edad < 21){
                //joven2
                img.setAttribute('src', 'joven2.png')
            } else if (edad < 45){
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else{
                //anciano
                img.setAttribute('src', 'anciano.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mujer'
            if (edad >= 0 && edad < 5){
                // bebe
                img.setAttribute('src', 'bebe.png')
            } else  if (edad < 12){
                // nina
                img.setAttribute('src', 'nina.png')
            } else if (edad < 21){
                //joven1
                img.setAttribute('src', 'joven1.png')
            } else if (edad < 45){
                //adulta
                img.setAttribute('src', 'adulta.png')
            } else{
                //anciana
                img.setAttribute('src', 'anciana.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} con ${edad} anos`
        res.appendChild(img)
    }


}