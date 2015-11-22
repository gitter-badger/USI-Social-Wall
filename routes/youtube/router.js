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
