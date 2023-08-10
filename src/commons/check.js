const CustomError = require('./customError');
const jwt = require('jsonwebtoken');
const config = require('config');

function isEmpty(obj) {
    if (
        obj === undefined || 
        obj === null || 
        obj === 'undefined' || 
        typeof obj === 'undefined' || 
        obj === '') {
        return true
    } else if (Array.isArray(obj) && obj.length === 0) {
        return true
    } else {
        return false
    }
}
function ifEmptyThrowError(obj, errorMsg) {
    if (isEmpty(obj)) {
        throw new CustomError(errorMsg);
    }
}

function ifNotEmptyThrowError(responseError, errorMsg) {
    if (!isEmpty(responseError)) {
        throw new CustomError(errorMsg);
    }
}

function validateToken(token) {
    let payload = '';
    try {
        const TokenArray = token.split(' ');
        payload = jwt.verify(TokenArray[1], config.get('jwt.private_key'));
        return payload
    } catch (e) {
        return false
    }
}

module.exports = {
    isEmpty,
    ifNotEmptyThrowError,
    ifEmptyThrowError,
    validateToken
}