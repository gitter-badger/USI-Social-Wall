/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/',function(req,res,next){
 res.render('partials/twitter')
})

router.get('/:hashtag', function (req, res, next) {
 var hashtag = req.params.hashtag
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
 res.write(data)
 res.end()
 });
});




module.exports = router;
