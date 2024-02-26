const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo!")
})

app.get("/", function(req, res){
    res.end("Node JS")
})

/*app.get("/cadastrar/:item/:quantidade", function(req, res){
    res.end("Item: " + req.params.item + "\nQuantidade: " + req.params.quantidade)
})*/

app.get("/cadastrar/:produto", function(req, res){
    res.end("Produto: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("Produto: " + req.params.produto + "\nModelo:" + req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.end("SAC: " + req.params.sac + "\nProduto: " + req.params.produto)
})


