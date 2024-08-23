const Sequelize = require('sequelize')
const sequelize = new Sequelize('tests', 'root', 'garfanhoto',{
    host: "localhost", 
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})


const Postagem = sequelize.define('tests',{ 
    dispositivo:{
        type: Sequelize.STRING
    },
    problema:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    dispositivo: "pc",
    problema: "ruim"
})


//Postagem.sync({force:true})







