/** @module API/APIclass
* config for all API
*/
'use strict';

var APIclass = require("../APIclass");

var twitterExtensions = {
    config : APIclass.config,
    OAuth : require('oauth'),
    APIclass : APIclass
}

module.exports = twitterExtensions;

