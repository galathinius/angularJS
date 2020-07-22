const app = angular.module('myApp', []);

app.controller('MainController', function ($http) {
  // console.log('Helloooo');
  // this.message = 'hellooo';
  // this.sayHello = function (name) {
  //   return `${this.message} ${name}`;
  // };

  const tmdbKey = '06f99320c4d4aafa43383b3d6c8da151';
  const imageURL = 'https://image.tmdb.org/t/p/w500';

  this.getLink = function (category) {
    return `https://api.themoviedb.org/3/movie/${category}?api_key=${tmdbKey}`;
  };

  $http.get(this.getLink('now_playing'))
    .then((response) => {
      this.nowPlaying = response.data.results;
    });

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

// https://api.themoviedb.org/3/movie/now_playing?api_key=${this.tmdbKey}
