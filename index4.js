const express = require("express");
const app = express();
const handlebars = require('express-handlebars')


// configuracao da template
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')




// conexão com o banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('servicos', 'root', 'garfanhoto',{
    host: "localhost", 
    dialect: 'mysql'
})

// minhas rotas

app.get('/cad', function(req, res){
    //res.send('"Rota de cadasro de serviços')
    res.render('formulario')
})






app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081"); // mensagem a pagina web
});