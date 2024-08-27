

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Servico = require('./models/Servico')


const BodyParser = require('body-parser');
const { where } = require("sequelize");


// configuracao da template
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

// body parser

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function(req,res){
    Servico.findAll({order:[['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
    })

   
})

app.get('/deletar/:id', function(req, res){
    Servico.destroy({where:{'id': req.params.id}}).then(function(){
        res.send("Serviço excuido com sucesso")
    }).catch(function(erro){
        res.send("Erro ao excluir registro de serviço.")
    })
})



// minhas rotas

app.get('/cad', function(req, res){
    //res.send('"Rota de cadasro de serviços')
    res.render('formulario')
})

app.post('/add', function(req, res){ //inserção de dados na tabela
    Servico.create({
        equipamento: req.body.equipamento,
        servico: req.body.servico
    }).then(function(){
        res.redirect('/')
        //res.send("Serviço adicionado com sucesso!")
    }).catch(function(erro){
        res.send("Erro ao criar serviço"+erro)
    })

    //res.send("Equipamento: "+req.body.equipamento+"Serviço:" +req.body.servico)
    //res.send('Formulario enviado!')
})





app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081, aguarde..."); // mensagem a pagina web
});