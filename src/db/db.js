const sequelize = require('../src/commons/database');

const connect = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Database Connected')
            sequelize.sync({ alter: true })
            .then(() => {
                console.log('Database synced')
            })
            .catch((err) => console.log('Sync database error', err))
        })
        .catch(err => {
            console.log('Database Connection Error', err);
        });
}

module.exports = {
    connect
}