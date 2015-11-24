
'use strict';

var express = require('express');
var OAuth = require('oauth');
var config = require("../../config");
var twitterRouter = require("../../routes/twitter/router")



module.exports.getJeson = function(res, hashtag){
 // console.log('check','https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23'))
	var oauth = config.twitter1.oauth1;
	oauth.get(
		'https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23')+"&count=20",
		config.twitter1.standardKey,
		config.twitter1.standardValue,
		function (e, data, response) {
			if (e) console.log(e)
			twitterRouter.sendData(res, JSON.parse(data));
		});

}

