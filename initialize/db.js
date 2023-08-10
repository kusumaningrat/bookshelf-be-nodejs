const sequelize = require('../src/commons/database');

const connect = async (options) => {
    sequelize.authenticate()
        .then(() => {
            console.log('Database Connected');
            sequelize.sync({ ...options })
            .then(() => {
                console.log('Database synced')
            })
        })
        .catch(err => {
            console.log('Database Connection Error', err);
        });
}

module.exports = {
    connect
}