const app = angular.module('myApp', []);

app.controller('MainController', function (movieService) {
  movieService.getData('now_playing')
    .then((result) => this.nowPlaying = result);

  movieService.getData('popular')
    .then((result) => this.latest = result);

  movieService.getData('upcoming')
    .then((result) => this.upcoming = result);

  this.getImage = function (movie) {
    return imageURL + movie.poster_path;
  };
});

// app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({ redirectTo: '/list' });
// }]);
