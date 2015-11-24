'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");
var getJeson = require("../../API/twitter/API1-0")
var url = require('url');
var standardAPI = require("../../API/twitter/API1-1")

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/',function(req,res,next){
 res.render('partials/twitter')
})
 
router.get('/:hashtag', function (req, res, next) {
	var urlParts = url.parse(req.url, true);
	var urlQuery = urlParts.query;
    var hashtag = req.params.hashtag;
    if (urlQuery.version){
    	console.log("Twitter API version 1.0")
 		getJeson.getJeson(res, hashtag);
 	}
 	else{
 		console.log("Twitter API version 1.1")
 		standardAPI.getJeson(res, hashtag)
 	}
});

module.exports.sendData = function(res, data){

	// var objectData = JSON.parse(data);
	// console.log(objectData.statuses[0].text)
	// for(var i in data){
	// 	console.log(data[i])
	// }
	res.write(JSON.stringify(data))
	res.end();
}



module.exports = router;
