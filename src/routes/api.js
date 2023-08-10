const express = require('express');
const { Url } = require('../commons/constants');
const categoryController = require('../controller/category');

const router = express.Router();

/* Category */
router.get(`${Url.Api.Category}`, categoryController.getAll);
router.get(`${Url.Api.Category}/:id`, categoryController.getOne);
router.post(`${Url.Api.Category}`, categoryController.create);
router.put(`${Url.Api.Category}/:id`, categoryController.update);
router.delete(`${Url.Api.Category}/:id`, categoryController.destroy);

module.exports = router;