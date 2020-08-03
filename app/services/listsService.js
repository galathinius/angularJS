const sessionId = localStorage.getItem("session_id");
const listCreateUrl = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=${sessionId}`;

angular.module("app").factory("listsService", ($http) => ({
  createList(listName) {
    requestBody = {
      name: listName,
      description: "Just an awesome list dawg.",
      language: "en",
    };
    return $http.post(listCreateUrl, requestBody);
  },
}));
