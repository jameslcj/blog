"use strict"

const path = require('path');
module.exports = {
    debug: true,
    secret:'blog',
    pageSize:5,
    uploadDir: path.join(__dirname,'uploads'),
    avatarDir: path.join(__dirname,'uploads/avatar'),
}