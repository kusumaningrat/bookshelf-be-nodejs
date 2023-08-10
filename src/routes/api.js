const express = require('express');
const { Url } = require('../commons/constants');
const categoryController = require('../controller/category');
const bookController = require('../controller/book');

const router = express.Router();

/* Category */
router.get(`${Url.Api.Category}`, categoryController.getAll);
router.get(`${Url.Api.Category}/:id`, categoryController.getOne);
router.post(`${Url.Api.Category}`, categoryController.create);
router.put(`${Url.Api.Category}/:id`, categoryController.update);
router.delete(`${Url.Api.Category}/:id`, categoryController.destroy);

/* Book */
router.get(`${Url.Api.Book}`, bookController.getAll);
router.get(`${Url.Api.Book}/:id`, bookController.getOne);
router.post(`${Url.Api.Book}`, bookController.create);
router.put(`${Url.Api.Book}/:id`, bookController.update);
router.delete(`${Url.Api.Book}/:id`, bookController.destroy);

module.exports = router;