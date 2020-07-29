angular.module('app.auth', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/1', {
      templateUrl: 'auth/auth.html',
      controller: 'authCtrl',
    });
  }])
  .controller('authCtrl', (authService) => {
    // $ctrl = this;
    this.$onInit = function () {
      authService.getToken()
        .then(
          (result) => this.logInLink = `https://www.themoviedb.org/authenticate/${result.request_token}?redirect_to=http://localhost:8000/#!/approved`,
        );
    };
    // console.log(this.Token);
    // this.logInLink = `https://www.themoviedb.org/authenticate/${this.authToken}?redirect_to=http://localhost:8000/#!/approved`;
  });
