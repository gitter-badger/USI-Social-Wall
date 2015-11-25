
'use strict';

var twitterExts = require("../APIclassForTwitter")
var config = twitterExts.config;
var OAuth = twitterExts.OAuth;

var twitterRouter = require("../../../routes/twitter/router")

// console.log("eeeeeiiiiii  ", config.routers)


module.exports.getJson = function(res, hashtag, options){
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

