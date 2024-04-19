const express = require('express');

const router = express.Router();

const Authentication = require('../Middleware/auth')

const emailController = require('../Controllers/email');

router.post('/addemail',Authentication.authenticate ,emailController.addEmail);

router.get('/getemails', Authentication.authenticate, emailController.getEmails);

router.get('/getemail/:id', Authentication.authenticate, emailController.getEmail);

router.delete('/deleteemail/:id', Authentication.authenticate, emailController.deleteEmail);

module.exports = router;