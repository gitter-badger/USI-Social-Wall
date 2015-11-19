/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
// var mongoose = require('mongoose');
// var ObjectId = mongoose.Types.ObjectId;
// var Album = mongoose.model('Album');
var config = require("../../config");

router.all('/', middleware.supportedMethods('GET, OPTIONS'));
// websocket staff !!!!!!!!!
// var pubsub = require('../../pubsub');


router.get('/:hashtag', function(req, res, next) {
  var hashtag = req.params.hashtag
  tweets = calltheAPI(hashtag)
  res.json(tweets)

  // res.render('partials/twitter', { title: 'Usi Social-Wall' });
 });


module.exports = router;
