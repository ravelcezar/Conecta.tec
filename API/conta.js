const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Seja bem-vindo!, Conectado ao servidor => http://localhost:8081")
    });


app.listen(8081, function(){
    console.log("Conectado ao serrvidor => http://localhost:8081")

});