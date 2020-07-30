angular
  .module("app.movieLists", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "movieLists/movieLists.html",
        controller: "movieListsCtrl",
      });
    },
  ])
  .controller("movieListsCtrl", function (authService) {
    const url = window.location.href;
    const regToken = /request_token=(.*)&approved=true/;
    const newToken = url.match(regToken);

    if (newToken) {
      console.log("extract token", newToken[1]);

      authService.getSessionId(newToken[1]).then((res) => {
        console.log(res.data.session_id);
        return res.data.session_id;
      });
    }
  });
