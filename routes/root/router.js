'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
 res.render('partials/index', { title: 'Usi Social-Wall' });
});

module.exports = router;