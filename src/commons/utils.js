function resBuilder(res, statusCode, message, data) {
    return res.status(statusCode.code).send({
        statusCode: statusCode.code,
        statusCode: statusCode.value,
        message,
        data
    })
}

module.exports = resBuilder;