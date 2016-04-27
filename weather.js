var request = require('request');


module.exports = function (location) {
  return new Promise(function(resolve, reject){
      var enLocation = encodeURIComponent(location);
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + enLocation + '&units=metric&appid=f3cf2cb9cb60a53c144e3e46fd3525e9';

      if(!location) {
         return reject('No location provided');
      }

      request({
         url: url, 
         json: true
      }, function(error, responce, body){
      if (error) {
         reject('Unable to fetch weather.');
      } else {
         resolve("It's " + body.main.temp + 'C in ' + body.name )
      }
      });
  })
}

