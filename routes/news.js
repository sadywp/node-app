var express = require('express');
var router = express.Router();
var news_model = require('../models/news_model');

router.get('/:type', function(req, res, next) {
    var type_id = req.params.type
    var pageindex=1;
    var pagesize=10;
    var qparams = {source_type:type_id};
    var model = news_model;

    var query = news_model.find({});
    query.skip((pageindex - 1) * pagesize);
    query.limit(pagesize);
    query.where(qparams);
    query.sort({ create_at: -1 });
    query.exec(function(err, rs) {
        if (err) {
            res.send({ state: "false", data: null, total: 0 });
        } else {
            news_model.where(qparams).find(function(err, data) {
                jsonArray = { state: 200, data: rs, total: data.length };
                res.json(jsonArray);
            })
        }
    })


   /* model.find({ source_type: type_id }, function(err, rs) {
        if (err) {
            res.status(500).end();
            return console.log(err);
        } else {
            //res.render('users',{data:rs[0]});
            res.send({ data: rs, status: 200, count: rs.length });
        }

    });*/
});
router.get('/getDetials/:id', function(req, res, next) {
    var id = req.params.id + '';
    var model = news_model;
    model.find({ newsid: id }, function(err, rs) {
        if (err) {
            res.status(500).end();
            return console.log(err);
        } else {
            //res.render('users',{data:rs[0]});
            res.send({ data: rs });
        }

    });
});

module.exports = router;
