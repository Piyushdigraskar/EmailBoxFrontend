const express = require('express')

const router = express.Router();

const userController = require('../Controllers/user');

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

module.exports = router;