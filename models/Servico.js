
const db = require('./db')


const Servico = db.sequelize.define('servicos', {
    equipamento: {
        type: db.Sequelize.STRING
    },
    servico: {
        type: db.Sequelize.TEXT
    }
});

//Servico.sync({force: true})

module.exports = Servico;