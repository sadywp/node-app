var setting=require('../setting');
var mongoose=require('mongoose');
var connection=mongoose.createConnection(setting.mongoShardsAddr+"/education_module");

module.exports=connection;