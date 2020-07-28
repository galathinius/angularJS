angular.module('app.movieLists', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'movieLists/movieLists.html',
      controller: 'movieListsCtrl',
    });
  }])
  .controller('movieListsCtrl', [function () { }]);
