const express = require('express');

const router = express.Router();

const Authentication = require('../Middleware/auth')

const emailController = require('../Controllers/email');

router.post('/addemail',Authentication.authenticate ,emailController.addEmail);

router.get('/getEmails', Authentication.authenticate, emailController.getEmails);

module.exports = router;