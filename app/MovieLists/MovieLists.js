angular
  .module("app.movieLists", ["ngRoute"])

  .controller("movieListsCtrl", function (authService) {
    const url = window.location.href;
    const regToken = /request_token=(.*)&approved=true/;
    const newToken = url.match(regToken);

    if (newToken) {
      console.log("extract token", newToken[1]);

      authService.getSessionId(newToken[1]).then((res) => {
        localStorage.setItem("session_id", res.data.session_id);
        return res.data.session_id;
      });
    }
  });
