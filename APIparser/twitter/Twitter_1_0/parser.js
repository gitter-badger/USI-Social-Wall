
'use strict';

var twitterRouter = require("../../../routes/twitter/router")

// console.log("eeeeeiiiiii  ", config.routers)


module.exports.parseData = function(res, data, options){
	twitterRouter.sendData(res, data);

}

