const Constants = require('./constants');
const CustomError = require('./customError');
const resBuilder = require('./utils');

function RepackageError(err) {
    if (err instanceof CustomError) {
      return err;
    } else {
      const error = new Error();
      error.stack += `\nCaused by:\n${err.stack}`;
      return error;
    }
}

function ResponseWithError(res, err, customErrorCode = 400) {
    if (err instanceof CustomError) {
        return res.status(customErrorCode).send(err.message)
    } else {
        resBuilder(res, Constants.StatusCode.InternalServerError, Constants.Error.SomethingWentWrong)
    }
}

module.exports = {
    RepackageError,
    ResponseWithError
}