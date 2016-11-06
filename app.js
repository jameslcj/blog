"use strict"
const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./config/config');
const router = require('./router');

const app = express();

// 声明设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'xtpl');

// 声明静态文件位置
app.use('/www', express.static('www'));
app.use('/upload', express.static('upload'));

// 挂载cookie中间件
app.use(cookieParser());

// 挂载session中间件
app.use(session({
    secret: config.secret, // 密钥盐
    resave: false,  // 是否强行将session保存到文件中
    saveUninitialized: true
}));

// 配置body中间件
app.use(bodyParse.urlencoded({
    extended: true
}));

// 挂载配置配置文件 方便全局调用
app.locals.config = config;
app.locals.rootPath = __dirname;

// 挂载路由
app.use(router);

// 调式模式
if (config.debug) {
    app.use(function(err, req, res, next) {
        res.send(`服务器内部错误信息: ${err.message}`);
    });
}

app.listen(3000, '127.0.0.1', function() {
    console.log('server has been started');
});