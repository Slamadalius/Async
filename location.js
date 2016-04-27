var request = require('request');
var url = 'http://ipinfo.io';

module.exports =function(callback) {
   return new Promise(function(resolve, reject){
      request({
      url: url,
      json: true
   }, function(error, responce, body){
      if(error) {
         reject('Unable to quess location');
      } else {
         resolve(body);
      }
   })
   })
};