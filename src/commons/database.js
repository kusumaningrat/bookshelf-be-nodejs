require('pg').defaults.parseInt8 = true;
const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(config.get('database.name'), config.get('database.user'), config.get('database.password'), {
    dialect: 'postgres',
    host: config.get('database.host'),
    logging: false,
    pool: {
        acquire: 20000,
        max: 5,
        min: 1,
        idle: 10000
    }        
});

module.exports = sequelize;