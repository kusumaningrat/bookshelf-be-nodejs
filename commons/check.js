const CustomError = require('./customError');

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

module.exports = {
    isEmpty,
    ifEmptyThrowError
}