angular.module('app.auth', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'auth/auth.html',
      controller: 'authCtrl',
    });
  }])
  .controller('authCtrl', (authService) => {
    this.$onInit = function () {
      authService.getToken()
        .then(
          (result) => this.logInLink = `https://www.themoviedb.org/authenticate/${result.request_token}?redirect_to=http://localhost:8000/#!/approved`,
        );
    };
 
    // this.logInLink = `https://www.themoviedb.org/authenticate/${this.authToken}?redirect_to=http://localhost:8000/#!/approved`;
  });
