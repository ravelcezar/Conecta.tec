

const Sequelize = require('sequelize')


// conexão com o banco de dados

const sequelize = new Sequelize('servico', 'root', 'garfanhoto',{
    host: "localhost", 
    dialect: 'mysql'
});

module.exports = {
    Sequelize : Sequelize,
    sequelize:sequelize
}