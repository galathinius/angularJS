(function (angular) {
  angular.module('myApp').component('list', {
    templateUrl: '<h2>Now Playing</h2>',
    bindings: {
      hero: '=',
    },
  });
}(window.angular));
