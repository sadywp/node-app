var express = require('express');
var router = express.Router();
var users_model = require('../models/users_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var model=users_model;
    model.find(function(err,rs){
        if(err){
            res.status(500).end();
            return console.log(err);
        }else{
            res.render('users',{data:rs[0]});
        }

    });
});

router.get('/addusers', function(req, res, next) {
    var model = new users_model();
    model.user_name = "李四";
    model.user_age = "60";
    model.user_sex = "女";
    model.save(function(err, rs) {
        if (err) {
            res.send(err);
        } else {
            res.send('success');
        }

    });
});

module.exports = router;
