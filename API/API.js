/** @module routes/routers
* Exposes all routers
*/
'use strict';

var fs = require('fs');
var base = __dirname + '/';
var API = {};
console.log("API.js        ......         !!!!!!!!")


fs.readdirSync(__dirname).forEach(function(file) {       
    var file = __dirname+'/'+file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
        fs.readdirSync(file).forEach(function(dir) {
            var path = file+ '/' + dir;
            var subStatic = fs.statSync(path);
            if (subStatic && subStatic.isDirectory()) {
                var module = require(path + '/api');
                API[dir] = module;
            }
        });
    }
});

module.exports = API;


