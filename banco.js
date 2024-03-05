const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})
 
sequelize.authenticate().then(function(){
    console.log("Servidor ativo!")
}).catch(function(erro){
    console.log("Falha de conexão" + erro)
})

const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.TEXT
    }
})

//agendamentos.sync()

agendamentos.create({
    nome: "Maria",
    endereco: "Rua da Depressão, 666",
    bairro: "Morte",
    cep: "9283-9283",
    cidade: "Ansiedade",
    estado: "Minas Gerais",
    observacao: "Aula legal 14 2 e 3"
})


module.exports = agendamentos
