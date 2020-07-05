function tabla(){
    let txtn = document.getElementById('txtnum')
    //let sel = document.getElementById('sel')
    let res = document.getElementById('tabla')

    if(txtn.value.length == 0){
        window.alert('Ingrese un valor')
        
    } else{
        let n = Number(txtn.value)
        res.innerHTML = ''                          //limpia la tabla, impide que el nuevo cálculo vaya abajo
        for (let c = 0; c <= 10; c++){
        var m = n * c
        res.innerHTML += `${n} x ${c} = ${m} <br>`
    }
    
    }
}  