var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var sites = require('../web/archives/sites.txt');
var input = null;
var headers = {};
var url = require('url')


exports.bee = "bee";

// var webAddress;
// require more modules/folders here!
var webAddress;
exports.webAddress = webAddress;

exports.handleRequest = function (req, res) {
  var reqUrl = req.url;
    if(req.method === 'GET') {
      var useableURL = url.parse(req.url).pathname;
      if(useableURL === '/') {
         fs.readFile(path.join(archive.paths.siteAssets, '/index.html'), function(err, data) {
            if(err) {
              console.log('here');
            }
            else {
              res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length':data.length});
              // res.write(data);
              res.end(data);
            }
        })
      }
      if(useableURL === '/styles.css') {
        fs.readFile(path.join(archive.paths.siteAssets, '/styles.css'), function(err, data) {
          if(err) {
              throw err;
            }
           else {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.end();
        }
       })
     }
  }
  else if (req.method === 'POST') {
    var body = '';
    req.on("data", function(data) {
       body += data;
     });
     req.on('end', function() {
       webAddress = body.slice(4);
       console.log("I am awesome: ", webAddress);
     });
     if (archive.isUrlInList(reqUrl) === true){
       if (archive.isUrlArchived() === true) {
         fs.readFile(path.join(archive.paths.siteAssets, '/loading.html'), function(err, data) {
              if(err) {
                throw err;
              }
              else {
                res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length':data.length});
                // res.write(data);
                res.end(data);
              }
          })
       }
    }
  }
  // if (req.method === 'OPTIONS') {
  //   response.end();
  // }
  // if (req.method === 'OPTIONS') {
  //   response.end();
  // }





  // res.end(archive.paths.list);
};

// siteAssets: path.join(__dirname, '../web/public'),


