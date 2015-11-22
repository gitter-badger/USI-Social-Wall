'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");
var getJeson = require("../../API/twitter/API1-0")

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/',function(req,res,next){
 res.render('partials/twitter')
})

router.get('/:hashtag', function (req, res, next) {
 var hashtag = req.params.hashtag;
 getJeson.getJeson(res, hashtag);
});

module.exports.sendData = function(res, data){

	var objectData = JSON.parse(data);
	console.log(objectData.statuses[0].text)
	// for(var i in data){
	// 	console.log(data[i])
	// }
	res.write(data)
	res.end();
}



module.exports = router;
