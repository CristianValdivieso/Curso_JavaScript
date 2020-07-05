function tabla(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('tabsel')
    
    if(txtnum.value.length == 0){
        window.alert('Ingrese un valor numérico')
    } else{
        var n = Number(txtnum.value)
        tab.innerHTML = ''
        for(var c = 0; c <= 10; c++){
            var item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        } 
    }
}