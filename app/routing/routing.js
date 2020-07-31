angular.module("app").config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "movieLists/movieLists.html",
      controller: "movieListsCtrl",
    })
    .when("/logIn", {
      templateUrl: "auth/auth.html",
      controller: "authCtrl",
      controllerAs: "$ctrl",
    })
    .otherwise({ redirectTo: "/logIn" });
});
