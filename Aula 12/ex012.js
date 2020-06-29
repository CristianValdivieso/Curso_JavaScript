var edad = 15
console.log(`Uste tiene ${edad} anos`)
if (edad < 16){
    console.log(`No vota`)
} else if(edad < 18 || edad >= 65){
    console.log(`Voto facultativo`)
} else{
    console.log(`Voto obligatorio`)
}
