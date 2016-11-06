/**
 * Created by lichen on 2016/11/6.
 */

const userModel = require('../models/user');
const ccap = require('ccap');

module.exports.showRegister = function (req, res, next) {
    res.render('register', {

    });
};


module.exports.doRgister = function (req, res, next) {
    // if (req.body.vcode != req.session.vcode) {
    //     res.json({
    //         info: '验证码错误'
    //     });
    // }

    let user = new userModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    userModel.getDataByUsername(function (err, result) {
       if (err)  {
           return next(err);
       }

       if (result) {
           return res.json({
               code: 0,
               info: '用户已注册!'
           });
       }
    });



    user.addUser(function (err, result) {
        if (err) {
           return next(err);
        }


       return res.json({
          code: '0'
        });
    });

};

module.exports.showCaptcha = function (req, res, next) {

    let ary = ccap().get();

    req.session.vcode = ary[0];

    res.end(ary[1]);
};