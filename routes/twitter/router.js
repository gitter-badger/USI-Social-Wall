/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
<<<<<<< HEAD
var Twit = require('twit')
var config = require("../../config");

var Twitter = new Twit({
  "consumer_key": "ohb9GbS1FS1zGxwjz1LvF4sQR",
  "consumer_secret": 'Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5',
  "access_token": '4226994315-eDbzpMKJ6rOTNBP24n9cvaAOpxK5QaOh1dZzAkP',
  "access_token_secret": 'nUB3f2yCpz3VRVAgCttiS1r1UyNsZxddhzOJ5nt3evckr'
});

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/:hashtag', function (req, res, next) {
  var params = req.params.hashtag
  console.log(params)

  Twitter.get('search/tweets', {
    q: '#usi #lugano since:2013-07-19',
    count: 100,
  }, function (err, data, response) {
    res.json(data)
  })
=======
var OAuth = require('oauth');
var config = require("../../config");

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/',function(req,res,next){
  res.write('twitter route')
  res.end()
})

router.get('/:hashtag', function (req, res, next) {
  var hashtag = req.params.hashtag
  console.log('check','https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23'))
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'ohb9GbS1FS1zGxwjz1LvF4sQR',
    'Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5',
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  console.log('after oauth')
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23')+"&count=20",
    '4226994315-eDbzpMKJ6rOTNBP24n9cvaAOpxK5QaOh1dZzAkP',
    'nUB3f2yCpz3VRVAgCttiS1r1UyNsZxddhzOJ5nt3evckr',
    function (e, data, response) {
      if (e) console.log(e)
      res.write(data)
      res.end()
    });
>>>>>>> fraccaroli
});


module.exports = router;
