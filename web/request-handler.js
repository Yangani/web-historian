var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var sites = require('../archives/sites.txt');
var input = null;
var headers = {};
var url = require('url')
// require more modules/folders here!


exports.handleRequest = function (req, res) {
    if(req.method === 'GET') {
      var useableURL = url.parse(req.url).pathname;
      if(useableURL === '/') {
         fs.readFile(path.join(archive.paths.siteAssets, '/index.html'), function(err, data) {
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
  else {
    console.log('here');
    res.end()
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


