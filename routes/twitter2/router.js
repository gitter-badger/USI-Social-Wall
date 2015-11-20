/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/',function(req,res,next){
  res.render('partials/twitter')
  res.end()
})

router.get('/:hashtag', function (req, res, next) {
  var hashtag = req.params.hashtag
});




module.exports = router;
