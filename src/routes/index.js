const express = require('express');
const { Url } = require('../commons/constants');
const router = express.Router();
const api = require('./api');

router.use(Url.Api.Root, api);

module.exports = router;