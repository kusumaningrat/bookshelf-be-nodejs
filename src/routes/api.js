const express = require('express');
const { Url, UserRoles } = require('../commons/constants');
const categoryController = require('../controller/category');
const bookController = require('../controller/book');
const userController = require('../controller/user');
const authController = require('../controller/auth');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

/* Auth */
router.post(`${Url.Api.Auth}`, authController.login);

/* Category */
router.get(
    `${Url.Api.Category}`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin), 
    categoryController.getAll
);

router.get(
    `${Url.Api.Category}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    categoryController.getOne
);
router.post(
    `${Url.Api.Category}`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    categoryController.create
);
router.put(
    `${Url.Api.Category}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    categoryController.update
);
router.delete(
    `${Url.Api.Category}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    categoryController.destroy
);

/* Book */
router.get(
    `${Url.Api.Book}`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    bookController.getAll
);
router.get(
    `${Url.Api.Book}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    bookController.getOne
);
router.post(
    `${Url.Api.Book}`, 
    authMiddleware.checkToken,
    authMiddleware.checkLevel(UserRoles.Admin),
    bookController.create
);
router.put(
    `${Url.Api.Book}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    bookController.update
);
router.delete(
    `${Url.Api.Book}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    bookController.destroy
);

/* User */
router.get(
    `${Url.Api.User}`, 
    userController.getAll
);
router.get(
    `${Url.Api.User}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin), 
    userController.getOne
);
router.post(
    `${Url.Api.User}`, 
    userController.create
);
router.put(
    `${Url.Api.User}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    userController.update
);
router.delete(
    `${Url.Api.User}/:id`, 
    authMiddleware.checkToken, 
    authMiddleware.checkLevel(UserRoles.Admin),
    userController.destroy
);

module.exports = router;