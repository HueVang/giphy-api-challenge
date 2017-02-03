var app = angular.module('GiphyApp', []);

app.controller('GiphyController', function(gifService){
  console.log('GiphyController Loaded');

  // dc6zaTOxFJmzC
  var ctrl = this;

  ctrl.giphyList = [];

  // ctrl.random = function() {
  //   var test = gifService.getRandom();
  //   ctrl.giphyList = gifService.getRandom();
  //   console.log('This is ctrl giphyList', test.$$state.value);
  // }; // end random
  //
  // ctrl.giphySearch = function() {
  //   ctrl.giphyList = gifService.gifSearch();
  //   console.log('This is ctrl giphyList', ctrl.giphyList);
  // }; // end giphySearch

ctrl.random = function() {
  gifService.getRandom().then(function(randomGif) {
    ctrl.giphyList.push(randomGif);
  }); // end getRandom
}; // end random

ctrl.giphySearch = function(searchedGif) {
  gifService.gifSearch(searchedGif).then(function(searchedGif) {
    ctrl.giphyList.push(searchedGif);
    console.log('This is giphy list', ctrl.giphyList);
  }); // end giphySearch
}; // end giphySearch

});
