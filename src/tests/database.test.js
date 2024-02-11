const sequelize =  require('../models/database.js');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados: ', error);
    }finally{
        sequelize.close();
    }
}

testConnection()