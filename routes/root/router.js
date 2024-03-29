/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var rootUrl = require("../../config").url;


//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

//list users
router.get('/', function(req, res, next) {

  res.render('partials/dashboard', {
    activePage: 'settings'
  });

});
/** router for /users */
module.exports = router;
