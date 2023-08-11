const userService = require('../services/user');
const User = require('../models/user');
const { validateToken, isEmpty } = require('../commons/check');
const resBuilder = require('../commons/utils');
const { StatusCode, Message } = require('../commons/constants');

module.exports = {
    checkToken: async (req, res, next) => {
        const Authorization = req.header('Authorization');
        const checkToken = validateToken(Authorization);
        if (checkToken) {
            const user = await User.findByPk(checkToken.id);
            if (isEmpty(user)) resBuilder(res, StatusCode.Forbidden, Message.Forbidden);
            req.user = user;
            req.level = user.level
            return next();
        } else {
            resBuilder(res, StatusCode.Unauthorized, Message.Unauthorized);
        }
    },

    checkLevel: (...userLevels) => {
        try {
            return (req, res, next) => {
                if (!req.user) {
                    resBuilder(res, StatusCode.Unauthorized, Message.Unauthorized);
                } 
                const userLevel = req.user.level
                if (userLevels.includes(userLevel)) {
                    return next()
                } else {
                    resBuilder(res, StatusCode.Forbidden, Message.Forbidden);
                }
            }
        } catch (e) {
            resBuilder(res, StatusCode.InternalServerError, Message.InternalServerError, e);
        }
    }
}