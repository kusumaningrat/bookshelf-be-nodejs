const { StatusCode, Message } = require('../commons/constants');
const { ResponseWithError } = require('../commons/error');
const resBuilder = require('../commons/utils');
const categoryService = require('../services/category');

module.exports = {
    getAll:  async (req, res, next) => {
        try {
            const result = await categoryService.findAll();
            resBuilder(res, StatusCode.OK, Message.Loaded, result);
            return next()
        } catch (e) {
            console.log(e)
            return ResponseWithError(res, e);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await categoryService.findOne(id);
            resBuilder(res, StatusCode.OK, Message.Loaded, result);
            return next();
        } catch (e) {
            console.log(e);
            return ResponseWithError(res, e);
        } 
    },
    
    create: async (req, res, next) => {
        try {
            const data = req.body;
            const result = await categoryService.create(data);
            resBuilder(res, StatusCode.OK, Message.Added, result);
            return next()
        } catch (e) {
            console.log(e)
            return ResponseWithError(res, e);
        }
    },

    update: async(req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const result = await categoryService.update(id, data);
            resBuilder(res, StatusCode.OK, Message.Updated, result);
            return next()
        } catch (e) {
            console.log(e)
            return ResponseWithError(res, e);
        }
    },

    destroy: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await categoryService.destroy(id);
            resBuilder(res, StatusCode.OK, Message.Deleted);
            return next();
        } catch (e) {
            console.log(e);
            return ResponseWithError(res, e);
        }
    }
}