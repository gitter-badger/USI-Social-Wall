/** @module API/API
* Exposes all api
*/
'use strict';

var fs = require('fs');
var API = {};

//check the number of paramiters of the functions.
// getJson must have 3 paramiters or more.
function checkModule(getJson){
    if (getJson.length >= 3){
        return true;
    }
    return false;
}

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

                    //chack the existens and the paramiters of the function getJson
                    if (module.getJson && checkModule(module.getJson)) {
                        API[dir] = module;
                    } else {
                        console.log("getJson must be define and it has to accepts 3 arguments");
                        console.log(err.toString() + err.stack);
                    }
                }catch(err){
                    console.log('Could not get api for ' + dir);
                    console.log(err.toString() + err.stack);
                }
            }
        });
    }
});
module.exports = API;


