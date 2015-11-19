/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var rootUrl = require("../../config").url;


//list users
router.get('/', function(req, res, next) {
	res.render('partials/index', { title: 'Usi Social-Wall' });
    // res.render('index');
  
});
/** router for /users */
module.exports = router;
