var app = angular.module('GiphyApp', []);

app.controller('GiphyController', function(gifService){
  console.log('GiphyController Loaded');

  // dc6zaTOxFJmzC
  var ctrl = this;

  ctrl.giphyList = [];

  // Retrieves the array from the service with a new random gif.
  ctrl.random = function() {
    gifService.getRandom().then(function(newGiphyList) {
      ctrl.giphyList = newGiphyList;
    })
  }; // end random

  // Retrieves the array from the service with a new searched gif.
  ctrl.giphySearch = function(gifName) {
    gifService.gifSearch(gifName).then(function(newGiphyList) {
      ctrl.giphyList = newGiphyList;
    });
    console.log('This is client.js giphyList', ctrl.giphyList);
  }; // end giphySearch




// Working Code
// ctrl.random = function() {
//   gifService.getRandom().then(function(randomGif) {
//     ctrl.giphyList.push(randomGif);
//   }); // end getRandom
// }; // end random
//
// ctrl.giphySearch = function(searchedGif) {
//   gifService.gifSearch(searchedGif).then(function(searchedGif) {
//     ctrl.giphyList.push(searchedGif);
//     console.log('This is giphy list', ctrl.giphyList);
//   }); // end giphySearch
// }; // end giphySearch

});
