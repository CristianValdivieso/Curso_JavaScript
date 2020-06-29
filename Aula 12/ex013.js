// AQUÍ ESTAMOS VIENDO CONDICIONES ANINADAS

var ahora = new Date()
var hora = ahora.getHours()
console.log(`Son exactamente las ${hora} horas`)
if (hora < 12) {
    console.log(`Buenos días`)
} else if (hora <= 18){
    console.log(`Buenas tardes`)
} else{
    console.log(`Buenas noches`)
}