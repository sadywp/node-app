var setting=require('../setting');
var mongoose=require('mongoose');
var connection=mongoose.createConnection(setting.mongoShardsAddr+"/testmodule");
module.exports=connection;