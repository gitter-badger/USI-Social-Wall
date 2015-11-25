'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");
var API = require('../../API/API');
var url = require('url');
// var standardAPI = require("../../AxPI/twitter/API1-1")


router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/',function(req,res,next){
 res.render('partials/twitter')
})
 
router.get('/:hashtag', function (req, res, next) {
	var urlParts = url.parse(req.url, true);
	var urlQuery = urlParts.query;
    var hashtag = req.params.hashtag;
    if (urlQuery.version == '1.0'){
    	var Twitter_1_0 = API.Twitter_1_0;
    	console.log("Twitter API version 1.0")
 		Twitter_1_0.getJson(res, hashtag, {});
 	}
 	else{
 		var Twitter_1_1 = API.Twitter_1_1;
 		console.log("Twitter API version 1.1")
 		Twitter_1_1.getJson(res, hashtag, {})
 	}
});

module.exports.sendData = function(res, data){

	// console.log(data.statuses[0].text)
	res.write(JSON.stringify(data))
	res.end();
}



module.exports = router;
