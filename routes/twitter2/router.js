/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");
var R = require("request");

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/', function (req, res, next) {
  res.render('partials/twitter')
})

router.get('/:hashtag', function (req, res, next) {
  var hashtag = req.params.hashtag
  var OAuth2 = OAuth.OAuth2;
  // var twitterConsumerKey = 'your key';
  // var twitterConsumerSecret = 'your secret';
  var oauth2 = new OAuth2('ohb9GbS1FS1zGxwjz1LvF4sQR',
    "Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5",
    'https://api.twitter.com/',
    null,
    'oauth2/token',
    null);
  oauth2.getOAuthAccessToken(
    '', {
      'grant_type': 'client_credentials'
    },
    function (e, access_token, refresh_token, results) {
      var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + hashtag.replace(/#/g, '%23') + '&count=20';
      var bearerToken = access_token; //the bearer token obtained from the last script

      R({
        url: url,
        method: 'GET',
        qs: {
          "screen_name": "stadolf"
        },
        json: true,
        headers: {
          "Authorization": "Bearer " + bearerToken
        }

      }, function (err, resp, body) {

        res.json(resp)

      });
    });

});




module.exports = router;
