angular.module("app").config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "components/movieLists/movieLists.html",
      controller: "movieListsCtrl",
    })
    .when("/logIn", {
      templateUrl: "components/auth/auth.html",
      controller: "authCtrl",
      controllerAs: "$ctrl",
    })
    .when("/create", {
      templateUrl: "components/listCreate/listCreate.html",
      controller: "createCtrl",
      controllerAs: "$ctrl",
    })
    .otherwise({ redirectTo: "/logIn" });
});
