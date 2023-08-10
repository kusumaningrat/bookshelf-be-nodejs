const userService = require('../services/user');
const { ResponseWithError } = require('../commons/error');
const resBuilder = require('../commons/utils');
const { StatusCode, Message } = require('../commons/constants');

module.exports = {
    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const result = await userService.login(username, password);
            resBuilder(res, StatusCode.OK, Message.Logedin, result);
            return next();
        } catch (e) {
            console.log(e);
            ResponseWithError(res, e);
        }
    }
}