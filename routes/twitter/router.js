/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
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
});


module.exports = router;
