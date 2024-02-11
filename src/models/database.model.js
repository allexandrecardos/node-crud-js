const { Sequelize } = require('sequelize');
const configDB = require('../config/database.config.js');

const sequelize = new Sequelize({
    database: configDB.DATABASE ,
    username: configDB.USER,
    password: configDB.PASSWORD,
    host: configDB.HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, //ssl
          rejectUnauthorized: false //ignore ssl
        }
      }
})

module.exports = sequelize