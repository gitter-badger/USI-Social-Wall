/** @module albums/router */
'use strict';

// var express = require('express');
// var OAuth = require('oauth');
// var config = require("../../../config");
var R = require("request");
var twitterRouter = require("../../../routes/twitter/router")
var twitterExts = require("../APIclassForTwitter")
var config = twitterExts.config;
var OAuth = twitterExts.OAuth;


module.exports.getJeson = function(res, hashtag){
  // var OAuth2 = OAuth.OAuth2;
  // var twitterConsumerKey = 'your key';
  // var twitterConsumerSecret = 'your secret';
  var oauth2 = config.twitter2.oauth2
  
  oauth2.getOAuthAccessToken(
    '', {
      'grant_type': 'client_credentials'
    },
    function (e, access_token, refresh_token, results) {
      var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+hashtag.replace(/#/g,'%23')+'&count=20';
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
        twitterRouter.sendData(res, body)

      });
    });

};