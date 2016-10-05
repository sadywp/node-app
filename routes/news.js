var express=require('express');
var router=express.Router();
var news_model=require('../models/news_model');

router.get('/:id', function(req, res, next) {
    var type_id=req.params.id
    var model=news_model;
    model.find({source_type:type_id},function(err,rs){
        if(err){
            res.status(500).end();
            return console.log(err);
        }else{
            //res.render('users',{data:rs[0]});
            res.send({data:rs,status:200,count:rs.length});
        }

    });
});

module.exports = router;