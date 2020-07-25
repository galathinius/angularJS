// angular.module('myApp.list', ['ngRoute'])

//   .config(['$routeProvider', function ($routeProvider) {
//     $routeProvider.when('/list', {
//       template: '<h2>Now Playing</h2>',
//       controller: 'list',
//     });
//   }])

//   .controller('list', [function () {

//   }]);

(function (angular) {
  angular.module('myApp').component('list', {
    template: '<h2>Now Playing</h2>',
    bindings: {
      hero: '=',
    },
  });
}(window.angular));
