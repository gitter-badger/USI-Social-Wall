/** @module albums/router */
'use strict';

var R = require("request");
var twitterExts = require("../APIclassForTwitter");
var config = twitterExts.config;
var OAuth = twitterExts.OAuth;
var Twitter_1_1 = twitterExts.APIparser.Twitter_1_1;



module.exports.getJson = function(res, hashtag, options){
  // var OAuth2 = OAuth.OAuth2;
  // var twitterConsumerKey = 'your key';
  // var twitterConsumerSecret = 'your secret';
  console.log("enter2")
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
        
        Twitter_1_1.parseData(res, body,options);
        console.log("out2")

      });
    });

};