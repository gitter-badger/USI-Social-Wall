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


router.get('/', function(req, res, next) {
  //call the API
  //send the result of the API
  res.json("this is twitter");
 });

module.exports = router;
