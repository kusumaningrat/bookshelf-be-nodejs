const { StatusCode, Message } = require('../commons/constants');
const { ResponseWithError } = require('../commons/error');
const resBuilder = require('../commons/utils');
const userService = require('../services/user');

module.exports = {

    getAll: async (req, res, next) => {
        try {
            const result = await userService.findAll();
            resBuilder(res, StatusCode.OK, Message.Loaded, result);
            return next()
        } catch (e) {
            ResponseWithError(res, e);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await userService.findOne(id);
            resBuilder(res, StatusCode.OK, Message.Loaded, result);
            return result;
        } catch (e) {
            ResponseWithError(res, e);
        }
    },

    create: async (req, res, next) => {
        try {
            const data = req.body;
            const result = await userService.create(data);
            resBuilder(res, StatusCode.OK, Message.Added, result);
            return next();
        } catch (e) {
            ResponseWithError(res, e);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const result = await userService.update(id, data);
            resBuilder(res, StatusCode.OK, Message.Updated, result);
            return next();
        } catch (e) {
            ResponseWithError(res, e);
        }
    },
    
    destroy: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await userService.destroy(id);
            resBuilder(res, StatusCode.OK, Message.Deleted);
            return next();
        } catch (e) {
            ResponseWithError(res, e);
        }
    },
}