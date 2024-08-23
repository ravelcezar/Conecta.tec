app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})


//Rotas

app.get('cad', function(req, res){
    res.send('Rota de cadastro de posts')
})


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});