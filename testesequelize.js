const Sequelize = require('sequelize')
const sequelize = new Sequelize('servicos', 'root', 'garfanhoto',{
    host: "localhost", 
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})


const Postagem = sequelize.define('novoservico',{ // local pra criar os campos da tabela
    equipamento:{
        type: Sequelize.STRING
    },
    servico:{
        type: Sequelize.TEXT
    },

     motivo_observacoes:{
        type: Sequelize.TEXT
    }
})





// Postagem.sync({force:true}) //gera a tabela no banco



/// inserir os regstros dentro dos campos da tabela

Postagem.create({
    equipamento: "bisturi",
    servico: "troca",
     motivo_observacoes: "na garantia"
})

const Usuarios = sequelize.define('usuario',{ // cria uma tabela no banco d dados chamada 'usuarios'
    nome: {
        type: Sequelize.STRING
    },

    razao: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuarios.sync({force: true})


Usuarios.create({
   nome: "Fabio",
    razao: "cliente",
    email: "fabio@gmail.com"
})