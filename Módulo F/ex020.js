/*
var num = [6, 5, 3, 8, 9]
console.log(`O vetor tem ${num.length} posicoes`)
num.sort()
console.log(num)

var valores = [0, 1, 6, 4, 6, 3]
for(var pos=0; pos < valores.length; pos++){
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}
*/
var valores = [0, 1, 6, 4, 9, 3]
valores.sort()
for(let pos in valores){
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}