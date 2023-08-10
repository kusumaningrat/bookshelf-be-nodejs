const Constants = require('./constants');
const CustomError = require('./customError');
const resBuilder = require('./utils');

function ResponseWithError(res, err, customErrorCode = 400) {
    if (err instanceof CustomError) {
        return res.status(customErrorCode).send(err.message)
    } else {
        resBuilder(res, Constants.StatusCode.InternalServerError, Constants.Error.SomethingWentWrong)
    }
}

module.exports = {
    ResponseWithError
}