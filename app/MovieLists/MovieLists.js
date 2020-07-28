angular.module('app.MovieLists', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'MovieLists/MovieLists.html',
      controller: 'MovieListsCtrl',
    });
  }])
  .controller('MovieListsCtrl', [function () { }]);
