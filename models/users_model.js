var connection=require('./db_testmodule');
var mongoose=require('mongoose');
var users_schema=mongoose.Schema({
	user_name:String,
	user_age:String,
	user_sex:String
});
var users_model=connection.model('users_models',users_schema);
module.exports=users_model;