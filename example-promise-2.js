//function doWork() {
//   return new Promise(function(resolve, reject) {
//      setTimeout(function () {
//         console.log('done!');
//         resolve();
//      }, 1000);
//   });
//}
//
//doWork().then(function(){
//   return doWork();
//}).then(function(){
//   console.log('all done');
//}).catch(function(error) {
//   console.log(error);
//});

function getLocation() {
   return new Promise(function(relove, reject){
      resolve('Vilnius');
   });
}

function getWeather(location){
   return new Promise(function(resolve, reject){
      resolve('It is 3 in '+ location);
   });
}

getLocation().then(function (location) {
   return getWeather(location);
}).then (function(currentWeather){
   console.log(currentWeather);
})