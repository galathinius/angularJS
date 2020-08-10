const getTokenLink = `https://api.themoviedb.org/3/authentication/token/new?api_key=${tmdbKey}`;
const postSessionLink = `https://api.themoviedb.org/3/authentication/session/new?api_key=${tmdbKey}`;

angular

  .module("services.auth", [])

  .factory("authService", ($http) => ({
    getToken() {
      return $http
        .get(getTokenLink)
        .then((result) => result.data.request_token);
    },
    getSessionId(token) {
      requestBody = { request_token: token };

      return $http.post(postSessionLink, requestBody);
    },
  }));
