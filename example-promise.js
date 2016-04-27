//function doWork (data, callback) {
//   callback('done');
//}
//
//function doWorkPromise (data) {
//   return new Promise(function(resolve, reject){
//      resolve('everything worked');
////      reject({
////         error: 'something bad happend'
////      })
//   })
//}
//
//doWorkPromise('some data').then(function (data) {
//   console.log(data);
//})

var request = require('request');

function getWeather (location) {
   return new Promise (function (resolve, reject) {
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
      //      console.log(JSON.stringify(body, null, 4));
         resolve("It's " + body.main.temp + 'C in ' + body.name )
      }
      });
   });
}

getWeather('new york').then(function(currentWeather) {
   console.log(currentWeather);
}, function(error){
   console.log(error);
});
