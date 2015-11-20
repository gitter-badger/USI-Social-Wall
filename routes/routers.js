/** @module routes/routers 
* Exposes all routers
*/
'use strict';

var fs = require('fs');

var dirEntries = fs.readdirSync(__dirname);
var base = __dirname + '/';
var routers = {};

try{
  dirEntries.forEach(function(dirEntry){
<<<<<<< HEAD
=======

>>>>>>> master
    var stats =  fs.statSync(base + dirEntry);
    //try to load router of dir
    if(stats.isDirectory()){
      try{
<<<<<<< HEAD
        var router = require(base +  dirEntry + '/router');
=======

        var router = require(base +  dirEntry + '/router');

>>>>>>> master
        //add router to our list of routers;
        routers[dirEntry] = router;
      }catch(err){
        console.log('Could not get router for ' + dirEntry);
        console.log(err.toString() + err.stack);
      }
    }
  });
}catch(err){
  console.log('Error while loading routers');
  console.log(err.stack);
  //We don't know what happened, export empty object
  routers = {}
}finally{
  module.exports = routers;
}

