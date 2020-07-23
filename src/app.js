const app = angular.module('myApp', []);

app.controller('MainController', function ($http) {
  this.getLink = function (category) {
    return `https://api.themoviedb.org/3/movie/${category}?api_key=${tmdbKey}`;
  };

  $http.get(this.getLink('now_playing'))
    .then((response) => {
      this.nowPlaying = response.data.results;
    });

  // this.nowPlaying = getData('now_playing');

  $http.get(this.getLink('popular'))
    .then((response) => {
      this.latest = response.data.results;
    });

  $http.get(this.getLink('upcoming'))
    .then((response) => {
      this.upcoming = response.data.results;
    });

  this.getImage = function (movie) {
    return imageURL + movie.poster_path;
  };
});

app.factory('getData', function ($http, category) {
  $http.get(this.getLink(category))
    .then((response) => {
      toReturn = response.data.results;
    });

  return toReturn;
});
