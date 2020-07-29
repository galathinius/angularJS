const app = angular.module('app', [
  'app.movieLists', 'ngRoute', 'app.auth',
])
  . config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
