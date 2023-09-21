const jwt = require('jsonwebtoken');
const { ifEmptyThrowError, ifNotEmptyThrowError, isEmpty, ifFalseThrowError } = require('../commons/check');
const { Error} = require('../commons/constants');
const { RepackageError } = require('../commons/error');
const config = require('config');
const { hashPassword, comparePassword } = require('../commons/helper');
const User = require('../models/user');

const findAll = async () => {
    const result = await User.findAll();
    ifEmptyThrowError(result, Error.UserEmpty);
    return result;
}

const findOne = async (id) => {
    const user = await User.findByPk(id);
    ifEmptyThrowError(user, Error.BookNotFound);
    try {
        const result = await User.findOne({ where: {id} });
        return result
    } catch (e) {
        RepackageError(e);
    }
}

const create = async (data) => {
    const body = data;
    const username = body.username;
    const check = await User.findOne({ where: { username }});
    ifNotEmptyThrowError(check, Error.UserAlreadyExist);
    try {
        const password = hashPassword(body.password);
        console.log(password);
        const result = await User.create({
            ...body,
            password
        });
        return result
    } catch (e) {
        RepackageError(e)
    }
}

const update = async (id, data) => {
    const user = await User.findByPk(id);
    ifEmptyThrowError(user, Error.UserNotFound);
    try {
        const result = user.update(data, { where: {id} });
        return result;
    } catch (e) {
        RepackageError(e);
    }
}

const destroy = async (id) => {
    const user = await User.findByPk(id);
    ifEmptyThrowError(user, Error.UserNotFound);
    try {
        const result = await user.destroy(id);
        return result;
    } catch (e) {
        RepackageError(e);
    }
}

const login = async (username, password) => {
    try {
        ifEmptyThrowError(username, Error.UsernameRequired);
        ifEmptyThrowError(password, Error.PasswordRequired);
        const user = await User.findOne({ where: { username }});
        ifEmptyThrowError(user, Error.UserNotFound);
        ifFalseThrowError(user.username === username && comparePassword(password, user.password), Error.UserNotFound);
        const token = jwt.sign(
            { 
                id: user.id, 
                password: user.password
            },
            config.get('jwt.private_key'), {
                expiresIn: '30d'
            }
        );
        return { token, username };
    } catch (e) {
        RepackageError(e)
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy,
    login
}