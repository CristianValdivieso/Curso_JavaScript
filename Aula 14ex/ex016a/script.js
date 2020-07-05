function ccontar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfin = document.getElementById('txtfin')
    var txtpaso = document.getElementById('txtpaso')
    var contar = document.getElementById('contar')

    if (txtinicio.value.length == 0 || txtfin.value.length == 0 || txtpaso.value.length == 0){
        window.alert('[ERROR] Ingrese los datos faltantes')
    } else {
        contar.innerHTML = 'Contando: <br>'
        var inicio = Number(txtinicio.value)
        var fin = Number(txtfin.value)
        var paso = Number(txtpaso.value)

        if (paso <= 0){
            window.alert('Paso inválido!')
            window.alert('Será considerado el valor 1')
            paso = 1
        }
        if(inicio < fin){
            for(var c = inicio; c <= fin; c += paso){
                contar.innerHTML += `${c} \u{1F923}`
            } 
        } else{
            for (var c = inicio; c >= fin; c -= paso){
                contar.innerHTML += `${c} \u{1F643}` 
            }
        }
        contar.innerHTML += `Fin`

        
    }

}