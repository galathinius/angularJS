angular.module("app", [
  "services.lists",
  "services.auth",
  "services.movies",
  "app.movieLists",
  "ngRoute",
  "app.auth",
  "app.listCreate",
  "app.list",
]);
// .config(function ($locationProvider) {
//   $locationProvider.html5Mode(true);
// });
