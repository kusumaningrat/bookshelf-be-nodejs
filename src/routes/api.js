const express = require('express');
const { Url } = require('../commons/constants');
const categoryController = require('../controller/category');

const router = express.Router();

router.get(`${Url.Api.Category}`, categoryController.getAll);

module.exports = router;