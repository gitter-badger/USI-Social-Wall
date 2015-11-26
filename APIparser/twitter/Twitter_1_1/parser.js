
'use strict';

module.exports.parseData = function(res, data, options){
    console.log("middleOut2");

    res.write(JSON.stringify(data));
	res.end();
	console.log("out");

}