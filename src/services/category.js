const { ifEmptyThrowError, ifNotEmptyThrowError, isEmpty } = require('../commons/check');
const { Error} = require('../commons/constants');
const { RepackageError } = require('../commons/error');
const Category = require('../models/category');
const Book = require('../models/book');

const findAll = async () => {
    const result = await Category.findAll();
    ifEmptyThrowError(result, Error.CategoryEmpty);
    return result;
}

const findOne = async (id) => {
    const category = await Category.findByPk(id);
    ifEmptyThrowError(category, Error.CategoryNotFound);
    try {
        const result = await Category.findAll(
            { where: { id },
            include: [
                {
                    model: Book,
                    as: 'book'
                }
            ]
        });
        return result
    } catch (e) {
        RepackageError(e);
    }
}

const create = async (data) => {
    const { category_name } = data;
    ifEmptyThrowError(category_name, Error.CategoryCannotBeNull);
    const check = await Category.findOne({ where: {category_name}});
    ifNotEmptyThrowError(check, Error.CategoryAlreadyExist);
    try {
        const result = await Category.create(data);
        // console.log(result);
        return result;
    } catch (e) {
        RepackageError(e);
    }
}

const update = async (id, data) => {
    const category = await Category.findByPk(id);
    ifEmptyThrowError(category, Error.CategoryNotFound);
    try {
        const result = await category.update(data, { where: { id }});
        return result;
    } catch (e) {
        RepackageError(e);
    }
}

const destroy = async (id, data) => {
    const category = await Category.findByPk(id);
    ifEmptyThrowError(category, Error.CategoryNotFound);
    try {
        const result = await category.destroy(data);
        return result;
    } catch (e) {
        RepackageError(e);
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy
}