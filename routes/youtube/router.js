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
  res.write('ciao youtube')
  res.end()
})

var search = require('youtube-search');
var opts = {
  maxResults: 20,
  key: 'AIzaSyBnRP4hwJoRqgbmL027mBcu-tY0SQJHm6o'
};

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

search('deadmau5', opts, function(err, results) {
  if(err){
    return console.log("This is an error:", err);
  }
  console.dir(results);
});

// function searchByKeyword(keyword){
//   search(keyword, opts, function(err, results){
//     if(err){
//       return console.log(err);
//     }
//     console.dir(results);
//   });
// }

router.get('/',function(req,res,next){
  res.render('partials/youtube')
  res.end()
})

router.get('/:hashtag', function (req, res, next) {
  var hashtag = req.params.hashtag
  searchByKeyword(hashtag);
});


module.exports = router;
