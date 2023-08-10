function resBuilder(res, status, message, data) {
    return res.status(status.code).send({
        status: status.code,
        status: status.value,
        message,
        data
    })
}

module.exports = resBuilder;