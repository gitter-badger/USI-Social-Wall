/** @module routes/routers
* Exposes all routers
*/
'use strict';

var fs = require('fs');
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
                try{
                    var module = require(path + '/api');
                    API[dir] = module;
                }catch(err){
                    console.log('Could not get api for ' + dir);
                    console.log(err.toString() + err.stack);
                }
            }
        });
    }
});
console.log(API)
module.exports = API;


