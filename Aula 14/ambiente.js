console.log('Va a comenzar...')
for (var c = 1; c <= 6; c++){
    console.log(c)
}
console.log('FIM')

function factorialRec(n){
    if (n === 0) return 1
    if (n === 1) return 1
    return n * factorialRec(n-1)
    
}
console.log(factorialRec(8))