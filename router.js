"use strict"

const express = require('express');

const router = express.Router();

const indexController = require('./controllers/index');
const userController = require('./controllers/user');

router.get('/', indexController.showIndex);
router.get('/captcha', userController.showCaptcha)
router.get('/register', userController.showRegister);
router.post('/register', userController.doRgister);


module.exports = router;