const sequelize = require('../src/commons/database');

const connect = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Database Connected');
            sequelize.sync({ force: true })
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