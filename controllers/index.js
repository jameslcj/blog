/**
 * Created by lichen on 2016/11/6.
 */

const content = require('../models/content');

module.exports.showIndex = function(req, res, next) {
    res.render('index', {
        user: req.session.user
    });
}