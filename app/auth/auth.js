angular
  .module("app.auth", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/logIn", {
        templateUrl: "auth/auth.html",
        controller: "authCtrl",
        controllerAs: "$ctrl",
      });
    },
  ])
  .controller("authCtrl", function (authService) {
    $ctrl = this;
    authService
      .getToken()
      .then(
        (result) =>
          ($ctrl.logInLink = `https://www.themoviedb.org/authenticate/${result}?redirect_to=http://localhost:8000/#!/`)
      );
  });
