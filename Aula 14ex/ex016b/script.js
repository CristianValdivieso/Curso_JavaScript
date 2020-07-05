function contar(){
    var txtin = document.getElementById('txtin')
    var txtfin = document.getElementById('txtfin')
    var txtpaso = document.getElementById('txtpaso')
    var res = document.getElementById('res')

    if (txtin.value.length==0 || txtfin.value.length==0  || txtpaso.value.length==0){
        alert('Ingrese datos en los recuadros')
    } else{
        res.innerHTML = 'Contando... <br>'
        var ini = Number(txtin.value)
        var fin = Number(txtfin.value)
        var paso = Number(txtpaso.value)

        if(ini == fin){
            alert('Ingrese valores diferentes')
        }
        if(paso <= 0){
            alert('Será considerado el paso con valor 1')
            paso = 1
        }
        if(ini < fin){
            for(c = ini; c <= fin; c += paso){
            res.innerHTML += `${c} ` 
        }
        } else{
            for(c = ini; c >= fin; c -= paso){
            res.innerHTML += `${c} `
        }
        }    
        res.innerHTML += 'Fin!'   
    }  
}