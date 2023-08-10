const { ifEmptyThrowError, ifNotEmptyThrowError } = require('../commons/check');
const { Error} = require('../commons/constants');
const { RepackageError } = require('../commons/error');
const Book = require('../models/book');

const findAll = async () => {
    const result = await Book.findAll();
    ifEmptyThrowError(result, Error.BookEmpty);
    return result
}

const findOne = async (id) => {
    const book = await Book.findByPk(id);
    ifEmptyThrowError(book, Error.BookNotFound);
    try {
        const result = await Book.findOne({ where: {id} });
        return result
    } catch (e) {
        RepackageError(e);
    }
}

const create = async (data) => {
    const body = data;
    const book_name = body.book_name;
    ifEmptyThrowError(body, Error.BookCannotBeNull);
    const check = await Book.findOne({ where: { book_name }});
    ifNotEmptyThrowError(check, Error.BookAlreadyExist);
    try {
        const result = await Book.create(body);
        return result;
    } catch (e) {
        RepackageError(e);
    }
}

const update = async (id, data) => {
    const book = await Book.findByPk(id);
    ifEmptyThrowError(book, Error.BookNotFound);
    try {
        const result = await book.update(data, { where: {id} });
        return result;
    } catch (err) {
        RepackageError(err);
    }
}

const destroy = async (id) => {
    const book = await Book.findByPk(id);
    ifEmptyThrowError(book, Error.BookNotFound);
    try {
        const result = await book.destroy(id);
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