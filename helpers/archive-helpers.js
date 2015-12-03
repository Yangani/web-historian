var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var fileData;
var requireHandler = require('../web/request-handler.js')

var beee = requireHandler.bee;
console.log("MY Bee: ", beee)
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../web/archives/sites.txt'),
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  fs.readFile(exports.paths.list, 'utf8', function(err, data) {
      if(err) {
        throw err;
       }
      else {
        console.log("Read File: ", data);
        fileData = data;
      }
    })
}();

exports.isUrlInList = function(reqUrl){
  console.log("here", requireHandler.webAddress);
  //exports.readListofUrls();
  //call readlistofurls, take url param, have readlist return an array of , have readlist make an array from the string it returns
  // var webAddress = "/" + req.url + "/"
  // console.log("Url:" , url)
  for(var i =0; i<fileData.length; i++) {
    if(requireHandler.reqUrl === fileData[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}
//   var fileSearch = fileData.match(webAddress);
//   if(!!fileSearch) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };

exports.addUrlToList = function(){
  if (exports.isUrlInList() === false) {
    fs.writeFile('paths.list', req.url)
  }
};

exports.isUrlArchived = function(url){
  var url = "/" + req.url + "/"
  fs.readdir(paths.archivedSites, function(err, files) {
    if(err) throw err;
    else {
      for(var i=0; i<files.length; i++) {
        if(url === files[i]) {
          return true;
        }
        else {
          return false;
        }
      }
    }
  })
};

exports.downloadUrls = function(){
    if(isUrlArchived() === false) {
      fs.writeFile(url, function(err) {
        if(err) throw err;
        console.log('created!')
      })
    }
};
