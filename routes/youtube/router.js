/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");
var R = require("request");
var search = require('youtube-search');
var opts = {
  maxResults: 20,
  key: 'AIzaSyD_OCg4U-uwU83Tev7mLfPEzknRCD4Q-XU'    // server key
};

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/', function (req, res, next) {
  res.write('ciao youtube')
  res.end()
})

router.get('/:hashtag', function (req, res, next) {
  var hashtag = req.params.hashtag
  search(hashtag, opts, function(err, results) {
    if(err) return console.log(err);
    console.dir(results)
    res.json(results);
  });

});

module.exports = router;
