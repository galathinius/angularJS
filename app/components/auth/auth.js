angular
  .module("app.auth", ["ngRoute"])

  .controller("authCtrl", function (authService) {
    $ctrl = this;
    authService
      .getToken()
      .then(
        (result) =>
          ($ctrl.logInLink = `https://www.themoviedb.org/authenticate/${result}?redirect_to=http://localhost:8000/#!/`)
      );
  });
