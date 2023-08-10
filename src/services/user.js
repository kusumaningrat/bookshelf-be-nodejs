const { ifEmptyThrowError, ifNotEmptyThrowError, isEmpty } = require('../commons/check');
const { Error} = require('../commons/constants');
const { RepackageError } = require('../commons/error');
const { hashPassword } = require('../commons/helper');
const User = require('../models/user');

const findAll = async () => {
    const result = await User.findAll();
    ifEmptyThrowError(result, Error.UserEmpty);
    return result;
}

const findOne = async (id) => {
    const user = await User.findByPk(id);
    ifEmptyThrowError(user, Error.UserNotFound);
    try {
        const result = await User.findOne({ where: {id} });
        return result;
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

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy
}