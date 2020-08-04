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
    .when("/create", {
      templateUrl: "listCreate/listCreate.html",
      controller: "createCtrl",
      controllerAs: "$ctrl",
    })
    .otherwise({ redirectTo: "/logIn" });
});
