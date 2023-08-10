const userService = require('../services/user');
const { validateToken, isEmpty } = require('../commons/check');
const resBuilder = require('../commons/utils');
const { StatusCode, Message } = require('../commons/constants');

module.exports = {
    checkToken: async (req, res, next) => {
        const Authorization = req.header('Authorization');
        const checkToken = await validateToken(Authorization);
        if (checkToken) {
            const user = await userService.findOne(checkToken);
            if (isEmpty(user)) resBuilder(res, StatusCode.Forbidden, Message.Forbidden);
            return next();
        } else {
            resBuilder(res, StatusCode.Unauthorized, Message.Unauthorized);
        }
    }
}