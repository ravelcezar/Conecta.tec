const express = require("express");
const app = express();


app.get("/", function(req, res){
    //res.sendFile(__dirname +"/html/index.html");
  // res.sendFile(__dirname +"/CONECTA.TEC/index.html");

   // res.sendFile(__dirname +"/CONECTA.TEC/index.html"); FUNCIONOU
    //res.send("Seja bem vindo ao meu APP 2"); FUNCIONOU
});


app.get("/sobre", function(req, res){
    res.send("Minha Pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1> ola "+req.params.nome+"</h1>"+"<h2> Seu cargo e: "+req.params.cargo+"</h2>"+"<h3> Sua cor favorita e: "+req.params.cor+"</h3>");
  
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081"); // mensagem a pagina web
});