const sessionId = localStorage.getItem("session_id");
const listCreateUrl = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=${sessionId}`;

angular

  .module("app")

  .factory("listsService", ($http) => ({
    createList(listName, listDescription) {
      requestBody = {
        name: listName,
        description: listDescription,
        language: "en",
      };
      return $http.post(listCreateUrl, requestBody);
    },
  }));
