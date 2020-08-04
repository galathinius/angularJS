angular
  .module("app.movieLists", ["ngRoute"])

  .controller("movieListsCtrl", function (authService, $location) {
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

    // const qs = $location.search();
    // if (qs.approved === true) {
    //   console.log(qs);
    //   authService.getSessionId(qs.request_token).then((res) => {
    //     localStorage.setItem("session_id", res.data.session_id);
    //     return res.data.session_id;
    //   });
    //   // window.location.assign("http://localhost:8000/");
    // }
    // console.log(qs);
  });
