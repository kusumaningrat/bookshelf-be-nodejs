const bcrypt = require('bcrypt');
const config = require('config');

function hashPassword(password) {
    const saltRounds = config.get('bcrypt.salt');

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = {
    hashPassword
}