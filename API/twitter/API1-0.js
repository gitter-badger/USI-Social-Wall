
'use strict';

var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
var config = require("../../config");
var twitterRouter = require("../../routes/twitter/router")



module.exports.getJeson = function(res, hashtag){
	// console.log(req, res)
 // console.log('check','https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23'))
 var oauth = new OAuth.OAuth(
 'https://api.twitter.com/oauth/request_token',
 'https://api.twitter.com/oauth/access_token',
 'ohb9GbS1FS1zGxwjz1LvF4sQR',
 'Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5',
 '1.0A',
 null,
 'HMAC-SHA1'
 );
 oauth.get(
 'https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23')+"&count=20",
 '4226994315-eDbzpMKJ6rOTNBP24n9cvaAOpxK5QaOh1dZzAkP',
 'nUB3f2yCpz3VRVAgCttiS1r1UyNsZxddhzOJ5nt3evckr',
 function (e, data, response) {
 	if (e) console.log(e)
 	twitterRouter.sendData(res, data);
 });

}

