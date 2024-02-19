//exibindo mensagem
//console.log("Mensagem de texto!")

//operações matemáticas
/*var n1 = 10
var n2 = 2

var total = n1 + n2
var total1 = n1 - n2
var total2 = n1 * n2
var total3 = n1 / n2

console.log("Total: " + total)
console.log("Total1: " + total1)
console.log("Total2: " + total2)
console.log("Total3: " + total3)

if(total <= 10){
    console.log("O total é menor ou igual a 10")
}else{
    console.log("O total é maior que 10")
}


if(total1 <= 10){
    console.log("O total é menor ou igual a 10")
}else{
    console.log("O total é maior que 10")
}*/

//exportando funções de outros arquivos
//somar
/*var soma = require('./soma.js')
console.log("Total: " + soma(10,2)) 

//subtrair
var sub = require('./sub.js')
console.log("Total: " + sub(10,2)) 

//multiplicação
var multi = require('./multi.js')
console.log("Total: " + multi(10,2)) 

//dividir
var div = require('./div.js')
console.log("Total: " + div(10,2))*/

var http = require('http')

http.createServer(function(req, res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo!")