/**
 * Created by lichen on 2016/11/6.
 */
"use strict"
const mysql = require('mysql');
const dbConfig = require('../config/dbConfg');


// 创建一个数据库连接池
let pool = mysql.createPool({
    connectionLimit: dbConfig.connectionLimit,
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
});

module.exports.query = function(sql, param1, param2) {
    let callback;
    let paramArr = [];
    if (arguments.length == 2 && typeof param1 == 'function') {
       callback = param1;
    } else if (arguments.length == 3 && Array.isArray(param1) && typeof param2 == 'function') {
        paramArr = param1;
        callback = param2;
    } else {
        throw new Error('plz input 2 params or 3 params!');
    }

    executeSql(sql, paramArr, callback);
};


module.exports.getSingleRecord = function (fields, table, where, callback) {
   if (Array.isArray(fields)) {

   }
}



module.exports.addRecord = function(addObj, table, callback) {
    let paramArr = [];
    let sql = `INSERT INTO ${table} (`;
    let valSql = '(';
    for (let key in addObj) {
        sql += `${key},`;
        valSql += '?,';
        paramArr.push(addObj[key]);
    }
    sql = sql.substr(0, sql.length -1) + ') ';
    valSql = valSql.substr(0, valSql.length -1) + ')';
    sql += ' values ' + valSql;

    executeSql(sql, paramArr, callback);
};


function executeSql(sql, paramArr, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, paramArr, function () {
            // 释放连接
            connection.release();
            console.log(arguments);
            callback.apply(null, arguments);
        });
    });
}