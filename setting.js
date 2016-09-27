var env=require('./env').env;
var devSetting={
	mongoShardsAddr:"mongodb://127.0.0.1:27017"
}
var productiongSetting={
	mongoShardsAddr:"mongodb://127.0.0.1:27017"
}
var testSetting={}

if(env=='dev'){
	setresult=devSetting;
}else if(env=='production'){
	setresult=productiongSetting;
}
module.exports=setresult;
