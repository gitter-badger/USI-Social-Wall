
'use strict';

var twitterRouter = require("../../../routes/twitter/router")



module.exports.parseData = function(res, data, options){
    twitterRouter.sendData(res, data);

}