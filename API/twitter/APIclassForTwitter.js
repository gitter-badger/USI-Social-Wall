/** @module API/APIclass
* config for all API
*/
'use strict';

var APIclass = require("../APIclass");

var twitterExtensions = {
    OAuth : APIclass.OAuth,
    config : APIclass.config,
    OAuth : require('oauth')
}

module.exports = twitterExtensions;

