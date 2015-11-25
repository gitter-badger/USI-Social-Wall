
'use strict';

var twitterExts = require("../APIclassForTwitter")
var config = twitterExts.config;
var OAuth = twitterExts.OAuth;
var Twitter_1_0 = twitterExts.APIparser.Twitter_1_0;

// console.log("eeeeeiiiiii  ", config.routers)


module.exports.getJson = function(res, hashtag, options){
	console.log("enter1")
 // console.log('check','https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23'))
	var oauth = config.twitter1.oauth1;
	oauth.get(
		'https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23')+"&count=1",
		config.twitter1.standardKey,
		config.twitter1.standardValue,
		function (e, data, response) {
			if (e) console.log(e)
			Twitter_1_0.parseData(res, JSON.parse(data),options);
			console.log("out1")
		});

}

