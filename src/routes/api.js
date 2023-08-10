const express = require('express');
const { Url } = require('../commons/constants');
const categoryController = require('../controller/category');
const bookController = require('../controller/book');
const userController = require('../controller/user');
const authController = require('../controller/auth');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

/* Auth */
router.post(`${Url.Api.Auth}`, authController.login);

/* Category */
router.get(`${Url.Api.Category}`, authMiddleware.checkToken, categoryController.getAll);
router.get(`${Url.Api.Category}/:id`, authMiddleware.checkToken, categoryController.getOne);
router.post(`${Url.Api.Category}`, authMiddleware.checkToken, categoryController.create);
router.put(`${Url.Api.Category}/:id`, authMiddleware.checkToken, categoryController.update);
router.delete(`${Url.Api.Category}/:id`, authMiddleware.checkToken, categoryController.destroy);

/* Book */
router.get(`${Url.Api.Book}`, authMiddleware.checkToken, bookController.getAll);
router.get(`${Url.Api.Book}/:id`, authMiddleware.checkToken, bookController.getOne);
router.post(`${Url.Api.Book}`, authMiddleware.checkToken, bookController.create);
router.put(`${Url.Api.Book}/:id`, authMiddleware.checkToken, bookController.update);
router.delete(`${Url.Api.Book}/:id`, authMiddleware.checkToken, bookController.destroy);

/* User */
router.get(`${Url.Api.User}`, authMiddleware.checkToken, userController.getAll);
router.get(`${Url.Api.User}/:id`, authMiddleware.checkToken, userController.getOne);
router.post(`${Url.Api.User}`, authMiddleware.checkToken, userController.create);
router.put(`${Url.Api.User}/:id`, authMiddleware.checkToken, userController.update);
router.delete(`${Url.Api.User}/:id`, authMiddleware.checkToken, userController.destroy);

module.exports = router;