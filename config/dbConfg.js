/**
 * Created by lichen on 2016/11/6.
 */
const config = require('./config');

// 测试服务器配置信息
if (config.debug) {
    dbConfig = {
        connectionLimit: 50,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog',
        usersTable: 'users',
        articlesTable: 'articles',
        commentsTable: 'comments',
    }
} else {
    // 线上服务器
    dbConfig = {
        connectionLimit: 50,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog',
        usersTable: 'users',
        articlesTable: 'articles',
        commentsTable: 'comments',
    }
}
module.exports = dbConfig;