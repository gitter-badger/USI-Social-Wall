
'use strict';

var twitterRouter = require("../../../routes/twitter/router")


module.exports.parseData = function(res, data, options){
	console.log("middleOut1");
	res.write(JSON.stringify(data));
	res.end();
	console.log("out1");

}

