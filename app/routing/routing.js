angular.module("app").config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "components/movieLists/movieLists.view.html",
      controller: "movieListsCtrl",
    })
    .when("/logIn", {
      templateUrl: "components/auth/auth.view.html",
      controller: "authCtrl",
      controllerAs: "$ctrl",
    })
    .when("/create", {
      templateUrl: "components/listCreate/listCreate.view.html",
      controller: "createCtrl",
      controllerAs: "$ctrl",
    })
    .otherwise({ redirectTo: "/logIn" });
});
