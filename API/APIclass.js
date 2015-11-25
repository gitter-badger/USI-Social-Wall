/** @module API/APIclass
* config for all API
*/
'use strict';
var routers = require('../routes/routers');
console.log("eeeeeeiiiiiiiieieieieieei", routers.twitter)
var apiExtensions = {
    OAuth : require('oauth'),
    config : require("../config")

}

module.exports = apiExtensions;

