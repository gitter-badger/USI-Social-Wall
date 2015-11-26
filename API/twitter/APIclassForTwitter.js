/** @module API/twitter/APIclassForTwitter
* config for all twitter API
*/
'use strict';

var APIclass = require("../APIclass");

var twitterExtensions = {
    config : APIclass.config,
    OAuth : require('oauth'),
    APIparser : APIclass.APIparser,
    APIclass : APIclass
}

module.exports = twitterExtensions;

