const { ifEmptyThrowError } = require('../commons/check');
const { Error} = require('../commons/constants');
const Category = require('../models/category');

const findAll = async () => {
    const result = await Category.findAll();
    ifEmptyThrowError(result, Error.CategoryNotFound);
    return result;
}

module.exports = {
    findAll
}