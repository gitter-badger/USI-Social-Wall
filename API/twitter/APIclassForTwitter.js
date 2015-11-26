/** @module API/twitter/APIclassForTwitter
 * config for all twitter API
 */
'use strict';

var APIclass = require("../APIclass");
var validOptions = {
    'since': true,
    'until': true,
    'from': true
};

var twitterExtensions = {
    config: APIclass.config,
    OAuth: require('oauth'),
    APIparser: APIclass.APIparser,
    APIclass: APIclass,
    checkOptions: function(url, options) {
        for (var entry in options) {
            if (validOptions.hasOwnProperty(entry)) {
                if (validOptions[entry]) {
                    url += '%20' + entry + ':' + options[entry];
                }
            }
        }
        if (options.hasOwnProperty('count')){
        	url += '&count=' + options['count'];
        }
        return url;
    }
}

module.exports = twitterExtensions;