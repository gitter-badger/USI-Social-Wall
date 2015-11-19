/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var Twitter = require('twitter');
// var mongoose = require('mongoose');
// var ObjectId = mongoose.Types.ObjectId;
// var Album = mongoose.model('Album');
var config = require("../../config");

var client = new Twitter({
  consumer_key: "ohb9GbS1FS1zGxwjz1LvF4sQR",
  consumer_secret: 'Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5',
  access_token_key: '4226994315-eDbzpMKJ6rOTNBP24n9cvaAOpxK5QaOh1dZzAkP',
  access_token_secret: 'nUB3f2yCpz3VRVAgCttiS1r1UyNsZxddhzOJ5nt3evckr'
});

router.all('/', middleware.supportedMethods('GET, OPTIONS'));


function twitterHashtag(hashtag){
    client.get('search/tweets', hashtag, function(error, tweets, response){
      if (!error) {
        console.log("tweets success");
        console.log(tweets)
        return JSON.stringify(tweets);
      } else{
        console.log(error)
        console.log('error');
      }
    });
}

router.get('/:hashtag', function(req, res, next) {
  var hashtag = "%23" + req.params.hashtag;

  console.log("hashtag:", hashtag);
  var tweets = twitterHashtag(hashtag)
  res.json(tweets)
  // res.end();
  // res.render('partials/twitter', { title: 'Usi Social-Wall' });
 });

// // This is working
// router.get('/', function(req, res, next) {
//   var params = {screen_name: 'nodejs'};
//   client.get('statuses/user_timeline', params, function(error, tweets, response){
//     if (!error) {
//       res.write(JSON.stringify(tweets));
//       res.end();
//       // console.log(tweets);
//     } else{
//       // console.log(error);
//     }
//   });
//   //call the API
//   //send the result of the API
//   // res.json("this is twitter");
//  });

module.exports = router;
