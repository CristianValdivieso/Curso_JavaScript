function analizar(){
    var nombre = document.getElementById('name')
    var resultado = document.getElementById('res')
    var formestcivil = document.getElementsByName('radcivil')
    var estcivil = ''
    var imagen = document.createElement('img')
    imagen.setAttribute('id', 'foto')

    if (formestcivil[0].checked){
        estcivil = 'soltero(a)'
        imagen.setAttribute('src', 'soltero.png')
    } else if(formestcivil[1].checked){
        estcivil = 'casado(a)'
        imagen.setAttribute('src', 'casado.png')
    } else{
        estcivil = 'divorciado(a)'
        imagen.setAttribute('src', 'divorciado.png')
    }

    resultado.innerHTML = `Hola, ${nombre}. Usted es ${estcivil}`
    resultado.appendChild(imagen)
}