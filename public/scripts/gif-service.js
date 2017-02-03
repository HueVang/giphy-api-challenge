app.service('gifService', function($http) {

var RANDOMAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

// var giphyList = [];

// this.getRandom = function() {
//   return $http.get(RANDOMAPI).then(function(response){
//     console.log('Gif ', response);
//     giphyList.push(response.data.data.image_original_url);
//     // return response.data.data.image_original_url;
//     return giphyList;
//   }).catch(function(err){
//     console.log('Error', err);
//   });
// } // end getRandom function
//
// this.gifSearch = function(gifName) {
//   var searchGif = ('http://api.giphy.com/v1/gifs/search?q=' + gifName + '&api_key=dc6zaTOxFJmzC');
//   return $http.get(searchGif).then(function(response){
//     console.log('Gif', response);
//     var index = 0;
//     while (giphyList.includes(response.data.data[index].images.original.url)) {
//       index += 1;
//     }
//     giphyList.push(response.data.data[index].images.original.url);
//     console.log('This is giphy list', giphyList);
//     // return response.data.data[index].images.original.url;
//     return giphyList;
//   }).catch(function(err){
//     console.log('Error', err);
//   })
// } // end giphySearch function

this.getRandom = function() {
  return $http.get(RANDOMAPI).then(function(response){
    console.log('Gif ', response);
    return response.data.data.image_original_url;
  }).catch(function(err){
    console.log('Error', err);
  });
} // end getRandom function

this.gifSearch = function(gifName) {
  var searchGif = ('http://api.giphy.com/v1/gifs/search?q=' + gifName + '&api_key=dc6zaTOxFJmzC');
  return $http.get(searchGif).then(function(response){
    console.log('Gif', response);
    return response.data.data[0].images.original.url;
  }).catch(function(err){
    console.log('Error', err);
  })
} // end giphySearch function

}) // end app.service
