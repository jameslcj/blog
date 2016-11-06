/**
 * Created by lichen on 2016/11/6.
 */

const db = require('./db');
const config = require('../config/dbConfg');

function user(data) {
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
}

user.prototype.addUser = function (callback) {
    db.addRecord({
        username: this.username,
        password: this.password,
        email: this.email,
    }, config.usersTable, callback);
}

user.prototype.getDataByUsername = function (callback) {
   db.getSingleRecord('*', config.usersTable,{username: this.username}, callback);
}

module.exports = user;