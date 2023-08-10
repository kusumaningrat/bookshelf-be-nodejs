const { StatusCode, Message } = require('../commons/constants');
const { ResponseWithError } = require('../commons/error');
const resBuilder = require('../commons/utils');
const categoryService = require('../services/category');

module.exports = {
    getAll:  async (req, res, next) => {
        try {
            const result = await categoryService.findAll();
            resBuilder(res, StatusCode.OK, result, Message.Loaded);
            return next()
        } catch (err) {
            return ResponseWithError(res, err);
        }
    }    
}